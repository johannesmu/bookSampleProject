import { Switch, Route } from 'react-router-dom';
import { firebaseConfig } from '../config/Config';
import firebase  from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import { useState } from 'react';

import {Home} from './Home';
import {About} from './About';
import {Register} from './Register';
import {Login} from './Login';
import {Logout} from './Logout';
import {Book} from './Book';
import { AddData } from './Admin/AddData';

export function Content( props ) {
  const [auth,setAuth] = useState( false )
  const [user,setUser] = useState()
  const [data,setData] = useState()

  if(!firebase.apps.length){
    firebase.initializeApp( firebaseConfig);
  }
  // reference to database
  const db = firebase.firestore()
  

  const addData = ( data ) => {
    return new Promise( ( resolve,reject) => {
      db.collection('books').add( data )
      .then( () => resolve( true ) )
      .catch( (error) => reject(error) )
    })
  }

  // reference to storage
  const storage = firebase.storage()

  const uploadImage = ( path, image ) => {
    return new Promise( (resolve,reject) => {
      storage.ref(path).put(image)
      .then( ( response ) => {
        //get the URL of the file
        storage.ref(path).child(image).getDownloadURL()
        .then((url) => {
          resolve( url )
        })
        .catch((error) => reject(error) )
      })
      .catch( (error) => reject(error) )
    })
  }

  const registerUser = (email,password) => {
    firebase.auth().createUserWithEmailAndPassword( email, password )
    .then( ( userCredential ) => {
      // do something with the user object
      //console.log( userCredential.user.uid )
      setUser( userCredential.user )
      setAuth( true )
      props.authHandler( true )
    })
    .catch( (error) => {
      // do something with the error
      console.log( error )
    })
  }

  const loginUser = (email,password) => {
    firebase.auth().signInWithEmailAndPassword( email, password )
    .then( (userCredential) => {
      setUser( userCredential.user )
      setAuth( true )
      props.authHandler( true )
    })
    .catch( (error) => {
      // do something with the error
      console.log( error )
    })
  }

  const logoutUser = () => {
    firebase.auth().signOut()
    .then( () => {
      // do something after signout
      setUser( null )
      setAuth( false )
      props.authHandler( false )
    })
  }

  return(
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home data={data}/>
        </Route>
        <Route path="/book/:bookId">
          <Book />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/register">
          <Register handler={ registerUser }/>
        </Route>
        <Route path="/login">
          <Login handler={ loginUser }/>
        </Route>
        <Route path="/logout">
          <Logout handler={ logoutUser }/>
        </Route>
        <Route path="/add">
          <AddData handler={addData}/>
        </Route>
      </Switch>
    </div>
  )
}