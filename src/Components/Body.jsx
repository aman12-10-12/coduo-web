import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "./NavBar"
import Footer from "./Footer.jsx"
import axios from "axios"
import { BASE_URL } from "../utils/constant.js"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../utils/userSlice.js"
import { useEffect } from "react"

const Body = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userData = useSelector((store) => store.user)

    const fetchUser = async () => {
        if(userData) return;
        try {
            const res = await axios.get(BASE_URL + "/profile/view",{
                withCredentials : true,
            })
            dispatch(addUser(res.data))
        }
        catch(err) {
            if(err?.response?.status === 401){
                navigate("/")
            }
            console.log(err)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-purple-800 via-indigo-800 to-blue-900 flex flex-col overflow-x-hidden relative">
            <Navbar></Navbar>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Body