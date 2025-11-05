import axios from 'axios'


const authToken = localStorage.getItem('token_set')

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Authorization': `Bearer ${authToken}`,
        'Accept': 'application/json'
    }
})


export const loginAdmin = async (username, password) => {
    try {
        const res = await api.post('/auth/login', { username: username, password: password })
        return res.data
    } catch(error) {
        console.log(error)
    }
}