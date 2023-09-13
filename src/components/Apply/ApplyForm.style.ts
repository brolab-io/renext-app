import styled from "styled-components";

const ApplyFormWrapperStyle = styled.div`
  h3 {
    font-size: 22px;
    line-height: 45px;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: #ffffff;
  }

  p {
    line-height: 45px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 18px;
  }

  .btn_wrapper {
    width: 100%;
    height: 60px;
  }

  .kyc_user_form {
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
      color: rgba(255, 255, 255, 0.5);
      margin-bottom: 23px;
      border-radius: 2px;
      transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;

      &:focus {
        outline: 0 !important;
        box-shadow: none;
        border: 2px solid rgba(255, 255, 255, 0.5);
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
  }
  .kyc_trems_condition {
    position: relative;
    margin-bottom: 28px;
    margin-top: 7px;

    .checkmark {
      position: absolute;
      top: 50%;
      left: 0;
      height: 18px;
      width: 18px;
      background-color: transparent;
      border-radius: 50%;
      font-size: 10px;
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-sizing: border-box;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 0;
      cursor: pointer;

      svg {
        transition: all 0.4s;
        display: none;
      }
    }

    input {
      position: absolute;
      opacity: 0;
      left: 0;
      top: 50%;
      cursor: pointer;
      width: 18px;
      height: 18px;
      margin-bottom: 0;
      transform: translateY(-50%);
      cursor: pointer;
    }

    span {
      display: block;
      padding-left: 27px;
      a {
        margin: 0 7px;
        display: inline-block;
      }
    }

    &.active {
      .checkmark {
        background: #6d4afe;
        color: #ffffff;
        border: none;
        svg {
          display: block;
        }
      }
    }
  }

  .custom_label {
    font-family: "Russo One";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 45px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
  }

  .kyc_radio_sect {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .kyc_radio_btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(30, 31, 53, 0.8);
    height: 60px;
    max-width: 570px;
    width: 100%;
    padding: 8px 20px;

    position: relative;
    cursor: pointer;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    label {
      display: block;
      position: relative;
      padding-left: 32px;
      margin-bottom: 0px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      font-family: Russo One;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 45px;
      text-transform: uppercase;
    }

    .kyc_icon {
      transition: all 0.4s;
      opacity: 0.3;
    }

    .checkmark {
      position: absolute;
      top: 50%;
      left: -7px;
      height: 18px;
      width: 18px;
      font-size: 10px;
      background-color: transparent;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-sizing: border-box;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        transition: all 0.4s;
        display: none;
      }
    }

    &.active {
      color: #ffffff;
      .kyc_icon {
        opacity: 1;
      }
      .checkmark {
        background: #6d4afe;
        color: #ffffff;
        border: none;
        svg {
          display: block;
        }
      }
    }
  }

  select {
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
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 23px;
  }

  .kyc_country_dropdown_sect {
    position: relative;

    .kyc_country_dropbox {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 60px;
      max-width: 570px;
      width: 100%;
      border: 2px solid rgba(255, 255, 255, 0.15);
      box-sizing: border-box;
      padding: 17px 20px;
      margin-bottom: 35px;
      position: relative;
      cursor: pointer;
      margin-top: 17px;

      h4 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 45px;
        margin-left: 14px;
        margin-bottom: 0px;
        color: rgba(255, 255, 255, 0.7);
      }
    }

    &.active {
      transition: all 0.3s;
      .kyc_country_dropList {
        top: 60px;
        display: block;
      }
    }
  }

  .w-md-editor-toolbar {
    svg {
      height: 16px;
      width: 16px;
    }
  }

  textarea::-moz-selection {
    background: #6d4afe80 !important;
  }

  textarea::selection {
    background: #6d4afe80 !important;
  }

  .kyc_country_dropList {
    position: absolute;
    width: 100%;
    top: 50px;
    left: 0px;
    z-index: 1;
    display: none;

    ul {
      background: rgba(30, 31, 53, 1);
      max-width: 570px;
      width: 100%;

      li {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 45px;
        color: rgba(255, 255, 255, 0.7);
        height: 42px;
        padding: 0px 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        transition: all 0.4s;

        &:hover {
          color: #ffffff;
        }
      }
    }
  }

  @media (max-width: 991px) {
  }
  @media only screen and (max-width: 575px) {
    h3 {
      font-size: 19px;
    }
    p {
      font-size: 14px;
      line-height: 24px;
    }
  }
  @media (max-width: 320px) {
  }
`;

export default ApplyFormWrapperStyle;
