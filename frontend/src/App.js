import React from 'react';
import Navbar from './components/Navbar';
import AllRoutes from './routes';


const App = () => {
  return (
      <div>
        <Navbar />
        <div className="container mt-4">
          <AllRoutes/>
        </div>
      </div>
  );
};

export default App;
