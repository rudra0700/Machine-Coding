import { MagnifyingGlass } from "react-loader-spinner";


const Spinner = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="30"
      width="30"
      ariaLabel="magnifying-glass-loading"
      wrapperStyle={{}}
      wrapperClass="magnifying-glass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  );
};

export default Spinner;
