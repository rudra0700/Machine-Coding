import { Suspense, useState } from "react";
import Comments from "./component/Comments";
import PostSelector from "./component/PostSelector";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (e) => {
    setSelectedPostId(e.target.value);
  };

  console.log(selectedPostId);
  return (
    <div>
      <h1 className="text-3xl font-bold">
        React Suspense and Error Boundaries
      </h1>
      <div>
        <ErrorBoundary fallback={<h4 className="font-bold text-lg">Error fetching post...</h4>}>
          <Suspense fallback={<h4 className="font-bold text-lg">Loading...</h4>}>
            <PostSelector onSelectPost={handleSelectPost} />
          </Suspense>
        </ErrorBoundary>
        {selectedPostId && <Comments postId={selectedPostId} />}
      </div>
    </div>
  );
};

export default App;
