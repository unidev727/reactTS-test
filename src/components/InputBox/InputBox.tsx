import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setBtnState } from '../../reducer/DisSlice';

export function InputBox() {
  const dispatch = useDispatch();
  const codeStr = useSelector((state: RootState) => state.discount.inputedContent);
  const [code, setCode] = useState<string>(codeStr);
  const [isValid, setIsValid] = useState<boolean>(true);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCode(value);
    validateCode(value);
    if(!isValid) {
      dispatch(setBtnState(true))
    }
  };

  useEffect(() => {
    setCode(codeStr)
  },[codeStr])

  const validateCode = (value: string) => {
    // Regex pattern to match only uppercase letters and numbers
    const pattern = /^[A-Z0-9]*$/;
    setIsValid(pattern.test(value));
  }

  return (
    <div className="w-full sm:max-w-xs mx-auto">
      <input
        type="text"
        id="discount_code"
        value={code}
        onChange={handleChange}
        className={`bg-gray-50 border ${
          isValid ? 'border-gray-300' : 'border-red-500'
        } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="DISCOUNT2024"
        required
      />
      {!isValid && (
        <p className="mt-2 text-sm text-red-600">
          Invalid code format!
        </p>
      )}
    </div>
  )
}