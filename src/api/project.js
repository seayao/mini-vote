const db = wx.cloud.database()
const _ = db.command

export function projectListApi(guestId, skip, limit) {
  return new Promise((resolve, reject) => {
    db.collection('project').where(_.or([
      {
        isOpen: true
      },
      {
        guestIds: _.in([guestId])
      }
    ])).orderBy('createTime', 'desc').skip(skip).limit(limit).get().then(res => {
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

export function projectUpdateApi(_id, data) {
  return new Promise((resolve, reject) => {
    db.collection('project').doc(_id).update({data}).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
