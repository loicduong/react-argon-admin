import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import "./assets/scss/argon-dashboard.scss";
import { Provider } from 'react-redux'
import store from './stores'
import { RouterProvider } from 'react-router-dom';
import router from './routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
