import { Link } from "react-router-dom"


const HeaderElem = () => {
    return (
        <div className="navbar sticky top-0 z-50 bg-white/15 backdrop-blur-2xl border-b border-white/20 shadow-lg transition-all duration-300 w-full flex items-center px-2 sm:px-4">
            <div className="flex-1 min-w-0">
                <Link to="/" className="btn btn-ghost text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-500 transition-all duration-300">
                    CoDuo 🧑‍💻
                </Link>
            </div>
            <div className="flex gap-2 sm:gap-4 flex-1 justify-end">
                    <Link to="/login" className="btn btn-primary btn-sm sm:btn-md">LogIn / SignUp</Link>
            </div>
        </div>
    )
}

export default HeaderElem