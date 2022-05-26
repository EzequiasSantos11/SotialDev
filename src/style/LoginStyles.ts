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
    top: 0;
    
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
    width: 50%;
    background: rgba(18, 31, 38, 0.9);
    right: 0;
    position: absolute;
    .logo{
      display: flex;
      align-items: flex-end;
      img{
        height: 100px;
        width: 100px;
      }
    }
    .form{
      display: flex;
      align-items: center;
      width: 80%;
      margin-top: 30px;
      button{
        display: flex;
        width: 50%;
        height: 50px;
        cursor: pointer;
        margin: 20px;
        svg{
          margin-right: 10px;
          height: 14px;
          width: 14px;
        }
      }
    }
    .separator{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;
      position: relative;
      margin: 0 auto;
      &::after{
        content: "";
        background: white;
        width: 45%;
        height: 1px;
        right: 0;
        margin: 0 auto;
        position: absolute;
      }
      &::before{
        content: "";
        background: white;
        width: 45%;
        left: 0;
        height: 1px;
        margin: 0 auto;
        position: absolute;
      }
    }
    
  }
  a{
    width: 80%;
    height: 30px;
    font-size: 16px;
  }
  .createNew{
    margin-top: 50px;
    font-size: 12px;
    a{
      font-size: 12px;
      margin-left: 2px;
      color: #959;
    }
  }
`;