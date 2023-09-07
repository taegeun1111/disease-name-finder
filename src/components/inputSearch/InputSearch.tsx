import React, { useEffect } from 'react';
import { StyledInputSearch } from './InputSearch.styled';
import { HiOutlineSearch } from 'react-icons/hi';
import { useInput, useRecommend } from '../../store';

const InputSearch = () => {
  const { getRecommend } = useRecommend();
  const { inputValue, debouncedValue, inputChangeHandler, setSelected } = useInput();

  useEffect(() => {
    getRecommend(debouncedValue);
  }, [debouncedValue]);

  const inputFocusHandler = () => {
    setSelected(true);
  };

  const inputBlurHandler = () => {
    setTimeout(() => {
      setSelected(false);
    }, 200);
  };

  return (
    <StyledInputSearch>
      <input
        type='text'
        defaultValue={inputValue}
        placeholder='질환명을 입력해주세요'
        className='search-input'
        onChange={inputChangeHandler}
        onFocus={inputFocusHandler}
        onBlur={inputBlurHandler}
      />
      <button type='button' className='search-btn'>
        <HiOutlineSearch />
      </button>
    </StyledInputSearch>
  );
};

export default InputSearch;
