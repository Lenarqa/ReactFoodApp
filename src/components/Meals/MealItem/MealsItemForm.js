import react, { useContext, useRef, useState } from "react";
import classes from "./MealsItemForm.module.css";
import Input from "../../UI/Input";

const MealsItemForm = (props) => {
  const [amoundIsValid, setAmoundIsValid] = useState(true);
  const amoundInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmound = amoundInputRef.current.value;
    const enteredAmoundNumber = +enteredAmound;

    if (
      enteredAmound.trim().length === 0 ||
      enteredAmoundNumber < 1 ||
      enteredAmoundNumber > 5
    ) {
      setAmoundIsValid(false);
      return;
    }
    setAmoundIsValid(true);
    props.onAddToCart(enteredAmoundNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amoundInputRef}
        label="Amound"
        input={{
          id: "amound" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amoundIsValid && <p>Please enter a valid amound (1-5)</p>}
    </form>
  );
};

export default MealsItemForm;
