import * as React from 'react';
import { BaseIconProps } from './types';

interface QuotationIconProps extends BaseIconProps {
  size?: '25';
  type?: 'outline';
}

export const QuotationIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: QuotationIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M.5 14.5v-10h10v10l-2 6h-6l2-6h-4zM14.5 14.5v-10h10v10l-2 6h-6l2-6h-4z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(
    `QuotationIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default QuotationIcon;
