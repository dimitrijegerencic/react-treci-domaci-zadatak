import React from 'react';
import 'antd/dist/antd.css';
import AppProvider from "./context/AppContext";
import MainLayout from "./components/MainLayout/MainLayout";
import Navbar from "./components/Navbar/Navbar";
import Footers from "./components/Footer/Footer";


const App = () =>
    <div>
      <AppProvider>

          <Navbar/>
            <MainLayout/>
          <Footers/>

      </AppProvider>
    </div>


export default App;