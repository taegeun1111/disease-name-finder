import React from 'react';
import { StyledRecommendSearch } from './RecommendSearch.styled';
import RecommendList from './RecommendList';
import { useRecommend } from '../../store/RecommendContext';

const RecommendSearch = () => {
  const { recommend, searched } = useRecommend();

  return (
    <StyledRecommendSearch>
      <p className='recommend-title'>추천 검색어</p>

      {searched ? (
        recommend.length === 0 ? (
          <div>검색 결과가 없습니다.</div>
        ) : (
          recommend.map((result) => <RecommendList key={result.sickCd} searchResult={result.sickNm} />)
        )
      ) : (
        <div>검색어를 입력해주세요</div>
      )}
    </StyledRecommendSearch>
  );
};

export default RecommendSearch;
