import * as React from 'react';
import { BaseIconProps } from './types';

interface NoLinkAngledIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const NoLinkAngledIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: NoLinkAngledIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2.949 7.101l.043-.043.619-.619a.5.5 0 11.707.708l-.619.618c-.427.427-.59.593-.694.747-.46.676-.469 1.532-.051 2.167.094.144.245.298.657.71.412.412.566.563.71.657.635.418 1.49.409 2.167-.051.154-.105.32-.267.747-.694l.618-.619a.5.5 0 11.707.707l-.618.619-.043.043c-.37.37-.606.606-.85.771-.993.675-2.287.71-3.277.06-.241-.159-.473-.39-.824-.741l-.044-.045-.045-.044c-.352-.352-.583-.583-.741-.824-.65-.99-.616-2.284.06-3.278.165-.243.401-.48.771-.849zm5.563-4.096c-.155.105-.32.267-.747.694l-.619.62a.5.5 0 01-.707-.708l.619-.619.043-.043c.37-.37.606-.606.849-.77.994-.676 2.288-.711 3.278-.06.241.158.472.389.823.74a14.487 14.487 0 01.09.09c.351.35.582.582.74.823.65.99.616 2.284-.06 3.278-.164.243-.4.48-.77.85-.015.013-.029.028-.043.042l-.62.619a.5.5 0 11-.706-.707l.618-.619c.427-.427.59-.593.695-.747.46-.676.468-1.531.05-2.167-.094-.144-.244-.298-.656-.71-.412-.412-.566-.562-.71-.657-.636-.417-1.49-.408-2.167.051z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`NoLinkAngledIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default NoLinkAngledIcon;
