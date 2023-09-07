import React from 'react';
import InputSearch from '../../components/inputSearch/InputSearch';
import RecommendSearch from '../../components/recommendSearch/RecommendSearch';
import { useInput } from '../../store';

const FindList = () => {
  const { focused } = useInput();

  return (
    <>
      <InputSearch />
      {focused && <RecommendSearch />}
    </>
  );
};

export default FindList;
