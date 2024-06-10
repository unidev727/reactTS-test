import React from 'react';
import { Radio } from './Radio';

export const RadioGroup: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <Radio
        label="Option A"
        name="options"
        value="option1"
      />
      <Radio
        label="Option B"
        name="options"
        value="option2"
      />
      <Radio
        label="Option C"
        name="options"
        value="option3"
      />
    </div>
  );
};