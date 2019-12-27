const db = wx.cloud.database()

export function userListApi(data) {
  return new Promise((resolve, reject) => {
    db.collection('user').where(data).orderBy('createTime', 'desc').get().then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export function userDetailApi(id) {
  return new Promise((resolve, reject) => {
    db.collection('user').where({_openid: id}).get().then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export function userAddApi(data) {
  return new Promise((resolve, reject) => {
    db.collection('user').add({data}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export function userUpdateApi(data) {
  return new Promise((resolve, reject) => {
    db.collection('user').doc(data.id).update({data}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

