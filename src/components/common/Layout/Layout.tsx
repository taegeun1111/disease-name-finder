import React from 'react';
import { StyledLayout } from './Layout.styled';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return <StyledLayout>{children}</StyledLayout>;
};
