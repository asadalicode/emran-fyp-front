import { fireAb } from "../firebase"

class UsersDataService {
    getAllUsers = () => {
        var data = {}
        fireAb.child("users").on("value", snapshot => {
            if (snapshot.val() !== null) {

                console.log(snapshot.val())
                data = snapshot.val()
            }
        })
        return data
    };

    addUsers = (newUser) => {
        const users = this.getAllUsers()
        console.log(users.length)


        var count = 0;
        for (let index = 0; index < users.length; index++) {
            console.log("us", newUser.userName)
            console.log("us1", users[index].userName)

            if (
                newUser.userName == users[index].userName
            ) {
                count++

            }
        }
        if (count == 0) {
            console.log("User")
            fireAb.child("users").push(newUser, (err) => { });
            return "True";

        } else {
            console.log("User Already Exists")
            return "False";
        }
        // get

    };

}

export default new UsersDataService;