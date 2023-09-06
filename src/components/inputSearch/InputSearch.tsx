import React from 'react';
import { StyledInputSearch } from './InputSearch.styled';
import { HiOutlineSearch } from 'react-icons/hi';

const InputSearch = () => {
  return (
    <StyledInputSearch>
      <input type='text' defaultValue='' placeholder='질환명을 입력해주세요' className='search-input' />
      <button type='button' className='search-btn'>
        <HiOutlineSearch />
      </button>
    </StyledInputSearch>
  );
};

export default InputSearch;
