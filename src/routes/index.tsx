import Dashboard from '@/views/Dashboard'
import Table from '@/views/Table'
import Billing from '@/views/Billing'
import VirtualReality from '@/views/VirtualReality'
import Rtl from '@/views/Rtl'
import Profile from '@/views/Profile'
import Signin from '@/views/Signin'
import Signup from '@/views/Signup'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/layouts'

export default createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard-default" /> },
      { path: "dashboard-default", element: <Dashboard /> },
      { path: "table", element: <Table /> },
      { path: "billing", element: <Billing /> },
      { path: "virtual-reality", element: <VirtualReality /> },
      { path: "rtl-page", element: <Rtl /> },
      { path: "profile", element: <Profile /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
    ],
  },
])
