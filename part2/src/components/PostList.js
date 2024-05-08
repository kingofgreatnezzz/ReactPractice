import React, { Component } from "react";
import axios from "axios";
export class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => {
        console.log(Response);
        this.setState({ posts: Response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errormgs: "error retriveting data motherfucker ",
        });
      });
  }

  render() {
    const { posts, errormgs } = this.state;
    return (
      <div>
        List of posts
        {posts.length
          ? posts.map((post) => <div key={post.id}> {post.title}</div>)
          : null}
        { errormgs ? <div>{errormgs}</div> : null}
      </div>
    );
  }
}

export default PostList;
