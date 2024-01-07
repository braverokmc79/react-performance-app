
import { useEffect, useState } from 'react';
import './App.css';
import A from './components/A';

function App() {

  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json()).then(post=>{            
        setPosts(post);
    });

  }, []);

  return (
    <div style={{padding:'1rem'}}>
        <input  value={value} onChange={e => setValue(e.target.value)} />

        <div style={{display:'flex'}}>          
           <A message={value} posts={posts} />
        </div>

    </div>
  );

}

export default App;
