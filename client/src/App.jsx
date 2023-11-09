import { Routes, Route } from "react-router-dom";
import { Landing, Home, Form, Detail } from "./views";
import NavBar from "../src/components/navBar/navBar"
function App() {
  return (
    <>
        <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/details/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;