module.exports = {
  'success': {
    'statusCode': 200,
    'data': [
      {
        "post_tag_id": 1,
        "name_of_tag": "热搜1号"
      },
      {
        "post_tag_id": 2,
        "name_of_tag": "热搜2号"
      },
      {
        "post_tag_id": 3,
        "name_of_tag": "鬼知道什么东西"
      },
      {
        "post_tag_id": 4,
        "name_of_tag": "口红"
      },
      {
        "post_tag_id": 5,
        "name_of_tag": "热搜n号"
      },
    ]
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
    },
    4042:{
      'errMsg': "Area does not exist.",
      'statusCode': 404
    }
  }
}