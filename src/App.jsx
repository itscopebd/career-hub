import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
<script type='text/javascript' src='fakedb.js'></script>

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;