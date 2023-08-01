import styles from "./App.module.css"
import{Routes,Route,BrowserRouter } from "react-router-dom"
import Splash from "./pages/Splash/Splash";
import Language from "./pages/Language/Language";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Forgot from "./pages/Forgot/Forgot";
import Otp from "./pages/Otp/Otp";
import Reset from "./pages/Reset/Reset";
function App() {
  return (
    <div className={styles.background}>

  <div className={styles.main}>
<BrowserRouter>
  <Routes>
    <Route path="/splash" exact element={<Splash/>}/>
    <Route path="/language" exact element={<Language/>}/>
    <Route path="/login" exact element={<Login/>}/>
    <Route path="/signup" exact element={<Signup/>}/>
    <Route path="/forgot" exact element={<Forgot/>}/>
    <Route path="/otp" exact element={<Otp/>}/>
    <Route path="/reset" exact element={<Reset/>}/>

  </Routes>
</BrowserRouter>

    </div>
  </div>


  );
}

export default App;
