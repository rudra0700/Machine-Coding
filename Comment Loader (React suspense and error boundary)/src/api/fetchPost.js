import { wrapePromise } from "../utils/wrapePromise";

const fetchPost = (url) => {
  const response = fetch(url).then((res) => res.json());
  return wrapePromise(response);
};

export { fetchPost };
