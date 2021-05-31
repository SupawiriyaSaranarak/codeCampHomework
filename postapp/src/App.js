import logo from './logo.svg';
/** @jsxImportSource @emotion/react */
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AddPostPage from "./pages/AddPostPage"
import SinglePostPage from "./pages/SinglePostPage"
import CounterPage from "./pages/CounterPage"
import EditPostPage from "./pages/EditPostPage"
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/editpost/:postId" component={EditPostPage} />
          <Route path="/counter" component={CounterPage} />
          <Route path="/home" component={HomePage} />
          {/* ถ้าpath เข้า /home ให้เข้าไปที่ HomePage */}
          <Route path="/addpost" component={AddPostPage} />
          <Route path="/post/:postId" component={SinglePostPage} />
          {/* :postId เป็นพารามิเตอร์สำหรับ URL สำหรับ react router dom*/}
        </Switch>
      </BrowserRouter>
    </div >


  );
}

export default App;
