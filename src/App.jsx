import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TestHello from './components/backendComponent/TestHelloWorld'
import { LoginComponent } from './components/backendComponent/login/LoginComponent'
import { RegisterComponent } from './components/backendComponent/login/RegisterComponent'
import { HomeComponent } from './components/HomeComponent'
import HeaderComponent from './components/backendComponent/HeaderComponent'
import ListUserComponent from './components/backendComponent/ListUserComponent'
import { UserHeaderComponent } from './components/UserHeaderComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        {true ? <HeaderComponent /> : <UserHeaderComponent />}
          <Routes>
            {/* // http://localhsot:8000/admin */}
            <Route path='/admin' element = {<ListUserComponent/>}></Route>
            {/* // http://localhsot:8000/test */}
            <Route path='/test' element = {<TestHello/>}></Route>
            {/* // http://localhsot:8000/home */}
            <Route path='/home' element = {<HomeComponent/>}></Route>
            {/* // http://localhsot:8000/login */}
            <Route path='/login' element = {<LoginComponent/>}></Route>
            {/* // http://localhsot:8000/test */}
            <Route path='/register' element = {<RegisterComponent/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
