import styled from "styled-components";


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  width: 100%;
  padding: 0 40px;
  margin-bottom: 20px;
  background: var(--background-secondary);
  .search{
    display: flex;
    width: 90%;
    max-width: 400px;
    margin: 0 20px;
    position: relative;
    label{
      display: flex;
      align-items: center;
      position: absolute;
      font-size: 14px;
      svg{
        margin-right: 5px;
      }
    }
    input{
      border: none;
      height: 100%;
      width: 100%;
      margin-top: 10px;
      border-bottom: 1px solid #F4F4F4;
    }

  }
  .navInfo{
    display: flex;
    align-items: center;
  }
  nav{
    ul{
      display: flex;
      align-items: center;
      gap: 20px;
      li,a{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }
  }
  .userInfo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    cursor: pointer;
    position: relative;
    img{
      height: 30px;
      width: 30px;
    }
    svg{
      fill: #F4F4F4;
      position: absolute;
      right: -6px;
      bottom: 5px;
      height: 20px;
      width: 20px;
    }
    p{
      font-size: 12px;
    }
    .optionsUser{
      display: none;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-around;
      background: #F4F4F4;
      height: 70px;
      width: 100px;
      border-radius: 10px;
      padding: 10px;
      top: -40px;
      opacity: 0;
      transition: all .5s;
      position: absolute;
      a{
        color: #000;
        font-size: 14px;
      }
    }
    .open{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-around;
      background: #F4F4F4;
      height: 70px;
      width: 120px;
      border-radius: 10px;
      padding: 10px;
      top: 55px;
      right: 5px;
      opacity: 1;
      transition: all .5s;
      position: absolute;
      a{
        color: #000;
        font-size: 14px;
      }
    }
  }
`;