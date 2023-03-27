import { useState } from 'react';

const useInput = (validateInput) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [touched, setTouched] = useState(false);

    const inputIsValid = validateInput(enteredValue);
    const hasError = !inputIsValid && touched;

    // This updates the state on every keystroke
    // Will set the value from input
    const valueChangedHandler = (e) => {
        setEnteredValue(e.target.value);
    };

    // This updates whether the user has clicked the input box
    const inputBlurHandler = () => {
        setTouched(true);
    };

    // This resets the input
    const resetInput = () => {
        setEnteredValue("");
        setTouched(false);
    };

    // This allows us to expose what we're using above
    // The argument in useInput is defined in Form
    return {
        value: enteredValue,
        hasError,
        isValid: inputIsValid,
        valueChangedHandler,
        inputBlurHandler,
        resetInput
    };
};

export default useInput;