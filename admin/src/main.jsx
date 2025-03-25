import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AdminContextProvider from './context/AdminContext.jsx';
import MovieContextProvider from './context/MovieContext.jsx';
import AppContextProvider from './context/AppContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProvider>
      <MovieContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </MovieContextProvider>
    </AdminContextProvider>
  </BrowserRouter>
)
