import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Deliveries } from "./pages/Deliveries";
import { Bots } from "./pages/Bots";
import { AppProvider } from "./context/AppContext";
import { Layout } from "./layouts/Layout";

const App = () => {
  return (
    <AppProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Deliveries />} />
            <Route path="/deliveries" element={<Deliveries />} />
            <Route path="/bots" element={<Bots />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </AppProvider>
  );
};

export default App;
