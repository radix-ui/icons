import { styled } from '@modulz/design-system';

export const IconLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  '& + &': {
    marginTop: '$2',
  },
  '&:hover': {
    textDecoration: 'underline',
  },
});
