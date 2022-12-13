import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

//CRUD
//Create - Read - Update - Delete
//POST - GET - PUT - DELETE

function App() {

  const [post, setPost] = useState([])
  //const data = "Jhon Doe" Así ya no más


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        setPost(res.data)
      })
  }, [])

  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Primeros pasos con react</p>
      {post.map((item) => {
        return (
          <div className='container-post'>
            <h5>{item.title}</h5>
            <p>{item.body}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
