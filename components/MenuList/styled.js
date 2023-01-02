import styled, { css } from 'styled-components'

export const List = styled.ul`
  list-style: none;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 1rem;

  ${({ spacer }) => spacer && css`
    &:after {
      content: '';
      width: 100%;
      height: 1px;
      background-color: rgba(0, 0, 0, .055);
      display: block;
    }
  `}

  a {
    text-transform: capitalize;
  }
`