import './App.css';
import Header from './Header';
import Login from './Login';
import Home from './Home';
import Checkout from './Checkout';
import Footer from './Footer';
import Nav from './Nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';

const App = () => {

  const [{loggedinuser}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((userauth)=>{
      if(userauth){
        dispatch({
          type:'SET_LOGIN',
          user: userauth
        })
        console.log(loggedinuser);
      }else{dispatch({
        type:'SET_LOGIN',
        user: null
      })
      console.log(loggedinuser);
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/checkout' element={<><Header /><Checkout /></>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<><Header /><Nav /><Home /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;