const db = wx.cloud.database()

export function scoreListApi(optionId) {
  return new Promise((resolve, reject) => {
    db.collection('score').where({ optionId }).get().then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export function scoreAddApi(data) {
  return new Promise((resolve, reject) => {
    db.collection('score').add({data}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
