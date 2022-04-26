import styled from "styled-components";

import { gql, useMutation } from "@apollo/client";

const Button = styled.button``;

export const Upload = () => {
  const PostUpload = gql`
    mutation ($file: Upload) {
      uploadFile(file: $file)
    }
  `;
  const [up, { loading, data, error }] = useMutation(PostUpload);

  const fileUpload: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const files = e.target.files;
    if (files && files.length === 1) {
      const file = files[0];
      console.log("file", file);
      up({
        variables: {
          file: file,
        },
      });
    }
  };
  return (
    <>
      <div className="upload-button-container">
        <label htmlFor="input-file">
          <span role="img" aria-label="camera">
            📷
          </span>
        </label>
        <input type="file" id="input-file" onChange={fileUpload} />
      </div>
    </>
  );
};
