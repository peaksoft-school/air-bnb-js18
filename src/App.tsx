import "./App.css";
import { AdminUserPage } from "./containers/AdminUserPage";

const App = () => (
  <AdminUserPage
    user={{
      fullName: "Meder Mederbekov",
      email: "meder@mail.com",
      image: "https://avatars.githubusercontent.com/u/110792960?v=4",
    }}
    bookings={[]}
    announcements={[]}
  />
);
;

export default App;
