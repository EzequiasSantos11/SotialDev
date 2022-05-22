import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 9999;
  font-weight: 400;
  .background{
    display: flex;
    height: 100%;
    width: 100%;
    position: absolute;
    
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  h1{
    font-size: 48px;
  }
  .singIn{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 38%;
    background: rgba(18, 31, 38, 0.9);
    right: 0;
    position: absolute;
    .sotialLogin{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      gap: 10px;
      margin-top: 36px;
      margin-bottom: 20px;
      .link{
        display: flex;
        width: 100%;
        a{
          display: flex;
          width: 100%;
          height: 30px;
          cursor: pointer;
          button{
            svg{
              margin-right: 10px;
              height: 14px;
              width: 14px;
            }
          }
        }
      }
    }
    span{
      text-transform: uppercase;
      font-size: 14px;
      margin-bottom: 10px;
    }
    form{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .input{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 80%;
        margin: 5px auto;
        position: relative;
        height: 54px;
        input{
          width: 100%;
          border: none;
          font-size: 18px;
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
      .nameInputs{
        display: flex;
        flex-direction: row;
        gap: 10px;
        .firstName{
          width: 100%;
        }
        .lastName{
          width: 100%;
        }
      }
      a{
        width: 80%;
        height: 30px;
        font-size: 16px;
      }
      p{
        font-size: 12px;
        margin-top: 10px;
      }
    }
  }
`;