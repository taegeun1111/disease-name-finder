import React from 'react';
import { StyledErrorPage } from './ErrorPage.styled';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <StyledErrorPage>
      <div className='error'>
        <p className='error-title'>원하시는 페이지를 찾을 수 없습니다.</p>
        <Link to={'/'} className='back-btn'>
          돌아가기
        </Link>
      </div>
    </StyledErrorPage>
  );
};

export default ErrorPage;
