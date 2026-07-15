import axios from "axios"

const BASE_URL = "http://localhost:8080"

export const getUserById = (id) => {
    return axios.get(`${BASE_URL}/users/${id}`)
}