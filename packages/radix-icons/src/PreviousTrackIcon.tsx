import * as React from 'react';
import { IconProps } from './types';

export const PreviousTrackIcon = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.9498 2.74989C1.9498 2.44613 2.19604 2.19989 2.4998 2.19989C2.80356 2.19989 3.0498 2.44613 3.0498 2.74989V7.2825C3.09544 7.18802 3.17051 7.10851 3.26667 7.05776L12.2667 2.30776C12.4217 2.22596 12.6081 2.23127 12.7582 2.32176C12.9083 2.41225 13 2.57471 13 2.74995V12.25C13 12.4252 12.9083 12.5877 12.7582 12.6781C12.6081 12.7686 12.4217 12.7739 12.2667 12.6921L3.26667 7.94214C3.17051 7.89139 3.09544 7.81188 3.0498 7.7174V12.2499C3.0498 12.5536 2.80356 12.7999 2.4998 12.7999C2.19604 12.7999 1.9498 12.5536 1.9498 12.2499V2.74989ZM4.57126 7.49995L12 11.4207V3.5792L4.57126 7.49995Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default PreviousTrackIcon;
