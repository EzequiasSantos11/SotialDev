import styled from "styled-components";


export const Container = styled.div`
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
`;