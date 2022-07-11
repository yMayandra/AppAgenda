import axios from "axios"

const Api = axios.create({
    baseURL:"http://10.133.46.17.3000"
})

export default Api;