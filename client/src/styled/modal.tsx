import styled from 'styled-components';

export const SigninContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
`;
export const ImgLabel = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 100%;
  width: 120px;
  height: 120px;
  margin: 30px 0px;
  &:hover {
    div {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.4);
      color: white;
    }
  }
`;

export const UserAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  object-fit: cover;
  cursor: pointer;
`;
export const UpText = styled.div`
  position: absolute;
  opacity: 0;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgFile = styled.input`
  text-decoration: none;
  width: 120px;
  height: 120px;
  top: 0;
  left: 0;
  position: absolute;
  font-size: 100;
  opacity: 0;
`;

export const SignInInput = styled.input``;

export const InInputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 2px;
  padding: 5px;
`;

export const InTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Text = styled.div`
  margin-right: 10px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AlertBox = styled.div`
  display: flex;
  justify-content: center;
`;

const btn = styled.button`
  background-color: rgb(65, 78, 182);
  color: #fff;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
`;
export const InButton = styled(btn)`
  width: 200px;
  height: 25px;
  margin: 10px 25px;
  cursor: pointer;
`;

export const Button = styled(btn)`
  margin-left: 8px;
`;

export const SocalLoginTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5px;
`;

export const SocialButton = styled.button`
  height: 50px;
  border-radius: 100%;
`;

export const GoogleButton = styled(SocialButton)`
  background-color: red;
`;

export const KakaoButon = styled(SocialButton)`
  background-color: rgb(243, 199, 71);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  margin-right: 8px;
`;

type ErrorProps = {
  error?: string | undefined;
};

export const Input = styled.input<ErrorProps>`
  border: ${(props) => (props.error ? '2px solid red' : '1px solid rgba(0,0,0,0.2)')};
`;

export const WideInput = styled.input<ErrorProps>`
  border: ${(props) => (props.error ? '2px solid red' : '1px solid rgba(0,0,0,0.2)')};
  width: 70%;
`;

export const SendButton = styled(Button)`
  width: 50px;
  height: 25px;
`;

export const NextButton = styled(Button)`
  width: 70px;
  height: 25px;
`;

export const Errorbox = styled.div`
  color: red;
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 12px;
`;
