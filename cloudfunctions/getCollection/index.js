// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
// 云函数入口函数
exports.main = async(event, context) => {
  const targetDB = db.collection(event.db)
  try {
    return await targetDB.where(event.data).get()
  } catch (e) {
    console.error(e)
  }
}
