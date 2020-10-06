import * as React from 'react';
import { IconProps } from './types';

export const ShuffleIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M11.6464 2.85355C11.4512 2.65829 11.4512 2.34171 11.6464 2.14645C11.8417 1.95118 12.1583 1.95118 12.3536 2.14645L14.3536 4.14645C14.5488 4.34171 14.5488 4.65829 14.3536 4.85355L12.3536 6.85355C12.1583 7.04882 11.8417 7.04882 11.6464 6.85355C11.4512 6.65829 11.4512 6.34171 11.6464 6.14645L12.7929 5H12C11.0463 5 10.2889 5.41577 9.56502 6.11069C8.96068 6.69085 8.41673 7.42696 7.82005 8.23443L7.82005 8.23443L7.81996 8.23454C7.6832 8.41962 7.54367 8.60845 7.4 8.8C5.89126 10.8116 4.00963 13 0.5 13C0.223858 13 0 12.7761 0 12.5C0 12.2239 0.223858 12 0.5 12C3.49037 12 5.10874 10.1884 6.6 8.2C6.73154 8.02462 6.86287 7.84668 6.99461 7.6682C7.59349 6.85684 8.20065 6.03427 8.87248 5.38931C9.71111 4.58423 10.7037 4 12 4H12.7929L11.6464 2.85355ZM0.5 4C3.35278 4 5.12992 5.44588 6.50548 7.06746L6.3762 7.24266C6.2483 7.4161 6.12293 7.58609 6 7.75C5.96397 7.79804 5.92798 7.84581 5.892 7.89331C4.57348 6.29306 3.02637 5 0.5 5C0.223858 5 0 4.77614 0 4.5C0 4.22386 0.223858 4 0.5 4ZM8 9.25C7.82704 9.48061 7.64688 9.71693 7.45767 9.95468C7.90897 10.5531 8.37284 11.131 8.87248 11.6107C9.71111 12.4158 10.7037 13 12 13H12.7929L11.6464 14.1464C11.4512 14.3417 11.4512 14.6583 11.6464 14.8536C11.8417 15.0488 12.1583 15.0488 12.3536 14.8536L14.3536 12.8536C14.5488 12.6583 14.5488 12.3417 14.3536 12.1464L12.3536 10.1464C12.1583 9.95118 11.8417 9.95118 11.6464 10.1464C11.4512 10.3417 11.4512 10.6583 11.6464 10.8536L12.7929 12H12C11.0463 12 10.2889 11.5842 9.56502 10.8893C9.05288 10.3977 8.58412 9.79402 8.08987 9.12987L8 9.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ShuffleIcon;
