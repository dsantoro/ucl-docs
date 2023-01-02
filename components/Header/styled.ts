import styled from 'styled-components'

export const Header = styled.header`
  height: 70px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, .05);
  margin-bottom: 1rem;
  padding: 0 1rem;
  flex-direction: column;
`

export const Logo = styled.h1`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.5rem;

  span {
    font-weight: 700;
  }
`

export const Description = styled.h2`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-weight: 400;
  font-size: .8rem;
  color: rgba(0, 0, 0, .5);
`