import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const FeedCard = (props) => {
    const { user } = props;
    const {_id, firstName, lastName, age, gender, about, skills, photoUrl } = user;
    const dispatch = useDispatch()

    const handleSendRequest = async (status, userId) => {
        try {
            await axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {}, {withCredentials : true})
            dispatch(removeUserFromFeed(userId))
        } catch(err) {
            console.log(err)
        }
    }

    const skillsArray = Array.isArray(skills)
        ? skills
        : skills?.split(",").map(s => s.trim()).filter(Boolean);

    return (
        <div className="relative w-full max-w-sm mx-auto">

            {/* BACK CARD 1 */}
            <div className="absolute inset-0 rounded-3xl 
                bg-white/5 backdrop-blur-xl border border-white/10
                shadow-xl
                transform rotate-[-6deg] scale-95 translate-x-[-20px] translate-y-[15px]
                opacity-60">
            </div>

            {/* BACK CARD 2 */}
            <div className="absolute inset-0 rounded-3xl 
                bg-white/5 backdrop-blur-xl border border-white/10
                shadow-xl
                transform rotate-[6deg] scale-95 translate-x-[20px] translate-y-[15px]
                opacity-60">
            </div>

            {/* GLOW */}
            <div className="absolute -inset-2 rounded-3xl 
                bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
                blur-2xl opacity-60">
            </div>

            {/* MAIN CARD */}
            <div className="relative z-10 w-full rounded-3xl overflow-hidden 
                bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl 
                border border-white/25 shadow-2xl transition-all duration-300 
                hover:border-white/45 hover:shadow-[0_20px_60px_-25px_rgba(168,85,247,0.55)]">

                {/* Image */}
                <figure className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
                    <img
                        src={photoUrl || 'no_image.jpg'}
                        alt="profile"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full 
                        bg-gradient-to-r from-blue-500 to-purple-600 
                        text-white text-xs font-semibold shadow-lg">
                        {age && `${age}y`}
                    </div>
                </figure>

                {/* Content */}
                <div className="p-6 text-white space-y-4">

                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                            {firstName} {lastName}
                        </h2>

                        {gender && (
                            <span className="text-sm font-medium text-white/80">
                                {gender.charAt(0).toUpperCase() + gender.slice(1)}
                            </span>
                        )}
                    </div>

                    {about && (
                        <p className="text-sm text-white/70 leading-relaxed font-light">
                            {about}
                        </p>
                    )}

                    {skillsArray.length !== 0 && (
                        <div className="space-y-2">
                            <p className="text-xs font-semibold text-white/60 uppercase tracking-wide">
                                Skills
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {skillsArray.map((skill, idx) => (
                                    <span key={idx} className="text-xs text-white/75 
                                        px-2 py-1 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex gap-3 pt-2">
                        <button
                            className="flex-1 py-3 rounded-xl 
                            bg-gradient-to-r from-red-600/80 to-red-700/80
                            border border-red-400/50 text-white font-semibold
                            hover:from-red-500 hover:to-red-600 hover:border-red-300/80
                            active:scale-95 transition-all duration-300 shadow-lg hover:shadow-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-400/40"
                            onClick={() => handleSendRequest("ignored", _id)}
                        >
                            ✕ Ignore
                        </button>

                        <button
                            className="flex-1 py-3 rounded-xl 
                            bg-gradient-to-r from-green-600/80 to-green-700/80
                            border border-green-400/50 text-white font-semibold
                            hover:from-green-500 hover:to-green-600 hover:border-green-300/80
                            active:scale-95 transition-all duration-300 shadow-lg hover:shadow-green-500/20 focus:outline-none focus:ring-2 focus:ring-green-400/40"
                            onClick={() => handleSendRequest("interested", _id)}
                        >
                            ♥ Interested
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedCard;