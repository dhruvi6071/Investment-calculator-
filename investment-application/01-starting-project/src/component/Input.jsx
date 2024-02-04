//handling two way binding.

export default function Input({change, usersInput}) {

//For lifting state up this code is transferred to main combining jsx(app) file.

//   const [userInput, setUserInput] = useState({
//     initialInvestment: 10000,
//     annualInvestment: 1200,
//     expectedReturn: 6,
//     duration: 10,
//   });

//   function handleChange(inputIdentifier, newValue) {
//     setUserInput((prevUserInput) => {
//       return {
//         ...prevUserInput,
//         [inputIdentifier]: newValue,
//       };
//     });
//   }

  return(
  <>
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            required
            value={usersInput.initialInvestment}
            onChange={(event) =>
              change('initialInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input
            type="number"
            required
            value={usersInput.annualInvestment}
            onChange={(event) =>
              change('annualInvestment', event.target.value)
            }
          />
        </p>
        </div>
        <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            required
            value={usersInput.expectedReturn}
            onChange={(event) =>
              change('expectedReturn', event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={usersInput.duration}
            onChange={(event) => change('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  </>
  );
}
