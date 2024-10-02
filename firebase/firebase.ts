import {
    getDatabase,
    ref,
    onValue,
    get,
    set,
    child,
    update,
    remove,
} from 'firebase/database'
import { initializeApp } from 'firebase/app'
import {
    getAuth,
    createUserWithEmailAndPassword,
    connectAuthEmulator,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
    updateEmail,
    updatePassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    deleteUser,
    reauthenticateWithCredential,
    EmailAuthProvider,
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyB6uNgZGer-T5jzEzu0lOPGVcKZOSSQT_0',
    authDomain: 'dummyredux.firebaseapp.com',
    databaseURL: 'https://dummyredux-default-rtdb.firebaseio.com',
    projectId: 'dummyredux',
    storageBucket: 'dummyredux.appspot.com',
    messagingSenderId: '857797593608',
    appId: '1:857797593608:web:82157852acd269ba851fbd',
}

const app = initializeApp(firebaseConfig)

const realtimeDb = getDatabase(app)
export const auth = getAuth(app)

// export const writeUserData = (userName, email, profilePicture) => {
//     const usersRef = ref(realtimeDb, 'users/')
//     set(usersRef, {
//         username: userName,
//         email,
//         profilePicture,
//     })
// }

// AUTH

export const user = auth.currentUser

if (user !== null) {
    console.log('user', user)
}

//
export const authUser = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password).catch(
        (error) => {
            console.log(error)
        }
    )
}

export const signInUser = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password).catch((error) => {
        console.log(error)
    })
}

export const signOutUser = async () => {
    await signOut(auth).catch((error) => {
        console.log(error)
    })
}

// OBSERVER
const unsubscribeAuthStateChanged = onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('onAuthStateChanged', user)
    } else {
        console.log('signOutUser')
    }
})

export const unsubscribe = () => {
    unsubscribeAuthStateChanged()
}

export const updateUserEmail = (email) => {
    updateEmail(user, email)
        .then(() => {
            console.log('updateUserEmail')
        })
        .catch((error) => {
            console.log(error)
        })
}

export const updateUserPassword = (password) => {
    updatePassword(user, password)
        .then(() => {
            console.log('updateUserPassword')
        })
        .catch((error) => {
            console.log(error)
        })
}

export const updateUserProfile = () => {
    updateProfile(user, {
        displayName: 'Jane Q. User',
        photoURL: 'https://example.com/jane-q-user/profile.jpg',
    })
        .then(() => {
            console.log('updateUserProfile')
        })
        .catch((error) => {
            console.log(error)
        })
}

// EMAIL

export const sendUserPasswordResetEmail = () => {
    sendPasswordResetEmail(auth, user.email)
        .then(() => {
            console.log('sendUserPasswordResetEmail')
        })
        .catch((error) => {
            console.log(error)
        })
}

export const sendUserEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
        .then(() => {
            console.log('sendUserEmailVerification')
        })
        .catch((error) => {
            console.log(error)
        })
}

export const reauthenticateUserWithCredential = (email) => {
    const authCredential = EmailAuthProvider.credentialWithLink(
        auth,
        email,
        window.location.href
    )

    reauthenticateWithCredential(user, authCredential)
        .then(() => {
            console.log('reauthenticateWithCredential')
        })
        .catch((error) => {
            console.log(error)
        })
}

export const deleteUserAccount = () => {
    deleteUser(user)
        .then(() => {
            alert('deleteUserAccount')
        })
        .catch((error) => {
            console.log(error)
        })
}

// REALTIME DATABASE

export const addNewCollection = async (uid, formData) => {
    const newCollectionRef = ref(
        realtimeDb,
        `users/${uid}/collections/${formData.id}`
    )
    set(newCollectionRef, formData)
        .then(() => {
            alert('addNewCollection')
        })
        .catch((error) => {
            alert('error')
        })
}

export const addNewCollectionItem = async (uid, collectionId, formData) => {
    const newCollectionItemRef = ref(
        realtimeDb,
        `users/${uid}/collections/${collectionId}/itemsList/${formData.id}`
    )
    set(newCollectionItemRef, formData)
        .then(() => {
            alert('addNewCollectionItem')
        })
        .catch((error) => {
            alert('error')
        })
}

// export const readCollectionData = (uid, collectionId) => {
//     const collectionRef = ref(
//         realtimeDb,
//         `users/${uid}/collections/${collectionId}`
//     )
//     onValue(collectionRef, (snapshot) => {
//         const data = snapshot.val()
//         console.log(data)
//     })
// }

export const getCollection = (uid, collectionId) => {
    const dbRef = ref(realtimeDb)

    return get(child(dbRef, `users/${uid}/collections/${collectionId}`))
        .then((dataSnapshot) => {
            if (dataSnapshot.exists()) {
                console.log('getCollection', dataSnapshot.val())

                return dataSnapshot.val()

                // const collectionName = dataSnapshot.val().name
                // const collectionImage = dataSnapshot.val().image

                // console.log(collectionName, collectionImage)
            } else {
                console.log('No data available')
            }
        })
        .catch((error) => {
            console.error(error)
        })
}

export const getCollectionItem = (uid, collectionId, itemId) => {
    const dbRef = ref(realtimeDb)

    return get(
        child(
            dbRef,
            `users/${uid}/collections/${collectionId}/itemsList/${itemId}`
        )
    )
        .then((dataSnapshot) => {
            if (dataSnapshot.exists()) {
                console.log('getCollectionItem', dataSnapshot.val())

                return dataSnapshot.val()
            } else {
                console.log('No data available')
            }
        })
        .catch((error) => {
            console.error(error)
        })
}

export const getCollections = (uid) => {
    const dbRef = ref(realtimeDb)

    return get(child(dbRef, `users/${uid}/collections`))
        .then((dataSnapshot) => {
            if (dataSnapshot.exists()) {
                console.log('getCollections', dataSnapshot.val())

                return dataSnapshot.val()

                // const collectionName = dataSnapshot.val().name
                // const collectionImage = dataSnapshot.val().image

                // console.log(collectionName, collectionImage)
            } else {
                console.log('No data available')
            }
        })
        .catch((error) => {
            console.error(error)
        })

    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve(console.log('resolved'))
    //     }, 3000)
    // })
}

export const updateCollection = (uid, collectionId, formData) => {
    const collectionRef = ref(
        realtimeDb,
        `users/${uid}/collections/${collectionId}`
    )
    update(collectionRef, formData)
        .then(() => {
            alert('updateCollection')
        })
        .catch((error) => {
            alert('error')
        })
}

export const updateCollectionItem = (uid, collectionId, itemId, formData) => {
    const collectionRef = ref(
        realtimeDb,
        `users/${uid}/collections/${collectionId}/itemsList/${itemId}`
    )
    update(collectionRef, formData)
        .then(() => {
            alert('updateCollectionItem')
        })
        .catch((error) => {
            alert('error')
        })
}

export const removeCollection = async (uid, collectionId) => {
    const collectionRef = ref(
        realtimeDb,
        `users/${uid}/collections/${collectionId}`
    )
    remove(collectionRef)
        .then(() => {
            alert('removeCollection')
        })
        .catch((error) => {
            alert('error')
        })
}

export const removeCollectionItem = async (uid, collectionId, itemId) => {
    const collectionItemRef = ref(
        realtimeDb,
        `users/${uid}/collections/${collectionId}/itemsList/${itemId}`
    )
    remove(collectionItemRef)
        .then(() => {
            alert('removeCollection')
        })
        .catch((error) => {
            alert('error')
        })
}
