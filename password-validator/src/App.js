import React, { useState } from "react"; 
import validator from 'validator'

const App = () => { 

	const [errorMessage, setErrorMessage] = useState('') 

	const validate = (value) => { 

		if (validator.isStrongPassword(value, { 
			minLength: 8, minLowercase: 1, 
			minUppercase: 1, minNumbers: 1, minSymbols: 1 
		})) { 
			setErrorMessage('Is Strong Password') 
		} else { 
			setErrorMessage('Is Not Strong Password') 
		} 
	} 

	return ( 
		<div style={{ 
			marginLeft: '200px', 
		}}> 
			<pre> 
				<h2>Checking Password Strength in ReactJS</h2> 
				<span>Enter Password: </span><input type="text"
					onChange={(e) => validate(e.target.value)}></input> <br /> 
				{errorMessage === '' ? null : 
					<span style={{ 
						fontWeight: 'bold', 
						color: 'red', 
					}}>{errorMessage}</span>} 
			</pre> 
		</div> 
	); 
} 

export default App
