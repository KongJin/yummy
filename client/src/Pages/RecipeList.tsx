import { useRecoilValue } from "recoil";
import { materialList } from "../state/state";

const RecipeList = () => {
  const list = useRecoilValue(materialList);
  console.log(list);
  return <div>RecipeList</div>;
};

export default RecipeList;
