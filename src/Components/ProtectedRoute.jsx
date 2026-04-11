import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const ProtectedRoute = ({children}) => {
    const user = useSelector((store) => store.user)

    if(!user || !user._id) {
        return <Navigate to = "/" replace></Navigate>
    }

    return children
}

export default ProtectedRoute