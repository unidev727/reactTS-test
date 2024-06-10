import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { selectOption } from '../../reducer/RadioSlice';

interface RadioProps {
  label: string;
  name: string;
  value: string;
}

export const Radio: React.FC<RadioProps> = ({ label, name, value }) => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state: RootState) => state.radio.selectedOption);

  const handleChange = () => {
    dispatch(selectOption(value));
  };

  return (
    <label className="inline-flex items-center mt-2 w-full sm:w-auto text-sm">
      <input
        type="radio"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
        name={name}
        value={value}
        checked={selectedOption === value}
        onChange={handleChange}
      />
      <span className="ml-2 text-gray-700 dark:text-gray-200">{label}</span>
    </label>
  );
};