import styled from "styled-components";

export const LongforItemWrapper = styled.div`
  flex-shrink: 0;
  .inner {
    position: relative;
    padding: 8px;
    overflow: hidden;
  }
  .cover {
    width: 100%;
    border-radius: 8px;
  }
  .bg-cover {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 40px;
    height: 30%;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 3%,
      rgba(0, 0, 0) 100%
    );
    border-radius: 8px;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 24px 32px;
    color: #fff;
    position: relative;
  }
  .city {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    position: absolute;
    top: -50px;
  }
  .price {
    font-size: 14px;
    margin-top: 5px;
    color: #fff;
    position: absolute;
    top: -33px;
  }
`;
