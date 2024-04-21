import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;