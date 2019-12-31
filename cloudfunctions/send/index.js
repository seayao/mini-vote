const cloud = require('wx-server-sdk')

cloud.init()

exports.main = (event, context) => {
  const touserList = event.receiveIds
  touserList.map(async (t) => {
    try {
      // 发送订阅消息
      await cloud.openapi.subscribeMessage.send({
        touser: t,
        page: event.page,
        templateId: event.templateId,
        data: {
          name1: {
            value: event.createUser
          },
          thing6: {
            value: event.title
          }
        }
      })
    } catch (e) {
      return e
    }
  })
}
