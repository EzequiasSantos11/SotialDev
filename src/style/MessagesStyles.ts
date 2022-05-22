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

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 40%;
  max-width: 330px;
  border-radius: 10px;
  margin: 0 20px;
  background: var(--background-secondary);
  position: relative;
  .separator{
    display: flex;
    width: 100%;
    height: 1px;
    margin: 0 auto;
    background: #8E8E8E;
  }
  .banner{
    display: flex;
    width: 100%;
    margin-bottom: 94px;
    img{
      width: 100%;
      height: 73px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }
  .profile{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    img{
      height: 100px;
      width: 100px;
      border-radius: 50%;
    }
    h1{
      font-size: 14px;
    }
    p{
      font-size: 10px;
    }
  }
  .userInfos{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: 25px auto;
    gap: 5px;
    .information{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-size: 12px;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 69%;
  height: 100%;
  .body{
    display: flex;
    flex-direction: column;
    height: 814px;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 20px;
    background: var(--background-secondary);
    @media (max-width: 9999px) {
      height: 75vh;
    }
  }
`;