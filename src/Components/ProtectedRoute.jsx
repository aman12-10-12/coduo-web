import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const loading = useSelector((store) => store.auth.loading)
    const user = useSelector((store) => store.user)

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>
    }

    if (!user || !user._id) {
        return <Navigate to="/" replace />
    }

    return children
}

export default ProtectedRoute