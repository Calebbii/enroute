import Header from './components/Header'; //Include Header
import Footer from './components/Footer'; //Include Footer
import Dashboard from './components/Dashboard'
import Addmember from './components/Addmember'
import Tables from './components/Tables'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Header></Header>
          <main class="content">
              <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="/addmember" element={<Addmember />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
              </Routes>
            <Footer></Footer>
          </main>
        </BrowserRouter>
     
    </div>
  );
}

export default App;