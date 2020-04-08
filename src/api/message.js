const db = wx.cloud.database()

export function messageListApi(data) {
  return new Promise((resolve, reject) => {
    db.collection('message').where(data).get().then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
