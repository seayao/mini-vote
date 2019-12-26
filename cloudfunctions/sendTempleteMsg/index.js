// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require('request-promise')

cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
  const body = {
    "touser": event.openId,
    "template_id": event.templeteId,
    "page": event.page + "?project_id=" + event.projectId + "&state=" + event.pageState,
    "form_id": event.formId,
    "data": {
      "keyword1": {
        "value": event.projectName
      },
      "keyword2": {
        "value": event.projectCreate
      },
      "keyword3": {
        "value": event.lastVoteResult
      }
    }
  }
  const sendData = {
    method: 'POST',
    url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + event.token,
    body,
    json: true
  }
  return await rp(sendData);
}