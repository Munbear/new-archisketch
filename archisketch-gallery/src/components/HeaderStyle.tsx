import styled from "styled-components";

export const HeaderWrapper = styled.header`
  justify-content: space-between;
  position: relative;
  width: 100vw;
  min-width: 1024px;
  padding: 8px;
  height: 48px;
  background: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(235, 235, 235, 0.8);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const BackBtn = styled.button`
  position: relative;
  box-sizing: border-box;
  height: 32px;
  display: flex;
  padding: 0px 10px;
  border: none;
  border-radius: 4px;
  appearance: none;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  font-size: 12px;
  fill: rgb(75, 75, 75);
  color: rgb(75, 75, 75);
  background: rgba(238, 238, 238, 0.8);
  transition: background-color 0.16s ease 0s, color 0.16s ease 0s;
  cursor: pointer;
`;


export const DownloadBtn = styled.div`
  right: 50px;
  display: flex;
  justify-content: space-around;
  height: 32px;
  padding: 5px;
  border-radius: 4px;
  justify-content: center;
  background: rgb(243, 244, 244);
  cursor: pointer;
  border: solid 1px lightgray;
  text-align: center;
`;

export const HeaderGallery = styled.div`
  font-size: 20px;
    font-weight: bold;
`;