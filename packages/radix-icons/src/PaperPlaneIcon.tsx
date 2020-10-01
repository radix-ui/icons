import * as React from 'react';
import { IconProps } from './types';

export const PaperPlaneIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.23017 0.0561426C1.03791 -0.0435477 0.803328 -0.00813072 0.649069 0.143876C0.49481 0.295884 0.455948 0.529921 0.5528 0.723626L3.94099 7.50001L0.5528 14.2764C0.455948 14.4701 0.49481 14.7041 0.649069 14.8561C0.803328 15.0081 1.03791 15.0436 1.23017 14.9439L14.7301 7.94388C14.8959 7.85792 15 7.68675 15 7.50001C15 7.31327 14.8959 7.14209 14.7301 7.05613L1.23017 0.0561426ZM4.85902 7.10001L2.13486 1.65167L13.4138 7.50001L2.13486 13.3483L4.85902 7.90001H10C10.2209 7.90001 10.4 7.72092 10.4 7.50001C10.4 7.2791 10.2209 7.10001 10 7.10001H4.85902Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default PaperPlaneIcon;
