import react, { useState } from 'react';
import validator from 'validator';

const App = () => {
  const [errormessage, setErrorMessage] = useState('')
  const validate = (value) => {
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1, 
            minUppercase: 1, minNumbers: 1, minSymbols: 1 
    })) {
      setErrorMessage(" It is a strong password");
    }
    else {
      setErrorMessage(" It is not a strong password");

    }
  }



  return (
    <div style={{ marginLeft: "300px" }}>
      <pre>
        <h2>checking password strength in react</h2>
        <span> enter your password</span> <input type="text"
          onChange={(e) => validate(e.target.value)}></input> <br />
        {errormessage === " " ? null :
          <span style={{
            fontWeight: 'bold',
            color: 'blue'
          }}>{errormessage}</span>}
      </pre>
    </div>
  );
}
export default App






/* The line errorMessage === '' ? null : ... is using a ternary operator, which is a shorthand way to write an if-else statement. Here’s a breakdown of what it means:

Condition: errorMessage === '' checks if errorMessage is an empty string.
True Case: If errorMessage is an empty string (true), it returns null, which means nothing will be rendered.
False Case: If errorMessage is not an empty string (false), it returns the JSX that follows the colon (:). This is where you would typically render an error Message
*/