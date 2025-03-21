import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./responsive.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import { ChatContextProvider } from "./Context/ChatContext.jsx";
import { ModalProvider } from "./Context/ModelContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ChatContextProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ChatContextProvider>
  </AuthContextProvider>
);
