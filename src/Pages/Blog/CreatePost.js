import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db} from '../../firebase-config';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css'


const CreatePost = ({isAuth}) => {

    const [imageUrl, setImageUrl] = useState('');
  const [ title, setTitle] = useState('');
  const [ postTitle, setPostTitle] = useState('');

  let navigate = useNavigate();

  const postCollectionRef = collection(db, 'posts');
  const createPost = async() =>   {
    if (title === '' || postTitle ===  ''){
      alert ('Fill all Fields');
      return false;
    }else{
      try{
        await addDoc(postCollectionRef, {
          imageUrl,
          title,
          postTitle,
          author: {
            name: auth?.currentUser?.displayName,
            // id: auth.currentUser.id
          },
        });
        console.log(auth);
        navigate('/Blog');

      }catch(error){
        console.log('error');
      }
    }
  }

  useEffect(() => {
    if(!isAuth){
      navigate("/CreatePost");
    }
  })

  return (
    <div className="row g-3">
      <div className="card-msg">
        <h1>Create a Blog</h1>
        <div className="col-md-6">
        <input className='form-control'
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <br />
          <input
            type="text"
            placeholder="Post Title"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Post Content"
            className="form-control"
            onChange={(e) => setPostTitle(e.target.value)}
          ></textarea>
        </div>
        <div className="btn-container">
          <button className="btn-sub" onClick={createPost}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost