import { ButtonWrap, Container, MaterialListContainer, RecipeButton } from '../styled/materialList';

import { gql, useQuery } from '@apollo/client';
import { material } from '../state/typeDefs';
import { allMaterials, materialList } from '../state/state';
import { useSetRecoilState } from 'recoil';
import Material from '../Components/Search/Material';
import { useEffect } from 'react';

const Get_Materials = gql`
  query {
    getAllMaterial {
      id
      name
      img
    }
  }
`;

const Search = () => {
  let { loading, data, error } = useQuery(Get_Materials);

  const setMaterialList = useSetRecoilState(materialList);
  const setAllMaterails = useSetRecoilState(allMaterials);

  useEffect(() => {
    const allList = data?.getAllMaterial.map((material: { name: string }) => {
      return material.name;
    });

    setAllMaterails(allList);
  });

  let list: string[] = [];

  const listAdd = (materialName: string) => {
    let index = list.indexOf(materialName);
    if (index === -1) {
      list.push(materialName);
    } else {
      list.splice(index, 1);
    }
  };
  return (
    <Container>
      <MaterialListContainer>
        {data?.getAllMaterial.map((el: material) => {
          return <Material key={el.id} el={el} listAdd={listAdd} />;
        })}
      </MaterialListContainer>
      <ButtonWrap to="/recipelist">
        <RecipeButton
          onClick={() => {
            setMaterialList(list);
          }}
        >
          Find Recipe
        </RecipeButton>
      </ButtonWrap>
    </Container>
  );
};
export default Search;
