import axios from "axios"

const BASE_URL = "http://localhost:8080"

export const getAllCars = () => {
    return axios.get(`${BASE_URL}/cars`)
}

export const getCarById = (id) => {
    return axios.get(`${BASE_URL}/cars/${id}`)
}

export const addCar = (car) => {
    return axios.post(`${BASE_URL}/cars`, car)
}

export const updateCar = (id, car) => {
    return axios.put(`${BASE_URL}/cars/${id}`, car)
}

export const deleteCar = (id) => {
    return axios.delete(`${BASE_URL}/cars/${id}`)
}