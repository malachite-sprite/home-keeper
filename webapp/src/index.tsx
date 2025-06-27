import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChoresListPage from './pages/chores-list.page';
import NewChorePage from './pages/new-chore.page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ChoresListPage />} />
      <Route path="/new" element={<NewChorePage />} />
    </Routes>
  </BrowserRouter>
);
