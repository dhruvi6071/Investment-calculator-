import { useState } from "react";
import Header from "./component/Header.jsx";
import Input from "./component/Input.jsx";
import Result from "./component/Result.jsx";

function App() {
  
    const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
    });
  
    function handleChange(inputIdentifier, newValue) {
      setUserInput((prevUserInput) => {
        return {
          ...prevUserInput,
          [inputIdentifier]: newValue,
        };
      });
    }
  
  return (
   <>
   <Header />
   <Input change={handleChange} usersInput={userInput}/>
   <Result input={userInput}/>
   </>
  );
}

export default App;
