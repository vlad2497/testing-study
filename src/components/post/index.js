import React from "react";

const Post = ({text = "super post"}) => {
  return (
    <div className="post">
      {text}
    </div>
  );
}

export default Post;
