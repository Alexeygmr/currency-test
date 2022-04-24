import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from "react-router-dom";


import './index.css';
import App from './App';
import Tabs from "./components/Tabs/Tabs";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { store } from './redux/store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:active_tab?" element={<Tabs/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

