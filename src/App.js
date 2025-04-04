import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './Components/LoginForm/LoginForm';
import Welcome from "./Components/Wlcome/Welcome";
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/welcome"
          element={
            <PrivateRoute>
              <Welcome />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
