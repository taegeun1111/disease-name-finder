import React, { ChangeEvent, useEffect, useState } from 'react';
import { StyledInputSearch } from './InputSearch.styled';
import { HiOutlineSearch } from 'react-icons/hi';
import { finder } from '../../apis/finder';

const InputSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const inputSearch = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);

    return () => {
      clearTimeout(inputSearch);
    };
  }, [inputValue]);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const recommendFinder = async () => {
    const result = await finder(debouncedValue);
    console.log(result);
  };

  useEffect(() => {
    recommendFinder();
  }, [debouncedValue]);

  return (
    <StyledInputSearch>
      {debouncedValue}
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
