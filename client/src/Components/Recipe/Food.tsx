import { FoodDesc, FoodImg, FoodList, FoodsWrap } from '../../styled/recipeList';
import { gql, useQuery } from '@apollo/client';

const Get_FoodList = gql`
  query {
    searchRecipe(metarialName: "양파&떡") {
      title
    }
  }
`;

const Food = () => {
  let { loading, data, error } = useQuery(Get_FoodList);

  return (
    <FoodsWrap>
      <FoodList>
        <FoodImg src="http://m.nbfood.co.kr/web/product/big/202010/3b5284b67f40464d6d5166f1bf58c70e.jpg" />
        <FoodDesc>어쩌구저쩌구</FoodDesc>
      </FoodList>
    </FoodsWrap>
  );
};

export default Food;
