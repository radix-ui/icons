import React from 'react';
import { Text, styled } from '@modulz/design-system';
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
      {children}
      <TooltipPrimitive.Position side="top" sideOffset={20} {...positionProps}>
        <TooltipPrimitive.Content as={Content} aria-label={ariaLabel}>
          {label}
        </TooltipPrimitive.Content>
        {/* <TooltipPrimitive.Arrow style={{ ...tooltipStyles.arrow }} offset={10} /> */}
      </TooltipPrimitive.Position>
    </TooltipPrimitive>
  );
};

Tooltip.Trigger = TooltipPrimitive.Trigger;

const Content = styled(Text, {
  ...tooltipStyles.root,
  backgroundColor: '$hiContrast',
  fontSize: '$1',
  color: '$loContrast',
  borderRadius: '$1',
  padding: '$1 $2',
});
