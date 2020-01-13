import styled from 'styled-components'

export const DomainListWrapper = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  margin-bottom: 96px;
`


export const DomainList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px 24px;
  & > li {
    display: block;
    text-align: center;
    line-height: 50px;
    height: 50px;
    padding: 24px;
    & > a {
      padding: 8px 16px;
      margin: 0;
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      border-radius: 5px;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(183, 187, 189);
      & > button {
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;
        background-color: transparent;
        border: none;
        outline: none;
        appearance: none;
        & > svg {
          width: 10px;
          height: 10px;
          &:hover > path {
            fill: white;
          }
        }
      }
    }
  }
`