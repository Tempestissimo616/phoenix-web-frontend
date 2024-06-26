import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import { ListUserComponent } from './components/ListUserComponent'
import TestHello from './components/TestHelloWorld'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            {/* // http://localhsot:8000 */}
            <Route path='/' element = {<ListUserComponent/>}></Route>
            {/* // http://localhsot:8000/test */}
            <Route path='/test' element = {<TestHello/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
