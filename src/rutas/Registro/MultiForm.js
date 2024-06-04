import React, { useReducer, useEffect } from 'react';
import { initialState, formReducer } from '../../reducer/formReducer';
import FormSuccess from './FormSuccess';
import FormPersonalDetails from './FormPersonalDetails';


const MultiForm = () => {
  const [form, dispatch] = useReducer(formReducer, initialState);

  const handleInput = (e) => {
    dispatch({
      type: 'UPDATE_FORM',
      field: e.target.name,
      value: e.target.value,
    });
  };
  
  useEffect(()=>{
    console.log("Hola");
  },[])

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const previousStep = () => {
    dispatch({ type: 'PREVIOUS_STEP' });
  };

  switch (form.step) {
    case 1:
      return <FormPersonalDetails nextStep={nextStep} handleInput={handleInput} form={form} />;
    case 2:
      return <FormPersonalDetails nextStep={nextStep} previousStep={previousStep} handleInput={handleInput} form={form} />;
    case 3:
      return <FormSuccess handleInput={handleInput} form={form} />;
    default:
      return null;
  }
};

export default MultiForm;