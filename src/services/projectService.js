import { fireAb } from "../firebase"

class ProjectDataService {
    getAllUsers = () => {
        let data = {}
        fireAb.child("projects").on("value", snapshot => {
            if (snapshot.val() !== null) {
                console.log("snap", snapshot.val())
                data = snapshot.val()
            }
        })
        return data
    };

    addUsers = (newUser) => {
        const projects = this.getAllUsers()
        console.log(projects.length)

        // const id = projects.length + 1;

        // newUser.userId = id;
        var count = 0;
        for (let index = 0; index < projects.length; index++) {
            console.log("us", newUser.userName)
            console.log("us1", projects[index].userName)

            if (
                newUser.userName == projects[index].userName
            ) {
                count++

            }
        }
        if (count == 0) {
            console.log("User")
            fireAb.child("projects").push(newUser, (err) => { });
            return "True";

        } else {
            console.log("User Already Exists")
            return "False";
        }
        // get

    };

}

export default new ProjectDataService;