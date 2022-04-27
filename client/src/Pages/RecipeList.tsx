import { materialList } from '../state/state';
import { Container, FoodImg, HatImg, Title, KnifeImg, TitleWrapper } from '../styled/recipeList';
import Tag from '../Components/Recipe/Tag';
import chefHat from '../assets/chefHat.png';
import kitchenKinfe from '../assets/kitchenKnife.png';
import Food from '../Components/Recipe/Food';

const RecipeList = () => {
  return (
    <Container>
      <HatImg src={chefHat} />
      <TitleWrapper>
        <Title>내가 선택한 재료</Title>
        <KnifeImg src={kitchenKinfe} />
      </TitleWrapper>
      <Tag />
      <Food />
    </Container>
  );
};

export default RecipeList;
