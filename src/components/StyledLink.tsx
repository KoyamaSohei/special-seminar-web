import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  padding: 8px 16px;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  &:hover {
    color: #FFF;
    background: gray;
  }
  &:hover > svg > path {
    fill: gray;
  }
`

export default StyledLink;