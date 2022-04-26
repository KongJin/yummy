import React from "react";

import { gql, useMutation } from "@apollo/client";

export const Join = () => {
  const Certify = gql`
    mutation ($info: createUser!) {
      joinUser(info: $info) {
        id
        email
        nickname
      }
    }
  `;

  const [emailCer, { data, loading, error }] = useMutation(Certify);

  console.log(loading, error, data);
  console.log(emailCer);
  return (
    <button
      onClick={() => {
        emailCer({
          variables: {
            info: {
              email: "pibr2d@naver.com",
              password: "rrrr",
              img: "http://ddd2",
              nickname: "송2대2선",
            },
          },
        });
      }}
    >
      가입
    </button>
  );
};
