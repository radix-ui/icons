import * as React from 'react';
import { BaseIconProps } from './types';

interface InfoIconProps extends BaseIconProps {
  size?: '15';
  type: 'twoTone';
}

export const InfoIcon = ({
  color = 'currentColor',
  size = '15',
  type,
  ...props
}: InfoIconProps) => {
  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M13.6477 7.49974C13.6477 10.8951 10.8952 13.6476 7.49988 13.6476C4.10453 13.6476 1.35205 10.8951 1.35205 7.49974C1.35205 4.10439 4.10453 1.35191 7.49988 1.35191C10.8952 1.35191 13.6477 4.10439 13.6477 7.49974Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.49991 0.876907C3.84222 0.876907 0.877075 3.84205 0.877075 7.49974C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49974C14.1227 3.84205 11.1576 0.876907 7.49991 0.876907ZM1.82707 7.49974C1.82707 4.36673 4.36689 1.82691 7.49991 1.82691C10.6329 1.82691 13.1727 4.36673 13.1727 7.49974C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49974ZM8.24992 4.5C8.24992 4.91421 7.91413 5.25 7.49992 5.25C7.08571 5.25 6.74992 4.91421 6.74992 4.5C6.74992 4.08579 7.08571 3.75 7.49992 3.75C7.91413 3.75 8.24992 4.08579 8.24992 4.5ZM6.00003 6H6.50003H7.50003C7.77618 6 8.00003 6.22386 8.00003 6.5V10H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V10H6.50003H7.00003V7H6.50003H6.00003V6Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`InfoIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default InfoIcon;
