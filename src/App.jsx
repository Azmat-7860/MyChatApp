import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import ChatPage from "./Pages/ChatPage";

function App() {
  const { signInUser } = useContext(AuthContext);
// console.log(window.innerWidth);

  const ProtectedRoute = ({ children }) => {
    if (!signInUser) {
      return <Navigate to={"/"} />;
    }
    return children;
  };
  return (
    //
        
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
