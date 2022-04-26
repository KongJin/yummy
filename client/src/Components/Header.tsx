import { useCallback, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import netlify from '../img/netlify-logo.png';
import { useSetRecoilState } from 'recoil';
import { modal } from '../state/state';

const Container = styled.div`
  display: flex;
  background-color: #cae5f0;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;

const RightCon2 = styled.div`
  display: flex;
  right: 10px;
`;

const Div = styled.div`
  padding: 0px 10px;
  cursor: pointer;
`;

const Img = styled.img`
  padding: 0px 10px;
  width: 130px;
`;

const Button = styled.button`
  padding: 0px 10px;
`;
export const Header = () => {
  const modals = useSetRecoilState(modal);
  return (
    <Container>
      <Link to="/">
        {' '}
        <Img src={netlify} />
      </Link>

      <RightCon2>
        {/* <Div>
          <Link to="/mypage">마이페이지</Link>
        </Div> */}
        <Div onClick={() => modals((prev: boolean) => !prev)}>로그인</Div>
        {/* <Div>
          <Link to="/upload">사진올리기</Link>
        </Div> */}
      </RightCon2>
    </Container>
  );
};
