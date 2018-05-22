/** An adapter that mocks fake responses
 *    according to our api_doc.md
 */
var searchHistoryTagListResponse = require('./get-search-history')
var deleteHistoryResponse = require('./delete-history')
var hotPostTagListResponse = require('./hot-post-tag-list')
var APIS = require('./api.js')

module.exports =  function mockAxiosAdapter(config) {
    return new Promise(function(resolve, reject) {
        console.log("entering mock axios adapter")
        console.log(config)

        //requestType
        let requestType = 'request';
        let contentType = config.headers['Content-Type'];
        if (contentType == 'multipart/form-data') {
            requestType = 'uploadFile';
        }

        //header
        let header = {
            'content-type': contentType
        }
        if (config.headers['Authorization']) {
            header['Authorization'] = config.headers['Authorization'];
        }

        //request
        let request = {};
        if (requestType == 'request') { // wx.request
            request = {
                url: config.url,
                method: config.method,
                header: header,
            }

            if (config.method == 'get') {
                request['data'] = config.params;
            } else {
                request['data'] = config.data;
            }
        }
        else { // wx.uploadFile
            request = {
                url: config.url,
                header: header,
                filePath: config.data.filePath,
                name: 'FileData',
                formData: config.data.formData
            }
        }
        /*
          "app_user_id":"sample_app_user_id",
          "token":"sample_token",
          "area_id":"sample_area_id",
        */
        const responses = {
          "xc_get_hot_post_tag_list": hotPostTagListResponse,
          "xc_get_search_history_deleted_list": deleteHistoryResponse, 
          "xc_get_search_history_tag_list": searchHistoryTagListResponse
        }
        let APIMatched = false;
        APIS.forEach(function (value, index, array){
          const tempFullURL = config.baseURL + value['uri']
          if (request.url == tempFullURL) {
            APIMatched = true;
            var wrong = false
            value['paramName'].forEach(function(paramName) {
              var hasParameter = request.data.hasOwnProperty(paramName);
              if (!hasParameter){
                wrong = true
                return
              }
            })
            if (wrong){
              reject({
                response: 999,
                err_msg: 'no matched API' 
              })
            }
            else {
              resolve(responses[value['uri']]['success'])
            }
          }
        })
        if (!APIMatched){
          reject({
            statusCode:999,
            errMsg:"No Matched API"
          })
        }
    });
}