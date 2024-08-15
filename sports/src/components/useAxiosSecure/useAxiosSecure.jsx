import axios from "axios"


const axiosSecure  = axios.create({
    baseURL:'https://sports-back-2jl2.onrender.com'
})
const useAxiosSecure = () => {
    return axiosSecure;
}

export default useAxiosSecure;
