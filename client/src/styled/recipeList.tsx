import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  margin-top: 5px;
  font-size: 20px;
  width: 18rem;
`;

export const TagsContainer = styled.div`
  margin: 2rem auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 500px;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;
  &:focus-within {
    border: 1px solid rgb(65, 78, 182);
  }
  @media (max-width: 768px) {
    width: 360px;
  }
`;

export const TagWrap = styled.ul`
  display: flex;
  padding: 0;
  margin: 8px 0 0 0;
  flex-wrap: wrap; //꼭필요한 요소. Tag가 많아지면 바깥으로 넘어가지않고 다음 줄로 내려가게 해주는 요소다.
`;

export const TagList = styled.li`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 8px;
  font-size: 14px;
  list-style: none;
  border-radius: 6px;
  margin: 0 8px 8px 0;
  background-color: #ff6347;
`;

export const TagInput = styled.input`
  flex: 1;
  border: none;
  height: 46px;
  font-size: 14px;
  padding: 4px 0 0 0;
  :focus {
    outline: transparent;
  }
`;

export const TagTitle = styled.span``;

export const Icon = styled.i`
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size: 14px;
  margin-left: 8px;
  color: #ff6347;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HatImg = styled.img`
  width: 8rem;
`;

export const KnifeImg = styled.img`
  width: 3.5rem;
  position: absolute;
  top: 0;
  right: 10%;
`;

export const TitleWrapper = styled.div`
  position: relative;
`;

export const FoodsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  background-color: rgba(0, 0, 0, 0.05);
`;

export const FoodList = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const FoodImg = styled.img`
  height: 250px;
  width: 40%;
`;

export const FoodDesc = styled.div`
  width: 70%;
`;
