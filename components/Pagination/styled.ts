import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-transform: capitalize;
  }
`

export const Info = styled.div`
  span {
    font-size: 1rem;
    text-transform: uppercase;
    display: block;
    color: rgba(0, 0, 0, .5);
    margin-bottom: 0.5rem;
  }
`