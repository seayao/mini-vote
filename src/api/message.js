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

export function messageUpdateApi(projectId, data) {
  return new Promise((resolve, reject) => {
    db.collection('message').doc(projectId).update({data}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
