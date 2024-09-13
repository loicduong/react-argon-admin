import Home from '@/views/Home'
import Login from '@/views/Login'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: <Home />,
    layout: '/admin',
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
]

export default routes
