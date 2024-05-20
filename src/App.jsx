import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ListPages from "./components/ListPage";
import Footer from "./components/Footer";
import { UserContextProvider } from "./components/context/usercontext";

function App() {
  return (
    <div className="App">
      <Header />
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListPages" element={<ListPages />} />
        </Routes>
      </UserContextProvider>
      <Footer />
    </div>
  );
}

export default App;