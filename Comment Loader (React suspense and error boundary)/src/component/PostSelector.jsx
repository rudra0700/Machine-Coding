import { fetchPost } from "../api/fetchPost";

const resource = fetchPost(
  "https://jsonplaceholder.typicode.com/posts?_limit=5",
);
const PostSelector = ({ onSelectPost }) => {
  const posts = resource.read();

  //   const [posts, setPosts] = useState([]);
  //   const [isPostLoading, setIsPostLoading] = useState(false);
  //   const [postError, setPostError] = useState(null);

  //   useEffect(() => {
  //     setIsPostLoading(true);
  //     setPostError(null);

  //     const fetchPost = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://jsonplaceholder.typicode.com/posts?_limit=5",
  //         );
  //         const data = await response.json();

  //         if (response.ok) {
  //           setIsPostLoading(false);
  //           setPosts(data);
  //         } else {
  //           setIsPostLoading(false);
  //           setPostError("There was an error");
  //         }
  //       } catch (error) {
  //         setIsPostLoading(false);
  //         setPostError(error.message);
  //       }
  //     };

  //     fetchPost();
  //   }, []);

  //   let postContent;

  //   if (isPostLoading) {
  //     postContent = <div className="font-semibold mt-4">Post Loading...</div>;
  //   } else if (!isPostLoading && postError) {
  //     postContent = <div className="font-semibold mt-4">{postError}</div>;
  //   } else {
  //     postContent = (
  //       <select className="mt-3 text-lg font-semibold border border-black rounded-md" onChange={onSelectPost}>
  //         <option>Select Post</option>
  //         {posts?.map((post) => (
  //           <option className="font-semibold" key={post.id} value={post.id}>
  //             {post.title}
  //           </option>
  //         ))}
  //       </select>
  //     );
  //   }
  return (
    <select
      className="mt-3 text-lg font-semibold border border-black rounded-md"
      onChange={onSelectPost}
    >
      <option>Select Post</option>
      {posts?.map((post) => (
        <option className="font-semibold" key={post.id} value={post.id}>
          {post.title}
        </option>
      ))}
    </select>
  );
};

export default PostSelector;
