import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
// import AddPost from './pages/AddPost'
// import EditPost from './pages/EditPost';
// import PostDetail from './pages/PostDetail'

function App() {
    return (
        <div className="App">
          <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/addPost"} element={<AddPost />} />
                {/* <Route path={"/edit/:id"} element={<EditPost />} />
                <Route path={"/post/:id"} element={<PostDetail />} /> */}
            </Routes>
        </div>
    );
}

export default App;
