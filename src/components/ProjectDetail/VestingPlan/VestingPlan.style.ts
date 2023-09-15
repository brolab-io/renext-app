import styled from "styled-components";

const VestingPlanStyleWrapper = styled.div`
  background: rgba(30, 31, 53, 0.8);
  padding: 45px 50px;
  margin-bottom: 55px;
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

  .schedule_table {
    table {
      width: 100%;
      .table-header {
        background: #1e1f35;
        text-transform: uppercase;
        font-family: "Russo One", sans-serif;

        th {
          background: #1e1f35;
          font-weight: 400;
          padding: 17px 30px;
        }

        /* &:nth-child(2) {
          padding-left: 45px;
        } */
      }
      td {
        position: relative;
        padding: 17px 30px;
        border-bottom: 1px solid #2e2f3c;
      }
    }
  }


  @media only screen and (max-width: 1199px) {
    .schedule_table {
      table {
        .table-header {
          td {
            padding: 17px 15px;
            font-size: 15px;
          }

          th {
            padding: 17px 20px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .schedule_table {
      table {
        display: block;
        overflow-x: auto;

        td {
          font-size: 14px;
        }
      }
    }
  }
`

export default VestingPlanStyleWrapper;