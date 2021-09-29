import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import HotelView from "./components/HotelView/HotelView"
import "./app.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <HotelView />
    </div>
  )
}

export default App
