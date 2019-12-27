const db = wx.cloud.database()

export function projectListApi(data) {
  return new Promise((resolve, reject) => {
    db.collection('project').where(data).orderBy('createTime', 'desc').get().then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export function projectDetailApi(id) {
  return new Promise((resolve, reject) => {
    db.collection('project').doc(id).get().then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export function projectAddApi(data) {
  return new Promise((resolve, reject) => {
    db.collection('project').add({data}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
