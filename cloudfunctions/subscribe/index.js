const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

exports.main = async(event, context) => {
  try {
    const { OPENID } = cloud.getWXContext()
    return await db.collection('message').add({
      data: {
        projectId: event.projectId,
        title: event.title,
        createUser: event.createUser,
        touser: OPENID, // 订阅者的openid
        page: event.page, // 订阅消息卡片点击后会打开小程序的哪个页面
        templateId: event.templateId, // 订阅消息模板ID
        done: false // 消息发送状态设置为 false
      }
    })
  } catch (err) {
    console.error(err)
  }
}
