import React from "react"
import { useDispatch } from "react-redux"
import { setMemo } from "../../reducer/MemoSlice";

export const TextBox: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = (e: { target: { value: string; }; }) => {
    dispatch(setMemo(e.target.value))
  }

  return (
    <div>
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Memo</label>
      <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." onChange={handleChange}></textarea>
    </div>
  )
}