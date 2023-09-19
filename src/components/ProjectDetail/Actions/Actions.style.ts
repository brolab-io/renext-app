import styled from 'styled-components';

const ActionsStyleWrapper = styled.div`
    background: rgba(30, 31, 53, 0.8);
    padding: 45px 50px;
    margin-bottom: 30px;
    .widget_title {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        column-gap: 7px;
        font-size: 22px;
        img {
          height: 15px;
        }
      }
    .form-group-area {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input {
          border: 1px solid #313245;
          background: transparent;
          padding: 16px 20px;
          color: rgba(255, 255, 255, 0.7);
        }
        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        /* Firefox */
        input[type=number] {
            -moz-appearance: textfield;
        }
       
      }
    .project-form {
        h4 {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 12px;
      }
    }
    .btn_wrapper {
        height: 60px;
      }

      .info_list {
        margin-top: 30px;
        li {
          display: flex;
          justify-content: space-between;
    
          .token_info_value {
            color: #ffffff;
          }
        }
        li + li {
          margin-top: 15px;
        }
      }
    
`;

export default ActionsStyleWrapper;