import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Notification } from "@/components/UI/Notifications.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
        <App />
      <Notification />
      <PersistGate loading={null} persistor={persistor}>
        <App /> 
        <Notification />
      </PersistGate>
    </Provider>
  </StrictMode>
);
