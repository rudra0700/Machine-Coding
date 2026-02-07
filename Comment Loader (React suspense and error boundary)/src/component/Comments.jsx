import { useEffect, useState } from "react";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(false);
  const [commentError, setCommentError] = useState(null);

  useEffect(() => {
    setIsCommentsLoading(true);
    setCommentError(null);

    const fetchComment = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        );
        const data = await response.json();

        if (response.ok) {
          setIsCommentsLoading(false);
          setComments(data);
        } else {
          setIsCommentsLoading(false);
          setCommentError("There was an error");
        }
      } catch (error) {
        setIsCommentsLoading(false);
        setCommentError(error.message);
      }
    };

    fetchComment();
  }, [postId]);

  let commentContent;

  if (isCommentsLoading) {
    commentContent = <div className="font-semibold mt-4">Post Loading...</div>;
  } else if (!isCommentsLoading && commentError) {
    commentContent = <div className="font-semibold mt-4">{commentError}</div>;
  } else {
    commentContent = (
      <ul>
        {comments?.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    );
  }
  return (
    <div>
      <h2 className="text-xl font-bold mt-3 ml-3">Comments</h2>
      <div className="font-medium mt-3 ml-3">{commentContent}</div>
    </div>
  );
};

export default Comments;
