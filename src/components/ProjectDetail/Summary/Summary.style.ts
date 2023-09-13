import styled from "styled-components";
const SummaryStyleWrapper = styled.div`
  padding-bottom: 55px;
  .widget_title {
    margin-bottom: 15px;
  }

  .description {
    position: relative;
    &::before {
      position: absolute;
      background: rgba(255, 255, 255, 0.05);
      height: 50px;
      width: 100%;
      left: 0px;
      bottom: 0px;
      content: "";
      z-index: 9;
    }
  }

  .vedio_player {
    position: relative;
    span {
      color: #f82552;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
      height: 70px;
      width: 70px;
      background: #ffffff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
`;

export default SummaryStyleWrapper;
