import axios from "axios"


const axiosSecure  = axios.create({
    baseURL:'https://server-tau-ashen.vercel.app/'
})
const useAxiosSecure = () => {
    return axiosSecure;
}

export default useAxiosSecure;
