import React from 'react';
import styled from 'styled-components';
import { CartButton } from './cart';

const HeaderButton = styled.div`
  
`;

const StyledHeader = styled.div`
  background-color: rgba(0,0,0,0.2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100$;
`;

const Header = ({ count, onClick }) => <div><StyledHeader onClick={onClick}>
  <CartButton count={count} />
</StyledHeader></div>;

export default Header;
