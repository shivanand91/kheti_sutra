import { Outlet } from "react-router-dom"


function App() {

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Outlet />
    </div>
  )
}

export default App
