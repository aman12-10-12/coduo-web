import { useSelector } from "react-redux"
import EditProfile from "./EditProfile"
import FeedCard from "./FeedCard"

const Profile = () => {
    const user = useSelector((store) => store.user)
    return user && (
        <div className="w-full min-h-screen bg-gradient-to-br from-purple-800 via-indigo-800 to-blue-900">
            <EditProfile user={user} />
        </div>
    )
}

export default Profile