import React, { useEffect } from 'react';
import { StyledInputSearch } from './InputSearch.styled';
import { HiOutlineSearch } from 'react-icons/hi';
import { useRecommend } from '../../store/RecommendContext';
import { useDebounceInput } from '../../hooks/useDebounceInput';

const InputSearch = () => {
  const { getRecommend } = useRecommend();
  const { inputValue, debouncedValue, inputChangeHandler } = useDebounceInput();

  useEffect(() => {
    getRecommend(debouncedValue);
  }, [debouncedValue]);

  return (
    <StyledInputSearch>
      <input
        type='text'
        defaultValue={inputValue}
        placeholder='질환명을 입력해주세요'
        className='search-input'
        onChange={inputChangeHandler}
      />
      <button type='button' className='search-btn'>
        <HiOutlineSearch />
      </button>
    </StyledInputSearch>
  );
};

export default InputSearch;
