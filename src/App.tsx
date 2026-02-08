import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import RegionDropdown from "@/components/UI/RegionsDropdown/RegionDropdown";

const App = () => (
  <div className="App">
    <RegionDropdown />
    <AppRoutes />
  </div>
);

export default App;
