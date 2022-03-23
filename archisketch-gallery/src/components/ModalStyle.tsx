import styled from "styled-components";


export const ModalWrapper = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
`;

export const ModalItem = styled.div`
  position: relative;
  height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button<{ way: string }>`
  position: absolute;
  top: 50%;
  ${props => (props.way === 'prev' ? 'left:24px' : 'right:24px')};
  transform: translate(0px, -50%);
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  transition: all 0.32s ease 0s;
  cursor: pointer;
  border: none;
  box-sizing: border-box;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const DetailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const RightBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translate(0px, -50%);
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  background: rgb(243, 244, 244);
  transition: all 0.32s ease 0s;
  cursor: pointer;
  border: solid 1px lightslategray;
`;

export const LeftBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translate(0px, -50%);
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  background: rgb(243, 244, 244);
  transition: all 0.32s ease 0s;
  cursor: pointer;
  border: solid 1px lightslategray;
`;

