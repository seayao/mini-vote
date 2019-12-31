const db = wx.cloud.database()

export function optionListApi(projectId) {
  return new Promise((resolve, reject) => {
    db.collection('option').where({ projectId }).get().then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export function optionAddApi(data) {
  return new Promise((resolve, reject) => {
    db.collection('option').add({data}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export function optionUpdateApi(_id, data) {
  return new Promise((resolve, reject) => {
    db.collection('option').doc(_id).update({data}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
