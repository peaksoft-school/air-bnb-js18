import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Notification } from "@/components/UI/Notifications.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";
import { injectStore } from "./components/configs/axiosInstance.ts";

injectStore(store)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App /> 
        
        <Notification />
      </PersistGate>
    </Provider>
  </StrictMode>
);
