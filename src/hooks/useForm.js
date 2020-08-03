import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  const setFieldValue = (fieldName, value) => {
    setValues({ ...values, [fieldName]: value });
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setFieldValue(target.getAttribute('name'), value);
  };

  const clearForm = () => {
    setValues(valoresIniciais);
  };

  return { values, clearForm, handleChange };
}

export default useForm;
