import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/home">Home</NavLink>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

export default App;
