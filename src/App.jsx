import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ActiveUnityProvider } from "./providers/ActiveUnityProvider";
import { BASENAME } from "./constant";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Activity from "./pages/Activity";

function App() {
  return (
    <ActiveUnityProvider>
      <BrowserRouter basename={BASENAME}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/activity/:id" element={<Activity />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ActiveUnityProvider>
  );
}

export default App;
