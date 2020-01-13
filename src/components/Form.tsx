import styled from 'styled-components'

export const Form = styled.form`
  width: 420px;
  text-align: center;
  padding: 0 26px;
  margin:auto;
  & > input {
    color: #666;
    display: block;
    width: 100%;
    line-height: 30px;
    margin-bottom: 12px;
    border: 1px solid gray;
    border-radius: 3px;
    height: 60px;
    box-sizing: border-box;
    user-select: auto;
    font-size: 14px;
    padding: 0 6px 0 12px;
    outline: none;
    &:focus {
      border: 1px solid black;
    }
  }
  &.invalid > input {
    border-color: black;
  }
  & > button {
    display: block;
    width: 100%;
    line-height: 30px;
    font-size: 14px;
    padding: 0 6px;
    background-color: white;
    color: black;
    height: 60px;
    margin-top: 24px;
    border: 1px solid gray;
    &:hover {
      color: white;
      background-color: gray;
      border: 1px solid black;
    }
    &:active {
      transform: scale(1.02);
    }
  }
  & > div {
    margin-top: 12px;
    & > a {
      display: inline-block;
      cursor: pointer;
    }
  }
`

export const Title = styled.div`
  font-size: 48px;
  text-align: left;
  line-height: 72px;
`

export const ErrorDialog = styled.div`
  text-align: left;
  color: #f24822;
  margin-top: 60px;
  margin-bottom: 12px;
  line-height: 24px;
  height: 24px;
`