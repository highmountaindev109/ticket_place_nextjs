import * as React from 'react';
import { Container } from '@mui/material';
import styled from '@emotion/styled';


const Containers = styled(Container)`
  padding: 0 !important;
`
const MainContent = ({ children }) => {
  return (
      <Containers maxWidth="xl" >{children}</Containers>
  );
};

export default MainContent;
