import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import "./index.css";
import Spinner from "./Spinner";
const App = () => {
  const [liked, setLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setIsFetching(true);
    setError(null);
    try {
      const response = await fetch(
        "https://questions.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          }),
        },
      );

      if (response.status >= 200 && response.status < 300) {
        setLiked(!liked);
      } else {
        const res = await response.json();
        setError(res.message);
      }
    } finally {
      setIsFetching(false);
    }
  };
  return (
    <div>
      <button
        disabled={isFetching}
        onClick={handleClick}
        className={`likedBtn ${liked ? "liked" : ""}`}
      >
        {isFetching ? <Spinner /> : <CiHeart />} {liked ? "liked" : "like"}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
