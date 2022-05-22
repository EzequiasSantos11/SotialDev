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
      padding: 0 10px;
      position: relative;
      .infoPeople{
        display: flex;
        align-items: center;
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
  .message{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 60%;
    padding: 20px 10px;
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
    .people{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #F4F4F4;
      border-radius: 10px;
      margin: 5px 0;
      height: 50px;
      width: 40%;
      padding: 0 10px;
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
    .user{
      align-items: flex-end;
    }
    #off{display: none}
  }
`;
