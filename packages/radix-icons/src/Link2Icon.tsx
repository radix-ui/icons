import * as React from 'react';
import { IconProps } from './types';

export const Link2Icon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.42095 7.48753L3.37804 7.53044C3.00839 7.89997 2.77185 8.13644 2.6067 8.37954C1.93147 9.37352 1.89662 10.6672 2.54681 11.6573C2.70538 11.8987 2.93649 12.1297 3.28792 12.481L3.33256 12.5257L3.37719 12.5703C3.72849 12.9217 3.9595 13.1529 4.20096 13.3114C5.19101 13.9616 6.48471 13.9268 7.47869 13.2515C7.72179 13.0864 7.95826 12.8498 8.32779 12.4802L8.3707 12.4373L8.98942 11.8186C9.18468 11.6233 9.18468 11.3067 8.98942 11.1115C8.79416 10.9162 8.47757 10.9162 8.28231 11.1115L7.66359 11.7302C7.23659 12.1572 7.07112 12.3195 6.91676 12.4243C6.2404 12.8838 5.38524 12.8928 4.74989 12.4756C4.60563 12.3808 4.45156 12.2304 4.03967 11.8186C3.62778 11.4067 3.47742 11.2526 3.38267 11.1083C2.96543 10.473 2.97443 9.61783 3.43389 8.94147C3.53876 8.78711 3.70106 8.62164 4.12806 8.19464L4.74678 7.57592C4.94204 7.38066 4.94204 7.06407 4.74678 6.86881C4.55152 6.67355 4.23493 6.67355 4.03967 6.86881L3.42095 7.48753ZM8.19392 4.12877C8.62092 3.70177 8.78639 3.53947 8.94076 3.43461C9.61711 2.97514 10.4723 2.96614 11.1076 3.38339C11.2519 3.47813 11.406 3.6285 11.8178 4.04039C12.2297 4.45227 12.3801 4.60634 12.4748 4.75061C12.8921 5.38595 12.8831 6.24112 12.4236 6.91747C12.3188 7.07184 12.1565 7.23731 11.7295 7.66431L11.1107 8.28303C10.9155 8.47829 10.9155 8.79487 11.1107 8.99013C11.306 9.18539 11.6226 9.18539 11.8178 8.99013L12.4366 8.37141L12.4795 8.32851C12.8491 7.95897 13.0857 7.7225 13.2508 7.4794C13.926 6.48543 13.9609 5.19172 13.3107 4.20167C13.1521 3.96022 12.921 3.72921 12.5696 3.37791L12.525 3.33328L12.4803 3.28863C12.129 2.9372 11.898 2.70609 11.6566 2.54752C10.6665 1.89733 9.3728 1.93219 8.37883 2.60742C8.13573 2.77256 7.89926 3.0091 7.52972 3.37875L7.48682 3.42167L6.8681 4.04038C6.67284 4.23565 6.67284 4.55223 6.8681 4.74749C7.06336 4.94275 7.37994 4.94275 7.5752 4.74749L8.19392 4.12877ZM5.8079 9.3432C5.61264 9.53847 5.61264 9.85505 5.8079 10.0503C6.00316 10.2456 6.31975 10.2456 6.51501 10.0503L10.0505 6.51478C10.2458 6.31952 10.2458 6.00293 10.0505 5.80767C9.85528 5.61241 9.5387 5.61241 9.34344 5.80767L5.8079 9.3432Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Link2Icon;
