import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Login = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailId, setEmailId] = useState("")
    const [password, setPassword] = useState("")
    const [isLoginForm, setIsLoginForm] = useState(true)
    const [errorMsg, setErrorMsg] = useState("")
    const [showToast, setShowToast] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSucces = (path) => {
        setShowToast(true)

        setTimeout(() => {
            setShowToast(false)
            navigate(path)
        },1000)
    }


    const handleLogin = async (e) => {
      e.preventDefault()
      try{
        const res = await axios.post(BASE_URL + "/login", {
          emailId,
          password,
        },{withCredentials:true})
        dispatch(addUser(res.data))
        handleSucces("/feed")
      }catch(err) {
        setErrorMsg(
          err?.response?.data?.message || // backend JSON
          err?.response?.data ||          // backend string
          err?.message ||                // axios error
          "Something went wrong"
        )
      }
    } 

    const handleSignUp = async (e) => {
      e.preventDefault()
      try {

        const res = await axios.post(BASE_URL + "/signup", {firstName, lastName, emailId, password}, {withCredentials : true})
        dispatch(addUser(res?.data?.data))
        handleSucces("/profile")
      }catch(err) {
        setErrorMsg(
          err?.response?.data?.message || // backend JSON
          err?.response?.data ||          // backend string
          err?.message ||                // axios error
          "Something went wrong"
        )
      }
    }

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 
    relative overflow-hidden">

      {/* Animated Glow Effects */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500 opacity-25 blur-[150px] rounded-full top-[-200px] left-1/2 -translate-x-1/2 animate-pulse"></div>
      <div className="absolute w-[600px] h-[600px] bg-pink-500 opacity-20 blur-[150px] rounded-full bottom-[-200px] right-1/4 animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* Login Card */}
      <div className="relative z-10 
      bg-white/10 backdrop-blur-2xl 
      border border-white/20 
      shadow-2xl 
      rounded-3xl 
      p-6 sm:p-10 w-full max-w-md mx-3
      transform transition-all duration-300 hover:shadow-2xl hover:border-white/40 hover:bg-white/15">

        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center mb-6">
          {isLoginForm ? "Welcome Back 👋" : "Create an Account"}
        </h2>

        <form className="space-y-5" onSubmit={isLoginForm ? handleLogin : handleSignUp}>
          <div className="h-2 relative">
            <p
              className={`absolute left-0 text-red-300 text-sm transition-all duration-300 ease-in-out ${
                errorMsg ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
              }`}
            >
              {errorMsg}
            </p>
          </div>

          { !isLoginForm && (
            <>
              <div>
                <label className="text-white/80 text-sm font-semibold block mb-2">Firstname</label>
                <input
                  type="text"
                  placeholder="Aman"
                  className="text-white input input-bordered w-full bg-white/10 backdrop-blur-md border-white/20 placeholder-white/40 focus:border-blue-400 focus:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  />
              </div>

              <div>
                <label className="text-white/80 text-sm font-semibold block mb-2">Lastname</label>
                <input
                  type="text"
                  placeholder="Raj"
                  className="text-white input input-bordered w-full bg-white/10 backdrop-blur-md border-white/20 placeholder-white/40 focus:border-blue-400 focus:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  />
              </div>
            </>)
          }

          <div>
            <label className="text-white/80 text-sm font-semibold block mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="text-white input input-bordered w-full bg-white/10 backdrop-blur-md border-white/20 placeholder-white/40 focus:border-blue-400 focus:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>

          <div>
            <label className="text-white/80 text-sm font-semibold block mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="text-white input input-bordered w-full bg-white/10 backdrop-blur-md border-white/20 placeholder-white/40 focus:border-blue-400 focus:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>


          <button type="submit"
          className="btn w-full mt-5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white border-none font-semibold shadow-lg hover:shadow-pink-500/50 transition-all duration-200 transform hover:scale-105"
          >
            {isLoginForm ? "Login" : "Signup"}
          </button>
        </form>

        <p className="text-sm text-white/70 mt-6 text-center font-medium">
          {isLoginForm ? "Don't have an account?" : "Already have an account?"}{" "}
            <span className="text-blue-300 cursor-pointer hover:text-purple-300 font-bold transition-colors duration-200" onClick={() => setIsLoginForm((value) => !value)}>
              {isLoginForm ? "Sign up" : "Login"}
            </span>
        </p>
      </div>

      {/* TOAST */}
            {showToast && (
                <div className="fixed bottom-4 left-4 right-4 sm:bottom-8 sm:left-auto sm:right-8 animate-bounce">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 border border-green-400/50 rounded-2xl px-4 sm:px-6 py-4 text-white font-semibold shadow-2xl backdrop-blur-xl flex items-start sm:items-center gap-3">
                        <span className="text-2xl">✨</span>
                        <div className="leading-tight">
                          <div>{isLoginForm ? "Login SuccessFully" : "Profile Saved Successfully"}</div>
                          <div className="text-white/80 text-sm">{isLoginForm ? "Welcome Back !" : "Edit the profile to make a Good Impression"}</div>
                        </div>
                    </div>
                </div>
            )}
    </div>
  );
};

export default Login;