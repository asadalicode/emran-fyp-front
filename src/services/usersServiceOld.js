// import { db } from "../firebase-config";

// import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";
// const userCollectionRef = collection(db, "users")

// class UserDataService {
//     addUsers = (newUser, usersData) => {

//         const users = usersData.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
//         const id = users.length + 1;

//         newUser.userId = id;
//         var count = 0;
//         for (let index = 0; index < users.length; index++) {
//             console.log("us", newUser.userName)
//             console.log("us1", users[index].userName)

//             if (
//                 newUser.userName == users[index].userName
//             ) {
//                 count++

//             }
//         }
//         if (count == 0) {
//             console.log("User")
//             return addDoc(userCollectionRef, newUser);


//         } else {
//             console.log("User Already Exists")
//             return "False";
//         }
//         // get

//     };

//     updateUser = (id, updatedUser) => {
//         if (updatedUser.status.value == "active") {
//             updatedUser.status.value = "disabled"
//             updatedUser.status.label = "Disabled"
//         } else {
//             updatedUser.status.value = "active"
//             updatedUser.status.label = "Active"
//         }

//         const userDoc = doc(db, "users", id);
//         return updateDoc(userDoc, updatedUser);
//     };

//     deleteUser = (user_id) => {
//         const userDoc = doc(db, "users", user_id);
//         return deleteDoc(userDoc);
//     };

//     getAllUsers = () => {
//         // fireAb.child("users").on("value", snapshot => {
//         //     if (snapshot.val() !== null) {
//         //         console.log(snapshot.val())
//         //     }
//         // })
//         return getDocs(userCollectionRef);
//     };

//     getUser = (user_id) => {
//         console.log(user_id)

//         const userDoc = doc(db, "users/" + user_id);
//         console.log(userDoc)

//         // firebase.database().ref('users/' + uid).once("value", snap => {
//         //     console.log(snap.val())
//         // })
//         // const data = getDocs(userCollectionRef)
//         // const users = data.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
//         // console.log(users)
//         // for (let index = 0; index < users?.length; index++) {

//         //     if (
//         //         users[index].userName = userName
//         //     ) {
//         //         return users[index].password;
//         //     }
//         // }
//     };
// }
// export default new UserDataService;