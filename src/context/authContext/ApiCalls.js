import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logout } from "./AuthActions";

export const login = async (user, dispatch) => {
    let msgLogin = document.getElementsByClassName("msgLogin")[0]
    dispatch(loginStart());
    try {
        const res = await axios.post("../auth/login", user)
        res.data.isAdmin && dispatch(loginSuccess(res.data))
        msgLogin.style.display = "none"
    } catch (err) {
        msgLogin.style.display = "block"
        msgLogin.innerHTML = err.response.data
        dispatch(loginFailure());
    }
}

export const logout_ = async (dispatch) => {
    dispatch(logout());
}