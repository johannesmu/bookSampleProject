import { Switch, Route } from 'react-router-dom';

import {Home} from './Home';
import {About} from './About';
import {Book} from './Book'
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Content( props ) {
  const [bookData,setBookData] = useState()
  const dataURL = "http://johannes.oa4.info/php/book.php";

  useEffect( () => {
    if(!bookData) {
      axios.get( dataURL )
      .then( (response) => {
        setBookData( response.data )
      })
    }
  })
  return(
    <div className="container">
      <Switch>
        <Route exact path="/">
          <Home data={bookData}/>
        </Route>
        <Route path="/book/:bookId">
          <Book />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  )
}