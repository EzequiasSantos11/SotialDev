import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;
    .wrapper{
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 90%;
    border-radius: 10px;
    background: var(--background-secondary);
    img{
      height: 160px;
      width: 100%;
    }
    .userInfos{
      display: flex;
      flex-direction: column;
      width: 100%;
      .photoprofile{
        display: flex;
        width: 152px;
        height: 152px;
        margin: 0 auto;
        margin-top: -80px;
        position: relative;
        img{
          height: 152px;
          width: 152px;
          border-radius: 50%;
        }
        span{
          width: 50%;
          text-align: center;
          left: 0;
          right:0;
          margin: 0 auto;
          bottom: 10px;
          font-size: 10px;
          color: #F4F4F4;
          position: absolute;
        }
      }
      form{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(195px, 1fr));
        width: 45%;
        margin: 0 auto;
        margin-top: 24px;
        gap: 20px;
        .input{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
          position: relative;
          height: 54px;
          input{
            width: 100%;
            border: none;
            font-size: 14px;
            border-bottom: 1px solid #F4F4F4;
          }
          label{
            font-size: 16px;
            span{
              font-size: 14px;
              color: #B0B0B0;
            }
          }
        }
      }
    }
  }
`;