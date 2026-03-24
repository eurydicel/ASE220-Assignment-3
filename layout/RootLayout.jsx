import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function RootLayout() {


  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-area">
        <Outlet />
      </main>
    </div>
  )
}
