import styled, { keyframes } from "styled-components";


export const AnimaSearch = keyframes`
  0%{
   transform: translateY(0);
  }100%{
    transform: translateY(-15px);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 18px;
  .search{
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 19px;
    margin-bottom: 5px;
    label{
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      transition: all .4s ease;
    }
    
    input{
      width: 100%;
      border: none;
      padding-left: 1.2rem;
      padding-bottom: 5px;
      border-bottom: 1px solid #f4f4f4;
      font-size: 14px;
      &::-webkit-input-placeholder{ 
        opacity: 1;
        font-size: 14px;
        color: #f4f4f4;
      }
    }
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
    .infoPeople{
      display: flex;
      align-items: center;
      img{
        margin-right: 5px;
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
    }
  }
`;