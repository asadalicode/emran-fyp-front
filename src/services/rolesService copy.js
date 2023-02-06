// import { db } from "../firebase-config";

// import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

// const userCollectionRef = collection(db, "roles")

// class UserRoleService {
//     addRoles = (newRole) => {
//         return addDoc(userCollectionRef, newRole);
//     };

//     updateRole = (id, updatedRole) => {
//         const userDoc = doc(db, "roles", id);
//         return updateDoc(userDoc, updatedRole);
//     };

//     deleteRole = (user_id) => {
//         const userDoc = doc(db, "roles", user_id);
//         return deleteDoc(userDoc);
//     };

//     getAllRoles = () => {
//         return getDocs(userCollectionRef);
//     };

//     getRole = (id) => {
//         const userDoc = doc(db, "roles", id);
//         return getDoc(userDoc);
//     };
// }
// export default new UserRoleService;