import './App.css'
import { RadioGroup } from './components/RadioGroup'
import { InputBox } from './components/InputBox'
import { Button } from './components/Button'
import { TextBox } from './components/textBox'

function App() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-200 w-full">
      <div className="flex flex-col p-4 md:w-1/2">
        <RadioGroup />
        <div className="flex flex-col md:flex-row gap-2 mt-4">
          <InputBox />
          <Button />
        </div>
      </div>
      <div className="flex flex-col p-4 md:w-1/2">
        <TextBox />
      </div>
    </div>
  )
}

export default App
