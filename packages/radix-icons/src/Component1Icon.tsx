import * as React from 'react';
import { IconProps } from './types';

export const Component1Icon = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.67127 3.14635C4.47601 3.34161 4.47601 3.6582 4.67127 3.85346L7.14615 6.32833C7.34141 6.52359 7.65799 6.52359 7.85325 6.32833L10.3281 3.85346C10.5234 3.6582 10.5234 3.34161 10.3281 3.14635L7.85325 0.671479C7.65799 0.476217 7.34141 0.476217 7.14615 0.671479L4.67127 3.14635ZM7.4997 5.26767L5.73193 3.49991L7.4997 1.73214L9.26747 3.49991L7.4997 5.26767ZM8.67127 7.14635C8.47601 7.34161 8.47601 7.6582 8.67127 7.85346L11.1461 10.3283C11.3414 10.5236 11.658 10.5236 11.8533 10.3283L14.3281 7.85346C14.5234 7.6582 14.5234 7.34161 14.3281 7.14635L11.8533 4.67148C11.658 4.47622 11.3414 4.47622 11.1461 4.67148L8.67127 7.14635ZM11.4997 9.26767L9.73193 7.49991L11.4997 5.73214L13.2675 7.49991L11.4997 9.26767ZM4.67127 11.8535C4.47601 11.6582 4.47601 11.3416 4.67127 11.1464L7.14615 8.67148C7.34141 8.47622 7.65799 8.47622 7.85325 8.67148L10.3281 11.1464C10.5234 11.3416 10.5234 11.6582 10.3281 11.8535L7.85325 14.3283C7.65799 14.5236 7.34141 14.5236 7.14615 14.3283L4.67127 11.8535ZM5.73193 11.4999L7.4997 13.2677L9.26747 11.4999L7.4997 9.73214L5.73193 11.4999ZM0.671273 7.1465C0.476011 7.34176 0.476011 7.65835 0.671273 7.85361L3.14615 10.3285C3.34141 10.5237 3.65799 10.5237 3.85325 10.3285L6.32813 7.85361C6.52339 7.65835 6.52339 7.34176 6.32813 7.1465L3.85325 4.67163C3.65799 4.47636 3.34141 4.47636 3.14615 4.67163L0.671273 7.1465ZM3.4997 9.26782L1.73193 7.50005L3.4997 5.73229L5.26747 7.50005L3.4997 9.26782Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Component1Icon;
