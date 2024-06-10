import { useDispatch, useSelector } from "react-redux";
import { setContent } from "../../reducer/DisSlice";
import { generateRandomCode } from '../../util/GetRandomStr';
import { RootState } from "../../store/store";

export function Button() {
  const dispatch = useDispatch();
  const btnState = useSelector((state: RootState) => state.discount.btnState); 
  const handleClick = () => {
    dispatch(setContent(generateRandomCode()));
  }

  return (
    <div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:bg-gray-200 disabled:text-blue-800 sm:w-full"
        onClick={handleClick}
        disabled={!btnState}
      >Generate</button>
    </div>
  )
}