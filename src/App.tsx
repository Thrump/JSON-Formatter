import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comparator from "./components/Comparator";
import Formatter from "./components/Formatter";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

const App = () => {
  return(
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/comparator" element={<Comparator />} />
      <Route path="/" element={<Formatter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;