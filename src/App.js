// import { render } from "@testing-library/react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Component } from "react";
import { Login, Mainpage, Mypage,  Signup } from "./pages";
import WritingPage from "./pages/WritingPage";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Mainpage" element={<Mainpage/>} />
          <Route path="/WritingPage" element={<WritingPage/>} />
          <Route path="/Mypage" element={<Mypage/>} />
        </Routes>
      </div>
    );
  }
};

export default App;

