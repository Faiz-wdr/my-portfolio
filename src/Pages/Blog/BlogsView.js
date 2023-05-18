
import { useEffect, useState } from 'react';
import { getDocs ,collection, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';

const BlogsView = ({isAuth, imageUrl}) => {

const [ postList, setPostList] = useState([]);
const [ loading, setLoading] = useState(false);
const postCollectionRef = collection(db, 'posts');

const getPosts = async() => {
    setLoading(false);
    const data= await getDocs(postCollectionRef);
    setPostList(data.docs.map((doc)=> ({...doc.data(), id:doc?.id})))
    setLoading(false);

}

const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc);
    prompt('Type REMOVE to delete this Message');
    getPosts();
    
}
const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

useEffect (() =>{
    getPosts();
},[])

if(loading){
    return <h3>Loading...</h3>
}

  return (
    <div className="Homepage">
      {postList.length === 0 ? <h3> Blogs Loading... </h3> : postList.map( (post) => {
        return (
          <div key={post.id} className="card">
            <div className="card-body">
              {isAuth && post.author.id === auth.currentUser.uid && (
                <div className="d-flex">
                  <button
                    className="btn-dlt-msg"
                    onClick={() => {
                      deletePost(post?.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
              <div className='img-card' style={divStyle}>
              <img src={post.imageUrl} alt="blog-img" />
              </div>
              <div className='card-txt'>
              <h5 className="card-title">{post?.title}</h5>
              <p className="post">{post?.postTitle}</p>
              <p className="read">Read More</p>
              {/* <span className="badge bg-dark">{post.author?.name}</span> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogsView