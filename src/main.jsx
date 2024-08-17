
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { routes } from './routes/index.jsx'
import './assets/css/tailwind.css'
import store from './store/index.js'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
)
