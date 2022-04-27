import { useForm, ValidationRule } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { emailCertiNum, joinUserInfo } from '../../state/state';
import { joinInfo } from '../../state/typeDefs';
import { useState } from 'react';

import netlify from '../../assets/netlify-logo.png';
import {
  Container,
  Errorbox,
  Input,
  InputWrap,
  Label,
  NextButton,
  SendButton,
  SignupForm,
  Title,
  UserAvatar,
  WideInput,
  ImgFile,
  UpText,
  ImgLabel,
} from '../../styled/modal';

type FormData = {
  email: string;
  certifyNumber: number;
  password: string;
  password2: string;
  nickName: string;
};

const Certify = gql`
  mutation ($email: String!) {
    emailCertify(email: $email)
  }
`;

const Join = gql`
  mutation ($info: createUser!) {
    joinUser(info: $info) {
      id
      email
      nickName
      img
    }
  }
`;

const Signup = () => {
  const [certiNum, setCertiNum] = useRecoilState(emailCertiNum);
  const [isFirst, setIsFirst] = useState(true);
  const [img, setImg] = useState<File | undefined>();
  const [intro, setIntro] = useState('');
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  const [emailCer, { data, loading, error }] = useMutation(Certify);

  const [avatarImg, setAvatarImg] = useState<string | undefined>(netlify);
  const postCertify = async () => {
    const { email } = getValues();

    emailCer({
      variables: {
        email,
      },
    });
  };
  const [up, { loading: loading2, data: data2, error: error2 }] = useMutation(Join);

  const fileUpload: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const files = e.target.files;
    if (files && files.length === 1) {
      const file = files[0];
      console.log('file', file);
    }
  };

  console.log(data);

  console.log(data2);
  if (!loading) {
    setCertiNum(data?.emailCertify);
  }

  const onSubmit = async (data: joinInfo) => {
    setIsFirst(false);
  };

  const myPattern: ValidationRule<RegExp> = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: '이메일 형식으로 입력해주세요',
  };

  const passwordPattern: ValidationRule<RegExp> = {
    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    message: '8자이상 / 영문 / 숫자 / 특수문자를 조합해주세요',
  };

  const previewFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setAvatarImg(String(reader.result));
    };
    reader.readAsDataURL(file);
  };

  const postJoin = () => {
    const { email, nickName, password } = getValues();
    console.log(email, nickName, password);
    up({
      variables: {
        info: {
          email,
          password,
          nickName,
          img,
          intro,
        },
      },
    });
  };

  return (
    <Container>
      {isFirst ? (
        <SignupForm onSubmit={handleSubmit(onSubmit)}>
          <Title>Join US !</Title>
          <InputWrap>
            <Label htmlFor="이메일">이메일</Label>
            <Input
              id="이메일"
              type="text"
              error={errors.email?.message}
              {...register('email', {
                required: '이메일을 입력해주세요',
                pattern: myPattern,
              })}
            />
            <SendButton type="button" onClick={postCertify}>
              send
            </SendButton>
          </InputWrap>
          <Errorbox>{errors.email?.message}</Errorbox>
          <InputWrap>
            <Label htmlFor="인증번호">인증번호</Label>
            <WideInput
              id="인증번호"
              type="text"
              error={errors.certifyNumber?.message}
              {...register('certifyNumber', {
                required: '인증번호를 입력해주세요',
                validate: {
                  matchPassword: (value: number) => {
                    return certiNum === Number(value) || '인증번호가 일치하지 않습니다.';
                  },
                },
              })}
            />
          </InputWrap>
          <Errorbox>{errors.certifyNumber?.message}</Errorbox>
          <InputWrap>
            <Label htmlFor="비밀번호">비밀번호</Label>
            <WideInput
              type="password"
              error={errors.password?.message}
              {...register('password', {
                required: '비밀번호를 입력해주세요',
                pattern: passwordPattern,
              })}
            />
          </InputWrap>
          <Errorbox>{errors.password?.message}</Errorbox>
          <InputWrap>
            <Label htmlFor="비밀번호확인">비밀번호확인</Label>
            <WideInput
              id="비밀번호확인"
              type="password"
              error={errors.password2?.message}
              {...register('password2', {
                required: '비밀번호를 입력해주세요',
                validate: {
                  matchPassword: (value) => {
                    const { password } = getValues();
                    return password === value || '비밀번호가 일치하지 않습니다.';
                  },
                },
              })}
            />
          </InputWrap>
          <Errorbox>{errors.password2?.message}</Errorbox>
          <InputWrap>
            <Label htmlFor="닉네임">닉네임</Label>
            <Input
              id="닉네임"
              error={errors.nickName?.message}
              {...register('nickName', {
                required: '닉네임을 입력해주세요',
              })}
            />
          </InputWrap>
          <Errorbox>{errors.nickName?.message}</Errorbox>
          <NextButton type="submit">Next</NextButton>
        </SignupForm>
      ) : (
        <>
          <Title>Join US !</Title>
          <ImgLabel htmlFor="input_file">
            <UpText>
              이미지 <br />
              업로드
            </UpText>
            <UserAvatar src={avatarImg} />
            <ImgFile
              id="input_file"
              type="file"
              accept="*"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const target = event.target as HTMLInputElement;
                if (target.files) {
                  const file = target.files[0];
                  setImg(file);
                  return previewFile(file);
                }
              }}
            />
          </ImgLabel>
          <InputWrap>
            <Label htmlFor="소개">소개</Label>
            <Input
              id="소개"
              type="text"
              onChange={(e) => {
                setIntro(e.target.value);
              }}
            />
          </InputWrap>
          <NextButton onClick={postJoin}>Next</NextButton>
        </>
      )}
    </Container>
  );
};
export default Signup;
