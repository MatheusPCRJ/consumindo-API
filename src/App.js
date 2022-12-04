import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './Pages/Post/post';
import Edit from './Pages/Edit/edit';
import Feed from './Pages/Feed/feed';
import Lermais from './Pages/LerMais/lermais';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/post" element={<Post />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/lermais" element={<Lermais />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
