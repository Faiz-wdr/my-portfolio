
import React from 'react'
import './Blog.css';
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { auth, provider } from '../../firebase-config';
import BlogsView from './BlogsView';




function Blog()  {
  
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  const navigate = useNavigate();

  const signInWithGoogle = () =>{
    signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem('isAuth', true)  
        setIsAuth(true);   
        navigate('/Blog')  });
    }

  const signUserOut = () =>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname= '/Blog';
    });

    
  }

  return (
    <body>
      <header className="h-blg">
        <div className="nav_bar2">
          <ul>
            <li className="nav-list2">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="nav-list2">
              <Link to={"#"}>Blogs</Link>
            </li>
            {!isAuth ? (
                <li className='nav-list2'>
         <button className="btn-g" onClick={signInWithGoogle}>Google</button>
          </li>)
           : (
            <> 
            <li className="nav-list2">
              <Link to={"/CreatePost"}>Create Post</Link>
            </li>
            <button className='btn' onClick={signUserOut}>Log Out</button>
           
            </>
            )}
          </ul>
        </div>
        <BlogsView />
      </header>
    </body>
  );
}

export default Blog;