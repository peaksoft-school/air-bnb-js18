import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Notification } from "@/components/UI/Notifications.tsx";
import { Provider } from "react-redux";
import { store } from "@/store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
      <Notification />
    </Provider>
  </StrictMode>
);
