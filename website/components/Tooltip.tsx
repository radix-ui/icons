import React from 'react';
import { styled } from '@modulz/design-system';
import {
  Tooltip as TooltipPrimitive,
  TooltipProps as TooltipPrimitiveProps,
  TooltipContentProps,
  TooltipPositionProps,
  styles as tooltipStyles,
} from '@interop-ui/react-tooltip';

export type TooltipProps = { label: string } & TooltipPrimitiveProps & TooltipPositionProps & TooltipContentProps;

export const Tooltip = ({
  'aria-label': ariaLabel,
  children,
  label,
  isOpen,
  onIsOpenChange,
  ...positionProps
}: TooltipProps) => {
  return (
    <TooltipPrimitive isOpen={isOpen} onIsOpenChange={onIsOpenChange}>
      <TooltipPrimitive.Trigger as={IconTrigger}>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Position side="top" sideOffset={3} {...positionProps}>
        <TooltipPrimitive.Content as={Content} aria-label={ariaLabel}>
          {label}
        </TooltipPrimitive.Content>
        <TooltipPrimitive.Arrow style={{ ...tooltipStyles.arrow }} offset={10} />
      </TooltipPrimitive.Position>
    </TooltipPrimitive>
  );
};

const IconTrigger = styled('span', {
  display: 'block',
  padding: '$1',
  margin: '-$1',
  svg: {
    display: 'block',
  },
});

const Content = styled('div', {
  ...tooltipStyles.root,
  backgroundColor: '$hiContrast',
  fontSize: '$1',
  color: '$loContrast',
  borderRadius: '$1',
  padding: '$1 $2',
  maxWidth: 300,
});
