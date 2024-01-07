import React, { useCallback } from 'react'


const Message=React.memo(({message})=>{
    return <p>{message}</p>
});

const ListItem=React.memo(({post, testFunction})=>{
    const onKey=()=>{
        testFunction("hello world");
    }

    return (
        <li key={post.id} onClick={onKey}>
                <p>{post.title}</p>
        </li>
    )   
});

const List=React.memo(({posts, testFunction})=>{
    console.log("List Components rendered");

 

    return (
        <ul>
           {posts.map(post=>(           
               <ListItem  key={post.id}  post={post}  testFunction={testFunction} />              
           ))}
        </ul>
    )
});

const B = ({message,posts}) => {

  console.log("B Components rendered");

  const testFunction=useCallback((mes) => {   
        console.log("message: ",mes);
  },[]);


  return (
    <div>
        <h1>B Components</h1>
        <Message message={message} />
        <List posts={posts} testFunction={testFunction}/>
    </div>
  )
}

export default B