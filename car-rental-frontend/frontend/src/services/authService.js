import axios from "axios"

const BASE_URL = "http://localhost:8080"

export const registerUser = (userData) => {
    return axios.post(
        `${BASE_URL}/users/register`,
        userData
    )
}

export const loginUser = (loginData) => {
    return axios.post(
        `${BASE_URL}/users/login`,
        loginData
    )
}