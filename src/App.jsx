import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { ProfessionalExperience } from "./pages/ProfessionalExperience/ProfessionalExperience"
import { SocialSkills } from "./pages/SocialSkills/SocialSkills"
import { TechnicalSkills } from "./pages/TechnicalSkills/TechnicalSkills"
import { Studies } from "./pages/Studies/Studies"
import { NotFound } from "./pages/NotFound/NotFound"
import { Header } from "./layouts/Header/Header"
import { Footer } from "./layouts/Footer/Footer"

export const App = () => {

  return (
    <>
      <Header/>
    <Routes> 
      <Route path="/" content={<Home />}/>
      <Route path="/SocialSkills" content ={< SocialSkills />} />
      <Route path="/ProfessionalExperience" content ={< ProfessionalExperience />} />
      <Route path="/TechnicalSkills" content ={< TechnicalSkills />} />
      <Route path="/Studies" content ={<Studies />} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
    <Footer/>
    
    </>    
  )

}
