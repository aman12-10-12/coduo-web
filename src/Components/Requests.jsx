import axios from "axios"
import { BASE_URL } from "../utils/constant"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addRequest, removeRequest } from "../utils/requestSlice"

const Requests = () => {

    const requests = useSelector((store) => store.requests)
    const dispatch = useDispatch()

    const reviewRequest = async (status, _id) => {
        try {
            const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id,{},{withCredentials:true})
            console.log(res.data)
            dispatch(removeRequest(_id))
        }catch(err) {
            console.log(err)
        }
    }

    const fetchRequest = async () => {

        try {
            const res = await axios.get(BASE_URL + "/user/request/received", {withCredentials : true})
            console.log(res?.data?.data)
            dispatch(addRequest(res?.data?.data))
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchRequest()
    },[])

    if(!requests) return;

    if(requests.length === 0) return (
        <div className="min-h-[70vh] w-full flex items-center justify-center px-3 sm:px-6">
            <div className="w-full max-w-xl relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl shadow-2xl">
                <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"></div>

                <div className="relative p-7 sm:p-10 text-center">
                    <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white/10 border border-white/15">
                        <span className="text-2xl">📨</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        No requests right now
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed">
                        You’ll see new connection requests here as soon as people show interest in connecting with you.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                        <div className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white/80 text-sm">
                            Tip: Update your profile to attract more requests
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <>
        <div className="min-h-screen flex flex-col items-center justify-start pt-10 sm:pt-14 px-3 sm:px-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

                {/* Animated Glow Effects */}
                <div className="absolute w-[600px] h-[600px] bg-purple-500 opacity-25 blur-[150px] rounded-full top-[-200px] left-1/2 -translate-x-1/2 animate-pulse"></div>
                <div className="absolute w-[600px] h-[600px] bg-pink-500 opacity-20 blur-[150px] rounded-full bottom-[-200px] right-1/4 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute w-[500px] h-[500px] bg-cyan-500 opacity-15 blur-[150px] rounded-full top-[50%] right-[-100px] animate-pulse" style={{animationDelay: '2s'}}></div>

                {/* Header (moved UP properly) */}
                <div className="text-center mb-8 sm:mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                        Your Connection Requests
                    </h1>
                    <p className="text-gray-400 mt-3 text-sm max-w-lg mx-auto leading-relaxed px-2">
                        Connect, collaborate, and grow with people who share your journey. 
                        Your network is your strength—keep it strong.
                    </p>
                </div>

                {/* Glass Card */}
                <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-4 sm:p-6">
                    
                    <ul className="space-y-4">

                        <li className="text-xs text-gray-400 tracking-wide">
                            You Have total of {requests.length} connections
                        </li>

                        {
                            requests.map((request) => {
                                const {_id, firstName, lastName, age, gender, about, skills, photoUrl} = request.fromUserId
                            
                            return (
                            <li 
                                key={_id}
                                className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                                    <img 
                                        className="w-14 h-14 rounded-xl object-cover border border-white/20 shrink-0" 
                                        src={photoUrl}
                                    />

                                    <div className="flex-1">
                                        <div className="text-white font-semibold text-lg">
                                            {firstName} {lastName}
                                        </div>
                                        <div className="text-xs text-gray-300">
                                            {gender}, {age}
                                        </div>
                                        <div className="text-xs text-gray-400 mt-1 font-medium break-words">
                                            {skills}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 sm:self-center self-start">
                                        <button className="btn btn-accent btn-sm sm:btn-md" onClick={() => reviewRequest("rejected", request._id)}>Reject</button>

                                        <button className="btn btn-secondary btn-sm sm:btn-md" onClick={() => reviewRequest("accepted", request._id)}>Accept</button>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-lg p-3">
                                    <p className="text-xs text-gray-300 leading-relaxed">
                                        {about}
                                    </p>
                                </div>
                            </li>)
                            })
                        } 
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Requests