module.exports =  function wxRequestAdapter(config) {
    return new Promise(function(resolve, reject) {
        let requestType = 'request';

        let contentType = config.headers['Content-Type'];
        if (contentType == 'multipart/form-data') {
            requestType = 'uploadFile';
        }

        let header = {
            'content-type': contentType
        }
        if (config.headers['Authorization']) {
            header['Authorization'] = config.headers['Authorization'];
        }

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
        } else { // wx.uploadFile
            request = {
                url: config.url,
                header: header,
                filePath: config.data.filePath,
                name: 'FileData',
                formData: config.data.formData
            }
        }

        request['success'] = response => {
            /*Since wx.request always calls the success callback regardless
            of the HTTP status code (even for 4xx and 5xx), we use our own response code to differentiate.
            */
            if (response['response'] < 400) {
              resolve(response)
            }
            else {
              reject(response)
            }
        }

        request.fail = response => {
            reject(response);
        }

        wx[requestType](request);
    });
}