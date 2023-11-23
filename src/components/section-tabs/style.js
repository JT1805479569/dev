import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  .item {
    width: 120px;
    line-height: 30px;
    background-color: #ffffff;
    margin: 0 10px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    color: black;
    &:hover {
      cursor: pointer;
    }
    &:last-child {
      margin-right: 0;
    }
    &.active {
      color: #fff;
      background-color: skyblue;
    }
  }
`;
