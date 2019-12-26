// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require('request-promise')

cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
  try {
    return await rp('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + event.appId + '&secret=' + event.appSecret);
  } catch (e) {
    console.log(e)
  }
}