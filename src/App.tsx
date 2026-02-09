import "./App.css";
import { UserPage } from "./components/profile/UserPage";
import AppRoutes from "./routes/AppRoutes";

const App = () => <UserPage user={{ fullName: "John Doe", email: "john@example.com" }} />;

export default App;