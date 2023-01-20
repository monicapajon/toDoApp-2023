import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { AddCategory, AddUser, Contact, Dashboard, Services, UpdateUser, Users } from "./pages";
// import { Alert } from "./components/common";
// import { Modal } from "./components/common";
import React from 'react';
import App from "./App"
import { Home, Categories, SaveCategory, SaveTask, Login, Profile, SignUp, Users, SaveUser } from "./pages"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='tasks/save/:taskId' element={<SaveTask />} />
        <Route path='login' element={<Login />} />
        <Route path='profile' element={<Profile />} />
        <Route path='signup' element={<SignUp />} />

        <Route path='users/'>
          <Route index element={<Users />} />
          <Route path='save' element={<SaveUser />} />
          <Route path='save/:userId/:pepe' element={<SaveUser />} />
        </Route>

        <Route path='categories/'>
          <Route index element={<Categories />} />
          <Route path='save' element={<SaveCategory />} />
          <Route path='save/:categoryId' element={<SaveCategory />} />

        </Route>
      </Route>
    </Routes>
  </BrowserRouter>

);


