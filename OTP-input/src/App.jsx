import { useEffect, useRef, useState } from "react";

const OTP_DIGIT_COUNT = 5;

function App() {
  const [inputArr, setInputArr] = useState(Array(OTP_DIGIT_COUNT).fill(""));
  const refArr = useRef([]);

  const handleChange = (value, index) => {
    if (isNaN(value)) {
      return alert("Text OTP is not allowed");
    }
    const newValue = value.trim();

    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);

    newValue && refArr.current[index + 1].focus();
  };

  const handleBackSpace = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1].focus();
    }
  };
 

  useEffect(() => {
      refArr.current[0].focus();
  }, [])
  return (
    <>
      <h1>OTP Validation</h1>

      {inputArr.map((value, index) => {
        return (
          <input
            className="otp-input"
            key={index}
            value={inputArr[index]}
            onChange={(e) => handleChange(e.target.value, index)}
            ref={(input) => (refArr.current[index] = input)}
            onKeyDown={(e) => handleBackSpace(e, index)}
          />
        );
      })}
    </>
  );
}

export default App;
