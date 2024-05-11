import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  //const [posts, setPost] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonCLick] = useState(1)

  const handleclick = () => {
    setIdFromButtonCLick(id)
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div>{post.title}</div>
      <button onClick={handleclick}> Fetch Post </button>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
