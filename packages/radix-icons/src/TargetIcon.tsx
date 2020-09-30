import * as React from 'react';
import { IconProps } from './types';

export const TargetIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0.9 7.5C0.9 3.85493 3.85493 0.9 7.5 0.9C11.145 0.9 14.1 3.85492 14.1 7.5C14.1 11.1451 11.1451 14.1 7.5 14.1C3.85492 14.1 0.9 11.145 0.9 7.5ZM7.5 1.8C4.35198 1.8 1.8 4.35198 1.8 7.5C1.8 10.648 4.35198 13.2 7.5 13.2C10.648 13.2 13.2 10.648 13.2 7.5C13.2 4.35198 10.648 1.8 7.5 1.8ZM3.07502 7.5C3.07502 5.05614 5.05616 3.075 7.50002 3.075C9.94386 3.075 11.925 5.05614 11.925 7.5C11.925 9.94384 9.94386 11.925 7.50002 11.925C5.05616 11.925 3.07502 9.94384 3.07502 7.5ZM7.50002 3.925C5.5256 3.925 3.92502 5.52558 3.92502 7.5C3.92502 9.4744 5.5256 11.075 7.50002 11.075C9.47441 11.075 11.075 9.4744 11.075 7.5C11.075 5.52559 9.47441 3.925 7.50002 3.925ZM7.50002 5.25C6.25738 5.25 5.25002 6.25736 5.25002 7.5C5.25002 8.74263 6.25737 9.75 7.50002 9.75C8.74265 9.75 9.75002 8.74263 9.75002 7.5C9.75002 6.25736 8.74265 5.25 7.50002 5.25ZM6.05002 7.5C6.05002 6.69919 6.6992 6.05 7.50002 6.05C8.30082 6.05 8.95002 6.69919 8.95002 7.5C8.95002 8.3008 8.30082 8.95 7.50002 8.95C6.6992 8.95 6.05002 8.30081 6.05002 7.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default TargetIcon;
