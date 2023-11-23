import styled from "styled-components";

export const RightWrapper = styled.div`
  /* position: relative; */
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.text.primaryColor};
  padding-right: 50px;
  box-sizing: border-box;
  .btns {
    display: flex;
    width: 180px;
    padding: 10px;
    box-sizing: border-box;
    span {
      flex: 1;
      cursor: pointer;
    }
  }
  .profile {
    position: relative;
    display: flex;
    align-items: center;
    background: transparent;
    height: 50px;
    width: 100px;

    cursor: pointer;
    margin: 0;
    text-align: inherit;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 30px;
    transition: box-shadow 0.2s cubic-bezier(0.2, 0, 0, 1);
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }
    svg {
      flex: 1;
    }
    .panel {
      position: absolute;
      right: 0;
      top: 65px;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.18);
      color: #666;
      .top,
      .bottom {
        padding: 10px 0;
        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          cursor: pointer;
          &:hover {
            background-color: #dddddd;
          }
        }
      }
      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;
