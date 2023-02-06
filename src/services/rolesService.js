import { fireAb } from "../firebase"

class UserRoleService {
    // addRoles = (newRole) => {
    //     return addDoc(userCollectionRef, newRole);
    // };
    addRoles = (newRole) => {
        fireAb.child("roles").push(newRole, (err) => { });
    }


    // updateRole = (id, updatedRole) => {
    //     const userDoc = doc(db, "roles", id);
    //     return updateDoc(userDoc, updatedRole);
    // };

    // deleteRole = (user_id) => {
    //     const userDoc = doc(db, "roles", user_id);
    //     return deleteDoc(userDoc);
    // };

    getAllRoles = () => {
        var data = {}
        fireAb.child("roles").on("value", snapshot => {
            if (snapshot.val() !== null) {
                console.log("roles: ", snapshot.val())
                data = snapshot.val()
            }
        })
        return data
    };

    // getRole = (id) => {
    //     const userDoc = doc(db, "roles", id);
    //     return getDoc(userDoc);
    // };
}
export default new UserRoleService;