import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";
import UpdatePostPage from "./pages/UpdatePostPage";
import PostPage from "./pages/PostPage"; 


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/posts/:id/edit" element={<UpdatePostPage />} />
      </Routes>
    </Router>
  );
}

