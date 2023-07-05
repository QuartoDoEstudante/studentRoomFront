import { Routes, Route} from "react-router-dom";

import { Home } from "../pages/Home"
import { Profile } from "../pages/Profile"
import { CreateAd } from "../pages/CreateAd"
import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/CreateAd" element={<CreateAd/>} />
      <Route path="/login" element={<SignIn/>} />
      <Route path="/register" element={<SignUp/>} />
    </Routes>
  )
}