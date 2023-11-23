import styled from "@emotion/styled";

export const IndicatorWrapper = styled.div`
  > * {
    flex-shrink: 0;
  }
  .i-content {
    display: flex;
    position: relative;
    overflow: hidden;
    transition: transform 200ms ease;
  }
`;
