import axios from "axios";

const USER_DATA_URL = "http://localhost:8080/api/v1/users";

class UserService{
    getUsers(){
        return axios.get(USER_DATA_URL);

    }

}

export default new UserService()