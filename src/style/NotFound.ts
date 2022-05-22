import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  background: var(--background-secondary);
  z-index: 9999;
  h1{
    margin-bottom: 40px;
    font-size: 2rem;
  }
  a{
    width: 20%;
    height: 50px;
    button{
      font-size: 20px;
      font-weight: 500;
    }
  }
`;