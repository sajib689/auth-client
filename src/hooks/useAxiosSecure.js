import axios from 'axios';
const useAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: 'https://auth-server-pied.vercel.app',
    });
    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;

        }
        return config;
    })
    return axiosSecure
}

export default useAxiosSecure;