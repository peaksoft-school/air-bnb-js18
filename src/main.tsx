import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Notification } from "@/components/UI/Notifications.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Notification />
    </Provider>
  </StrictMode>
    <App />
    <Notification />
  </StrictMode>,
);
