import styled from "styled-components";



export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .wrapper{
    display: flex;
  }
`;


export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 68%;
  height: 100%;
  
  .body{
    display: flex;
    flex-direction: column;
    height: 82vh;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    background: var(--background-secondary);
  }
`;