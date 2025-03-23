import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import BookSession from "./pages/BookSession";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookSession />} />
        </Route>
      </Routes>
    </Router>
  );
}
