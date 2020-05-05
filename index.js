const admin = require('firebase-admin')
const serviceAccount = require('[./db.json]')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()
const usersSnapshot = db.collection('users')

const addData = {
  name: 'tanaka',
  pc: 'mac',
}

const updateData = {
  name: 'tanaka',
  pc: 'windows',
}

/**
 * select & where
 */
usersSnapshot.where('name', '==', 'yoshida').get().then((users) => {
  users.forEach((doc) => {
    console.log(doc.id, '=>', doc.data())
  })
}).catch((err) => {
  console.log(err)
})

/**
 * add
 */
usersSnapshot.add(addData).then(docRef => {
  console.log(docRef.id)
}).catch(err => {
  console.log(err)
})

/**
 * update
 */
usersSnapshot.doc('doc_id').update(updateData).then(docRef => {
  console.log(docRef)
}).catch(err => {
  console.log(err)
})

/**
 * delete
 */
usersSnapshot.doc('doc_id').delete().then(docRef => {
  console.log(docRef)
}).catch(err => {
  console.log(err)
})
