
import React from 'react';
import Navbar from './Navbar';
import './App.css';
import { BrowserRouter as Router, Routes , Route , Link} from 'react-router-dom';
import EmployeeAddOrEdit from "./EmployeeAddOrEdit";
import Home from "./Home";

function App() {
  return (
    <div className="App">
       
    <div className="container">  
    <Router>
      <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />            
            <Route path="/Add" element={<EmployeeAddOrEdit />} />
          </Routes>
      </div>
    </Router>
      {/* <Provider store={store}>
              <EmployeeForm />
            </Provider> */}
    </div>
  </div>
  );
}

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

export default App;
