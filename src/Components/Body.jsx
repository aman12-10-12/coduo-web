import { Outlet } from "react-router-dom"
import Navbar from "./NavBar"
import Footer from "./Footer.jsx"
import axios from "axios"
import { BASE_URL } from "../utils/constant.js"
import { useDispatch, useSelector } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice.js"
import { authStart, authSuccess, authError } from "../utils/authSlice.js"
import { useEffect } from "react"

const Body = () => {
    const dispatch = useDispatch()
    const authLoading = useSelector((store) => store.auth.loading)

    useEffect(() => {
        if (!authLoading) return

        ;(async () => {
            dispatch(authStart())
            try {
                const res = await axios.get(BASE_URL + "/profile/view", {
                    withCredentials: true,
                })
                dispatch(addUser(res.data))
                dispatch(authSuccess())
            } catch (err) {
                if (err?.response?.status === 401) {
                    dispatch(removeUser())
                }
                dispatch(authError(err?.response?.status))
                dispatch(authSuccess())
            }
        })()
    }, [dispatch, authLoading])

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-purple-800 via-indigo-800 to-blue-900 flex flex-col overflow-x-hidden relative">
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Body
