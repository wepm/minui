module.exports = {
  'success': {
    'statusCode': 200,
    'data': [
      {
        "post_tag_id": 1,
        "name_of_tag": "Facebook"
      },
      {
        "post_tag_id": 2,
        "name_of_tag": "Lollipop Pro"
      },
      {
        "post_tag_id": 3,
        "name_of_tag": "巧克力"
      },
      {
        "post_tag_id": 4,
        "name_of_tag": "雨伞"
      },
      {
        "post_tag_id": 5,
        "name_of_tag": "钱包"
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
    }
  }
}