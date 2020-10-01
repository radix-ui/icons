import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.84181 3.13514C9.04327 3.32401 9.05348 3.64042 8.86461 3.84188L5.43521 7.49991L8.86461 11.1579C9.05348 11.3594 9.04327 11.6758 8.84181 11.8647C8.64036 12.0535 8.32394 12.0433 8.13507 11.8419L4.38507 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84181 3.13514Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ChevronLeftIcon;
