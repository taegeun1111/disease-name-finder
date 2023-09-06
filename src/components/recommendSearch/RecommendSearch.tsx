import React from 'react';
import { StyledRecommendSearch } from './RecommendSearch.styled';
import RecommendList from './RecommendList';

const RecommendSearch = () => {
  return (
    <StyledRecommendSearch>
      <p className='recommend-title'>추천 검색어</p>
      <RecommendList />
      <RecommendList />
      <RecommendList />
    </StyledRecommendSearch>
  );
};

export default RecommendSearch;
