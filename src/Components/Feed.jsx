import axios from "axios"
import { BASE_URL } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice"
import { useEffect } from "react"
import FeedCard from "./FeedCard"

const Feed = () => {

    const feedData = useSelector((store) => store.feed)
    const dispatch = useDispatch()

    const getFeed = async () => {
        try {
            const res = await axios.get(BASE_URL + "/feed", {
                withCredentials : true,
            })
            dispatch(addFeed(res?.data))
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getFeed()
    },[])

    if(!feedData) return null

    if(feedData.length <= 0) return (
        <div className="min-h-screen w-full py-10 sm:py-12 px-3 sm:px-4 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-3xl mx-auto relative z-10 flex items-center justify-center min-h-[70vh]">
                <div className="w-full rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-10 text-center shadow-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        No developers found
                    </h1>
                    <p className="text-white/70 text-lg">
                        We couldn't find any new collaborators right now. Try again later.
                    </p>
                </div>
            </div>
        </div>
    )

    const visibleStack = feedData.slice(0, 3)

    return (
        <div className="min-h-screen w-full py-6 sm:py-8 md:py-10 px-3 sm:px-4 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10 flex flex-col mb-2">
                <div className="text-center mb-4 sm:mb-5 shrink-0">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 sm:mb-3">
                        Discover Developers
                    </h1>
                    <p className="text-white/70 text-base sm:text-lg px-2 mb-8">
                        Find your perfect development partner
                    </p>
                </div>

                <div className="flex justify-center items-start w-full pb-6 sm:pb-8">
                    <div
                        className="relative w-full max-w-[380px] sm:max-w-[460px] min-h-[480px] h-[clamp(28rem,52dvh,40rem)] sm:h-[clamp(30rem,54dvh,42rem)]"
                    >
                        {visibleStack.map((user, index) => {
                            const shift = (visibleStack.length - 1 - index) * 14
                            const scale = 1 - (visibleStack.length - 1 - index) * 0.02
                            const showTop = index === visibleStack.length - 1

                            return (
                                <div
                                    key={user._id}
                                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${!showTop ? "pointer-events-none opacity-70" : ""}`}
                                    style={{
                                        transform: `translate(${shift}px, ${shift}px) scale(${scale})`,
                                        zIndex: index + 1,
                                    }}
                                >
                                    <FeedCard user={user} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed