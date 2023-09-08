import React, { useEffect, useState } from 'react';
import { StyledInputSearch } from './InputSearch.styled';
import { HiOutlineSearch } from 'react-icons/hi';
import { useInput, useRecommend } from '../../store';

const InputSearch = () => {
  const { getRecommend, recommend } = useRecommend();
  const { inputValue, debouncedValue, inputChangeHandler, focused, setFocused, selected, setSelected, setInputValue } =
    useInput();
  const [isComposing, setIsComposing] = useState(false);

  const initialValue = -1;

  useEffect(() => {
    getRecommend(debouncedValue);
  }, [debouncedValue]);

  const inputFocusHandler = () => {
    setFocused(true);
  };

  const inputBlurHandler = () => {
    setTimeout(() => {
      setFocused(false);
    }, 200);
    setSelected(initialValue);
  };

  const handleCompositionStart = (event: React.CompositionEvent<HTMLInputElement>) => {
    setIsComposing(true);
  };

  const handleCompositionEnd = (event: React.CompositionEvent<HTMLInputElement>) => {
    setIsComposing(false);
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isComposing) {
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (selected > 0 && recommend.length > 1) {
        setSelected(selected - 1);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (selected < recommend.length - 1 && recommend.length > 1) {
        setSelected(selected + 1);
      }
    } else if (e.key === 'Enter') {
      if (selected >= 0 && selected < recommend.length) {
        setInputValue(recommend[selected].sickNm);
        setSelected(initialValue);
      }
    }
  };

  return (
    <StyledInputSearch $focused={focused}>
      <input
        type='text'
        value={inputValue}
        placeholder='질환명을 입력해주세요'
        className='search-input'
        onChange={inputChangeHandler}
        onFocus={inputFocusHandler}
        onBlur={inputBlurHandler}
        onKeyDown={keyDownHandler}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
      />
      <button type='button' className='search-btn'>
        <HiOutlineSearch />
      </button>
    </StyledInputSearch>
  );
};

export default InputSearch;
