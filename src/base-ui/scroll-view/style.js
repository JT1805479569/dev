import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  overflow: hidden;
  position: relative;
  margin: 0 10px;
  .scroll-content {
    display: flex;
    transition: transform 250ms ease;
  }
`;

export const OutWrapper = styled.div`
  display: flex;
  align-items: center;
  .direction-button {
    display: flex;
    padding: 0;
    width: 26px;
    height: 24px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(0 0 0/0.3);
    box-sizing: border-box;
    border-radius: 50%;
    cursor: pointer;
  }
`;
