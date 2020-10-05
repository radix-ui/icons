import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="15"
      height="15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        d="M6.1584 3.13506C6.35985 2.9462 6.67627 2.9564 6.86514 3.15786L10.6151 7.15786C10.7954 7.35019 10.7954 7.64947 10.6151 7.8418L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49983L6.1356 3.8418C5.94673 3.64034 5.95694 3.32393 6.1584 3.13506Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ChevronRightIcon;
