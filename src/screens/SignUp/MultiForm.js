import React, { useReducer, useEffect } from 'react';
import { initialState, formReducer } from '../../reducer/formReducer';
import FirstStep from './Steps/FirstStep';
import SecondStep from './Steps/SecondStep';
import ThirdStep from './Steps/ThirdStep';
import { useFetch } from '../../hooks/useFetch';

const MultiForm = () => {
  
  const [form, dispatch] = useReducer(formReducer, initialState);
  
  let {
		getData,
	} = useFetch(null);

  const handleInput = (e) => {
    
    dispatch({
      type: 'UPDATE_FORM',
      field: e.name,
      value: e.value,
    });
  };
  
  const getInfo = async () =>{
    const url = `https://swapi.dev/api/`;
		const result = await getData(url);
    console.log(result)
  }

  useEffect(()=>{
    getInfo()
  },[])

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const previousStep = () => {
    dispatch({ type: 'PREVIOUS_STEP' });
  };

  switch (form.step) {
    case 1:
      return <FirstStep nextStep={nextStep} handleInput={handleInput} form={form} />
    case 2:
      return <SecondStep nextStep={nextStep} handleInput={handleInput} form={form} />
    case 3:
      return <ThirdStep nextStep={nextStep} handleInput={handleInput} form={form} />
    default:
      return null;
  }
};

export default MultiForm;