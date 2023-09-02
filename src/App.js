import "./App.css";
import TextArea from "./Components/TextArea";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar
        title="TextUtils"
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1tUor3FtJFFo2BTlYGgyfGaI_jP4EV9DX4R4y3NbzdylBGV978ytNN0rXPSgmItqmhg&usqp=CAU"
      />
      <TextArea defaultText="" />
    </>
  );
}

export default App;
