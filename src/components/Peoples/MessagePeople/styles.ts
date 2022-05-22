import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
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
 .messagePeople{
    display: flex;
    flex-direction: column;
    max-height: 470px;
    width: 96%;
    border: 1px solid #f4f4f4;
    border-radius: 10px;
    margin: 10px auto;
    .people{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      height: 50px;
      width: 100%;
      padding: 10px;

      .infoPeople{
        display: flex;
        align-items: center;
        img{
          height: 100%;
          margin-right: 10px;
        }
        .textPeople{
          h2{
            font-size: 14px;
          }
          p{
            font-size: 10px;
            color: #8e8e8e;
          }
        }
      }
      button{
        border: none;
      }
    }
    .message{
      display: flex;
      flex-direction: column;
      margin: 20px 0;
      p{
        font-size: 14px;
        color: #f4f4f4;
      }
      img{
        height: 90%;
        width: 40%;
        margin: 10px;
      }
    }
    .allReactions{
      display: flex;
      align-items: center;
      gap: 20px;
      padding-left: 10px;
      margin-bottom: 2px;
      span{
        display: flex;
        align-items: center;
        font-size: 8px;
        svg{
          height:100%;
          margin-right: 2px;
        }
      }

    }
    .newReaction{
      display: flex;
      align-items: center;
      height: 24px;
      gap: 20px;
      width: 100%;
      padding-left: 10px;
      border-top: 1px solid #f4f4f4;
      button{
        display: flex;
        align-items: center;
        font-size: 12px;
        border: none;
        margin: 10px 0;
        cursor: pointer;
        svg{
          height:100%;
          margin-right: 5px;
        }
      }
    }
  }
`;