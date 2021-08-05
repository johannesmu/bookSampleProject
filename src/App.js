
import './App.css';
import {Header} from './Components/Header';
import {Content} from './Components/Content';
import {Footer} from './Components/Footer';

import {useState} from 'react';

const Nav = [
  {name: "Home", link: "/"},
  {name: "About", link: "/about"},
  {name: "Register", link: "/register"},
  {name: "Login", link: "/login"},
  {name: "Add", link: "/add"},
]

const AuthNav = [
  {name: "Home", link: "/"},
  {name: "About", link: "/about"},
  {name: "Log out", link: "/logout"},
]

function App() {
  const [auth,setAuth] = useState( false )

  const changeAuth = (authValue) => {
    setAuth( (authValue) ? true : false )
  }

  return (
    <div className="App">
      <Header name="Heart Books" navigation={ (auth) ? AuthNav : Nav } />
      <Content authHandler = {changeAuth}/>
      <Footer />
    </div>
  );
}

export default App;
