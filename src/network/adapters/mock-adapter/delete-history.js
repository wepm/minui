/*
  data	Object/String/ArrayBuffer	开发者服务器返回的数据
  statusCode	Number	开发者服务器返回的 HTTP 状态码
  header
*/
module.exports = {
  'success': {
    'statusCode': 200,
    'data': 'deletion successful'
  },
  'fail': {
    403:{
      'errMsg': "App user has not registered phone or email.",
      'statusCode': 403
    },
    4040:{
      'errMsg': "App user does not exist.",
      'statusCode': 404
    },
    4041:{
      'errMsg': "App user token does not match.",
      'statusCode': 404
    }
  }
}