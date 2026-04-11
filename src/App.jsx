import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Components/Body.jsx"
import Login from "./Components/Login.jsx"
import Profile from "./Components/Profile.jsx"
import Feed from "./Components/Feed.jsx"
import Home from "./Components/Home.jsx"
import { Provider } from "react-redux"
import appStore from "./utils/appStore.js"
import Connections from "./Components/Connections.jsx"
import ProtectedRoute from "./Components/ProtectedRoute.jsx"
import Requests from "./Components/Requests.jsx"

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body></Body>}>
              <Route index element={<Home></Home>}></Route>
              <Route path="/feed" element={<ProtectedRoute><Feed></Feed></ProtectedRoute>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/profile" element={<ProtectedRoute><Profile></Profile></ProtectedRoute>}></Route>
              <Route path="/user/connections" element={<ProtectedRoute><Connections></Connections></ProtectedRoute>}></Route>
              <Route path="/user/requests" element={<ProtectedRoute><Requests></Requests></ProtectedRoute>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
