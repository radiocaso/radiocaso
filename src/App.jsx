import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Home from "./components/Home";
import Archive from "./components/Archive";
import Schedule from "./components/Schedule";
import Publications from "./components/Publications";
import Info from "./components/Info";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agenda" element={<Schedule />} />
        <Route path="/archivo" element={<Archive />} />
        <Route path="/publicaciones" element={<Publications />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
