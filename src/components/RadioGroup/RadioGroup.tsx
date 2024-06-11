import React from 'react';
import { Radio } from './Radio';

interface OptionProps {
  label: string;
  value: string;
}

const options: OptionProps[] = [
  { label: 'Option A', value: 'option1' },
  { label: 'Option B', value: 'option2' },
  { label: 'Option C', value: 'option3' }
];

export const RadioGroup: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      {options.map(option => (
        <Radio
          key={option.value}
          label={option.label}
          name="options"
          value={option.value}
        />
      ))}
    </div>
  );
};