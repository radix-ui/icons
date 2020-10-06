import * as React from 'react';
import { IconProps } from './types';

export const CaretRightIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M6.18192 4.18182C6.35766 4.00609 6.64258 4.00609 6.81832 4.18182L9.81832 7.18182C9.90271 7.26621 9.95012 7.38067 9.95012 7.50002C9.95012 7.61937 9.90271 7.73383 9.81832 7.81822L6.81832 10.8182C6.64258 10.994 6.35766 10.994 6.18192 10.8182C6.00618 10.6425 6.00618 10.3576 6.18192 10.1818L8.86372 7.50002L6.18192 4.81822C6.00618 4.64248 6.00618 4.35756 6.18192 4.18182Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CaretRightIcon;
