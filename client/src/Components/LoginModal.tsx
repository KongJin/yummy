import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modal, signUp } from "../state/state";
import Signin from "./Signin";
import Signup from "./Signup";

interface Modal {
  modals: boolean;
}
const ModalContiaer = styled.div<Modal>`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.modals ? "block" : "none")};
  /* border: 10px solid red; */
`;

const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  z-index: 100;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border: 10px solid black;
  /* backdrop-filter: blur(4px); */
`;

const ModalView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 360px;
  background-color: white;
  border-radius: 10px;
  height: 432px;
  z-index: 10;
`;

const CloseButton = styled.div`
  font-size: 15px;
  justify-content: flex-end;
  display: flex;
  width: 100%;

  cursor: pointer;
  z-index: 9999;
`;
const Icon = styled.i`
  padding: 10px;
`;

const LoginModal = () => {
  const [modalValues, setModal] = useRecoilState(modal);
  const [signUpState, setSignUpState] = useRecoilState(signUp);

  const test = () => {
    setModal(!modalValues);
    setSignUpState(false);
  };

  return (
    <ModalContiaer modals={modalValues}>
      <ModalBackdrop>
        <ModalView>
          <CloseButton>
            <Icon onClick={test} className="fa-solid fa-xmark"></Icon>
          </CloseButton>
          {signUpState ? <Signup /> : <Signin />}
        </ModalView>
      </ModalBackdrop>
    </ModalContiaer>
  );
};

export default LoginModal;
