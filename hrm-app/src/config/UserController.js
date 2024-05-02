import restApi from "./RestApis";
const userUrl = {
    login : restApi.authUrl+'/login',
    register: restApi.authUrl+'/register'
}
export default userUrl;