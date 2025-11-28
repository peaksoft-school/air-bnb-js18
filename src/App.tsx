import { Button } from "./components/UI/button";

const App = () => {
  return (
    <div>
      <Button variant="amber">Default</Button>
      <Button variant="amber" disabled>
        Disabled
      </Button>

      <Button className="w-[425px] h-[50px]" variant="google">
        Default
      </Button>
    </div>
  );
};

export default App;
