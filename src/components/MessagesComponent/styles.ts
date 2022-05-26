import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  height: 100%;
  .wrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 33%;
    padding: 10px;
    border-right: 1px solid #F4F4F4;
    strong{
      display: flex;
      width: 100%;
      justify-content: space-between;
      font-size: 14px;
      font-weight: 400;
      font-family: 'Poppins', sans-serif;
    }
    .people{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #F4F4F4;
      border-radius: 10px;
      margin: 5px 0;
      height: 50px;
      padding: 0 5px;
      position: relative;
      .infoPeople{
        display: flex;
        align-items: center;
        height: 100%;
        img{
          margin-right: 5px;
          height: 80%;
        }
      }
      .textPeople{

        h2{
          font-size: 14px;
        }
        p{
          font-size: 10px;
          color: #8E8E8E;
        }
      }
      button{
        border: none;
        font-size: 8px;
        position: absolute;
        right: 22px;
        top: 8px;
      }
    }
    #on{
      background: #FFF;
      .textPeople{
        h2{
          color: #182328;
          font-weight: 400;
          font-family: 'Poppins', sans-serif;
        }
        p{
          color: #182328;
          font-weight: 400;
          font-family: 'Poppins', sans-serif;
        }
      }
      button{
        color: #182328;  
        font-weight: 400;
        font-family: 'Poppins', sans-serif;      
      }
    }
  }
  .messagesWrapper{
    display: flex;
    flex-direction: column;
    width: 70%;
    position: relative;
    .message{
      display: flex;
      flex-direction: column;
      height: 76%;
      overflow-y:  scroll;
      padding-right: 5px;
      margin: 10px;
      z-index: 1;
      &::-webkit-scrollbar{
        position: absolute;
        background-color: #f4f4f4;
        top: 0;
        width: 10px;
        border-radius: 20px;
      }
      ::-webkit-scrollbar-thumb{
        background: #121f26;
        border-radius: 20px;
        width: 5px;
        height: 10px;
      }
      -webkit-font-smoothing: antialiased;
      overscroll-behavior-y: none;
      .people{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #F4F4F4;
        margin: 5px 0;
        height: 50px;
        width: 45%;
        padding: 0 10px;
        position: relative;
        border-radius: 10px;
        border-top-left-radius: 0;
        flex-shrink: 0;
        .infoPeople{
          display: flex;
          align-items: center;
          height: 100%;
          img{
            margin-right: 5px;
            height: 80%;
          }
        }
        .textPeople{
  
          h2{
            font-size: 14px;
          }
          p{
            font-size: 10px;
            color: #8E8E8E;
          }
        }
        button{
          border: none;
          font-size: 8px;
          position: absolute;
          right: 22px;
          top: 8px;
        }
        @media (max-width: 1023px) {
          width: 50%;
        }
      }
      .user{
        margin-left: 55%;
        border-top-left-radius: 10px;
        border-top-right-radius: 0;
        @media (max-width: 1023px) {
          margin-left: 50%;
        }
      }
      #off{display: none}
    }
    .newTextMessage{
      display: flex;
      align-items: flex-end;
      height: 20%;
      width: 100%;
      left: 0;
      right: 0;
      bottom: 0;
      padding-bottom: 5px;
      padding-right: 5px;
      position: absolute;
      border-top: 1px solid #F4F4F4;
      textarea{
        width: 70%;
        height: 90%;
        margin: 0;
        padding: 0 20px;
        border: none;
        &::-webkit-input-placeholder{
          opacity: 1;
          font-size: 14px;
          color: #f4f4f4;
        }
        &::-webkit-scrollbar{
          display: none;
        }
      }
      .mideaMessage{
        display: flex;
        justify-content: space-between;
        gap: 10px;
        height: 30px;
        width: 45%;
        button{
          padding: 0 5px;
          svg{
            margin-right: 5px;
          }
        }
      }
    }
  }
`;
