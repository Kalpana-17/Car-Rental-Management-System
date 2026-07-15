export const saveUser = (user) => {
    localStorage.setItem("userId", user.id);
    localStorage.setItem("userName", user.fullName)
}

export const getCurrentUserId = () => {
    return Number(localStorage.getItem("userId"))
}

export const getCurrentUserName = () => {
    return localStorage.getItem("userName")
}

export const isLoggedIn = () => {
    return localStorage.getItem("userId") !== null
}

export const logout = () => {
    localStorage.removeItem("userId")
    localStorage.removeItem("userName")
}