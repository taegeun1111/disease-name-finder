import React from 'react';
import InputSearch from '../../components/inputSearch/InputSearch';
import RecommendSearch from '../../components/recommendSearch/RecommendSearch';
import { useInput } from '../../store';

const FindList = () => {
  const { selected } = useInput();

  console.log(`selected `, selected);
  return (
    <>
      <InputSearch />
      {selected && <RecommendSearch />}
    </>
  );
};

export default FindList;
