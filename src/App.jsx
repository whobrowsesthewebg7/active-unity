import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { BASENAME } from "./constant";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Event from "./pages/Event";

function App() {
  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/event/:id" element={<Event />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
