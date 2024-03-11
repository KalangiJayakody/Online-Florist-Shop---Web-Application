import axios from "axios";

const USER_DATA_URL = "http://localhost:9090/users";

class UserService{
    getUsers(){
        return axios.get(USER_DATA_URL);

    }

}

export default new UserService()