import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Notification } from "@/components/UI/Notifications.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { injectStore } from "./configs/admin/users/axiosInstance.ts";
import { persistor, store } from "./store/index.ts";

injectStore(store);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />

        <Notification />
      </PersistGate>
    </Provider>
  </StrictMode>
    <App />
    <Notification />
  </StrictMode>,
);
