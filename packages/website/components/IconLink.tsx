import { styled } from '@modulz/design-system';

export const IconLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  borderRadius: '$1',
  outline: 0,
  padding: '0 $1',
  margin: '0 -$1',
  '& + &': {
    marginTop: '$2',
  },
  '&:hover': {
    textDecoration: 'underline',
  },
  '&:focus': {
    boxShadow: '0 0 0 1px',
    textDecoration: 'none',
  },
});
