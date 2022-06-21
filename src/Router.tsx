import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { LoginPage } from './pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<LoginPage showRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
