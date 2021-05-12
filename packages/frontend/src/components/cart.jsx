import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const StyledCartButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  padding: 10px;
  margin: 1%;
  border-radius: 10%;
  border: 1px solid black;
  text-align: center;
  cursor: pointer;
  
  :hover {
    background-color: grey;
  }
`;

const StyledCounter = styled.div`
  margin: 10px;
`;

export const CartButton = ({count}) => {
  return <StyledCartButton>
   <FontAwesomeIcon icon={faCartPlus} />
    { !!count && <StyledCounter>{count}</StyledCounter> }
  </StyledCartButton>;
};
