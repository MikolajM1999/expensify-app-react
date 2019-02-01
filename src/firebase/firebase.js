import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').push({
//     description: 'Tron',
//     note: '',
//     amount: 12,
//     createdAt: 32393434
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses)
// })

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// })

// database.ref().once('value').then((data) => {
//     const val = data.val()
//     console.log(val)
// }).catch((e) => {
//     console.log('Error: ', e)
// })

// database.ref().set({
//     name: "Mikołaj Malicki",
//     age: 20,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Bydgoszcz',
//         country: 'Polska'
//     },
//     kogoJebie: 'Disa'
// }).then(() => {
//     console.log('data is saved')
// }).catch((error) => {
//     console.log('Error: ', error)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('data is updated')
// }).catch((error) => {
//     console.log('Error: ', error)
// })

// database.ref().remove().then(() => {
//     console.log('removed succesfully')
// }).catch((e) => {
//     console.log('remove failed: ', e)
// })