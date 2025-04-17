import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
