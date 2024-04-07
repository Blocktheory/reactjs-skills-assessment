import { Routes, Route } from "react-router-dom"
// import SignUp from "./pages/SignUp"
import Products from "./pages/Products"
import SignUp from "./pages/SignUp/SignUp"


function App() {
 
  return (
 <Routes>
  <Route path='/' element={<SignUp/>}/>
  <Route path='/products' element={<Products/>}/>
  
 </Routes>
  )
}

export default App
