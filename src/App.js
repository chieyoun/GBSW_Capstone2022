// import { render } from "@testing-library/react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Component } from "react";
import { FirstPage, Login, Mainpage, Mypage, Page, Signup, MyChart } from "./pages";
import WritingPage from "./pages/WritingPage";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Mainpage" element={<Mainpage/>} />
          <Route path="/MyChart" element={<MyChart/>} />
          <Route path="/WritingPage" element={<WritingPage />} />
          <Route path="/qqqq" element={<WritingPage/>} />
        </Routes>
      </div>
    );
  }
};

export default App;