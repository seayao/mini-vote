const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

exports.main = async(event, context) => {
  try {
    // 从云开数据库中查询等待发送的消息列表
    const messageList = await db.collection('message').where({
      projectId: event.projectId,
      done: false
    }).get()
    // 循环消息列表
    const sendPromises = messageList.data.map(async message => {
      try {
        // 发送订阅消息
        await cloud.openapi.subscribeMessage.send({
          touser: message.touser,
          page: message.page,
          templateId: message.templateId,
          data: {
            name1: {
              value: message.createUser
            },
            thing6: {
              value: message.title
            }
          }
        })
        // 发送成功后将消息的状态改为已发送
        return db.collection('message').doc(message._id).update({
          data: {
            done: true
          }
        })
      } catch (e) {
        return e
      }
    })
    return Promise.all(sendPromises)
  } catch (err) {
    console.log(err)
    return err
  }
}
