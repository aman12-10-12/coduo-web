import { useDispatch, useSelector } from "react-redux"
import HeaderElem from "./HeaderElemNotUser"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../utils/constant"
import { removeUser } from "../utils/userSlice"


const Navbar = () => {

    const user = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const res = await axios.post(BASE_URL + "/logout", {}, {withCredentials: true})
            dispatch(removeUser())
            return navigate("/", {replace : true})
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        !user ? (<HeaderElem></HeaderElem>) : (<div className="navbar sticky top-0 z-50 bg-white/15 backdrop-blur-2xl border-b border-white/20 shadow-lg transition-all duration-300 w-full flex items-center px-2 sm:px-4">
            <div className="flex-1 min-w-0">
                <Link to="/" className="btn btn-ghost text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                    CoDuo 🧑‍💻
                </Link>
            </div>
            <div className="hidden md:flex flex-1 justify-center text-base lg:text-2xl text-white/90 truncate">
                Welcome, {user.firstName}
            </div>
            <div className="flex flex-1 justify-end items-center gap-2 sm:gap-3">
                <Link to="/" className="btn btn-primary btn-sm sm:btn-md">Home</Link>
                <Link to="/feed" className="btn btn-primary btn-sm sm:btn-md">Feed</Link>
                <div className="dropdown dropdown-end ml-1 sm:ml-3">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-white/20 transition-all duration-200 ring-2 ring-transparent hover:ring-white/30">
                        <div className="w-9 sm:w-10 rounded-full overflow-hidden">
                            <img
                            alt="User Pic"
                            src={user.photoUrl} />
                        </div>
                    </div>
                    <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-black/30 backdrop-blur-xl rounded-xl z-[100] mt-3 w-56 p-2 shadow-2xl border border-white/20">
                        <li>
                            <Link to="/profile" className="justify-between hover:bg-white/10 focus:bg-white/10 transition-colors duration-200">
                            Profile
                            <span className="badge badge-primary badge-sm">New</span>
                            </Link>
                        </li>
                        <li><Link to="/user/connections" className="hover:bg-white/10 focus:bg-white/10 transition-colors duration-200">Connections</Link></li>
                        <li><Link to="/user/requests" className="hover:bg-white/10 focus:bg-white/10 transition-colors duration-200">Requests</Link></li>
                        <li><a onClick={handleLogout} className="hover:bg-red-500/20 focus:bg-red-500/20 transition-colors duration-200">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>)
    )
}

export default Navbar