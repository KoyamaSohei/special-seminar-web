import styled from 'styled-components'

export const RecordListWrapper = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  margin-bottom: 96px;
`

export const RecordList = styled.ul`
  display: grid;
  padding-inline-start: 0;
  grid-template-columns: 2fr 1fr 1fr 2fr 1fr;
  grid-template-rows: ${({ length }: { length: number }) =>
    Array.from({ length })
      .map(() => '30px')
      .join(' ')};
  grid-gap: 12px 12px;
  & > button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    appearance: none;
    &:hover {
      background: gray;
      & > svg > path {
        fill: white;
      }
    }
    & > svg {
      width: 10px;
      height: 10px;
    }
  }
`

export const AddRecord = styled.ul`
  display: grid;
  padding-inline-start: 0;
  grid-template-columns: 2fr 1fr 1fr 2fr 1fr;
  grid-gap: 12px 12px;
  & > input[type="number"] {
    max-width: 150.29px;
  }
`