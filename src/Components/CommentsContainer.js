import React from "react";
import Comment from "./Comment";
import CommentsData from "../utils/commentsData";

const CommentList = ({ Comments }) => {
  return Comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.replies && comment.replies.length > 0 && (
        <div className="pl-5 border border-l-black ml-5">
          <CommentList Comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList Comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
