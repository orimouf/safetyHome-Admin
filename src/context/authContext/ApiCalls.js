import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logout } from "./AuthActions";

export const login = async (user, dispatch) => {
    let msgLogin = document.getElementsByClassName("msgLogin")[0]
    let textLogin = document.getElementsByClassName("textLogin")[0]
    let loadingLogin = document.getElementsByClassName("icnSpinner")[0]
    dispatch(loginStart());
    try {
        const res = await axios.post("../auth/login", user)
        res.data.isAdmin && dispatch(loginSuccess(res.data))
        msgLogin.style.display = "none"
        console.log(res.data)
    } catch (err) {
        msgLogin.style.display = "block"
        msgLogin.innerHTML = err.response.data
        textLogin.innerHTML = "LOGIN"
        loadingLogin.style = "display: none; margin: auto;"
        dispatch(loginFailure());
    }
}

export const logout_ = async (dispatch) => {
    dispatch(logout());
}