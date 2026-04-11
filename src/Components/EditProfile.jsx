import { useState } from "react"
import FeedCard from "./FeedCard"
import axios from "axios"
import { BASE_URL } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user?.firstName || "")
    const [lastName, setLastName] = useState(user?.lastName || "")
    const [age, setAge] = useState(user?.age || "")
    const [gender, setGender] = useState(user?.gender || "")
    const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || "")
    const [about, setAbout] = useState(user?.about || "")
    const [skills, setSkills] = useState(user?.skills?.join(", ") || "")
    const [error, setError] = useState("")
    const [showToast, setShowToast] = useState(false)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const saveProfile = async () => {
        setError("")
        setLoading(true)

        try {
            const res = await axios.patch(
                BASE_URL + "/profile/edit",
                {
                    firstName,
                    lastName,
                    age: Number(age), // ✅ ensure number
                    gender,
                    about,
                    photoUrl,
                    skills: skills
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean) // ✅ remove empty values
                },
                { withCredentials: true }
            )

            dispatch(addUser(res?.data?.data))

            setShowToast(true)
            setTimeout(() => setShowToast(false), 3000)

        } catch (err) {
            setError(
                err?.response?.data?.message || // backend JSON
                err?.response?.data ||          // backend string
                err?.message ||                // axios error
                "Something went wrong"
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                        Edit Your Profile
                    </h1>
                    <p className="text-white/70 text-lg">Make yourself stand out to the community</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* FORM */}
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="text-3xl">✎</span> Update Information
                        </h2>
                        
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-white/80 mb-2 uppercase tracking-wide">First Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-blue-400 focus:bg-white/15 focus:ring-2 focus:ring-blue-400/30 transition-all focus:outline-none"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="John"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-white/80 mb-2 uppercase tracking-wide">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-blue-400 focus:bg-white/15 focus:ring-2 focus:ring-blue-400/30 transition-all focus:outline-none"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-white/80 mb-2 uppercase tracking-wide">Photo URL</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-blue-400 focus:bg-white/15 focus:ring-2 focus:ring-blue-400/30 transition-all focus:outline-none"
                                    value={photoUrl}
                                    onChange={(e) => setPhotoUrl(e.target.value)}
                                    placeholder="https://..."
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-white/80 mb-2 uppercase tracking-wide">Age</label>
                                    <input
                                        type="number"
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-blue-400 focus:bg-white/15 focus:ring-2 focus:ring-blue-400/30 transition-all focus:outline-none"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        placeholder="25"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-white/80 mb-2 uppercase tracking-wide">Gender</label>
                                    <select
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-blue-400 focus:bg-white/15 focus:ring-2 focus:ring-blue-400/30 transition-all focus:outline-none cursor-pointer"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option value="" disabled>Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-white/80 mb-2 uppercase tracking-wide">About You</label>
                                <textarea
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-blue-400 focus:bg-white/15 focus:ring-2 focus:ring-blue-400/30 transition-all focus:outline-none resize-none"
                                    rows="4"
                                    value={about}
                                    onChange={(e) => setAbout(e.target.value)}
                                    placeholder="Tell us about yourself..."
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-white/80 mb-2 uppercase tracking-wide">Skills</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-blue-400 focus:bg-white/15 focus:ring-2 focus:ring-blue-400/30 transition-all focus:outline-none"
                                    placeholder="React, Node.js, MongoDB, AWS"
                                    value={skills}
                                    onChange={(e) => setSkills(e.target.value)}
                                />
                                <p className="text-xs text-white/50 mt-2">Separate skills with commas</p>
                            </div>

                            {/* ERROR */}
                            {error && (
                                <div className="min-h-[48px] bg-red-500/20 border border-red-400/50 rounded-xl px-4 py-3 text-red-300 text-sm flex items-center">
                                    ⚠️ {error}
                                </div>
                            )}

                            <button
                                className="w-full py-3 rounded-xl 
                                bg-gradient-to-r from-blue-600 to-purple-600
                                border border-blue-400/50 text-white font-bold text-lg
                                hover:from-blue-500 hover:to-purple-500 hover:border-blue-300/80
                                active:scale-95
                                transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                                shadow-xl hover:shadow-blue-500/20"
                                onClick={saveProfile}
                                disabled={loading}
                            >
                                {loading ? "💾 Saving..." : "✓ Save Profile"}
                            </button>
                        </div>
                    </div>

                    {/* PREVIEW CARD */}
                    <div className="sticky top-8">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-white/90">Preview</h3>
                            <p className="text-white/60 text-sm">This is how you'll appear to others</p>
                        </div>
                        <FeedCard
                            user={{
                                firstName: firstName || "Your Name",
                                lastName: lastName || "",
                                age: age || "--",
                                gender: gender || "",
                                about: about || "No bio yet",
                                photoUrl: photoUrl || "no_image.jpg",
                                skills: skills || ""
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* TOAST */}
            {showToast && (
                <div className="fixed bottom-4 left-4 right-4 sm:bottom-8 sm:left-auto sm:right-8 animate-bounce">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 border border-green-400/50 rounded-2xl px-4 sm:px-6 py-4 text-white font-semibold shadow-2xl backdrop-blur-xl flex items-center gap-3">
                        <span className="text-2xl">✨</span>
                        <span>Profile Saved Successfully!</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EditProfile