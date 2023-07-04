import { Routes, Route} from "react-router-dom";

import { Home } from "../pages/Home"
import { Profile } from "../pages/Profile"
import { CreateAdFirst } from "../pages/CreateAdFirst"
import { CreateAdSecond } from "../pages/CreateAdSecond"
import { CreateAdSummary } from "../pages/CreateAdSummary"
import { UploadImages } from "../pages/UploadImages"
import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/create-ad-first" element={<CreateAdFirst/>} />
      <Route path="/create-ad-second" element={<CreateAdSecond/>} />
      <Route path="/create-ad-summary" element={<CreateAdSummary/>} />
      <Route path="/upload-images" element={<UploadImages/>} />
      <Route path="/login" element={<SignIn/>} />
      <Route path="/register" element={<SignUp/>} />
    </Routes>
  )
}