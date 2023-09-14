import styled from "styled-components";

const LabelInputStyleWrapper = styled.div`
  input {
    height: 60px;
    width: 100%;
    padding: 8px 21px;
    border: 2px solid rgba(255, 255, 255, 0.15);
    box-sizing: border-box;
    background: Transparent;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 45px;
    color: rgba(255, 255, 255, 0.9) !important;
    margin-bottom: 23px;
    border-radius: 0;

    &:focus {
      outline: 0 !important;
      box-shadow: none;
    }
  }

  label {
    font-family: "Russo One";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 45px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export default LabelInputStyleWrapper;
