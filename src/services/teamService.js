import { fireAb } from "../firebase"

class UsersDataService {
    getAllUsers = () => {
        var data = {}
        fireAb.child("team").on("value", snapshot => {
            if (snapshot.val() !== null) {

                console.log(snapshot.val())
                data = snapshot.val()
            }
        })
        return data
    };

    addUsers = (newUser) => {


        fireAb.child("users").push(newUser, (err) => { });
        return "True";

    };

}

export default new UsersDataService;