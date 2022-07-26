import { useEffect, useState } from "react";
const useDetails = () => {
  console.log(4);
  const [details, setDetails] = useState({
    width: document.documentElement.offsetWidth,
    height: document.documentElement.offsetHeight
  });

  const test = function () {
    const dimensions = {
      width: document.documentElement.offsetWidth,
      height: document.documentElement.offsetHeight
    };
    setDetails(dimensions);
  };

  useEffect(() => {
    console.log(5);
    window.addEventListener("resize", test);
    return () => {
      console.log(6);
      window.removeEventListener("resize", test);
    };
  }, []);

  return details;
};
export default useDetails;
