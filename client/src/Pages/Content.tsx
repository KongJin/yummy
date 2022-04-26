import React from "react";

import { gql, useQuery } from "@apollo/client";
const Get_Recipes = gql`
  query {
    getAllRecipe {
      title
    }
  }
`;

export const Content = () => {
  const { loading, data, error } = useQuery(Get_Recipes);

  return <div>Content</div>;
};
