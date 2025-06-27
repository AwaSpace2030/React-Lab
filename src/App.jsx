import "./styles/main/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "remixicon/fonts/remixicon.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import { Todlist } from "./pages/ToDolist/Todlist";
import { Weather } from "./pages/Weather/WeatherPro";
import { Counter } from "./pages/Counter/Counter";
import { ProfileCard } from "./pages/User-Profile-Card/Profile-Card";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<Todlist />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/User-Profile" element={<ProfileCard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
