import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NoMatchPage from "./pages/NoMatch";
import ManageBeneficiariesPage from "./pages/ManageBeneficiaries";
import MainPage from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <div className="page-wrapper">
        <header className="p-4 bg-blue-500">
          <h3 className="text-center text-2xl uppercase text-white font-black leading-none">
            Bank App
          </h3>
        </header>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/manage-beneficiaries"
            element={<ManageBeneficiariesPage />}
          />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
