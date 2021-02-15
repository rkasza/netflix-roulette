import React from 'react';
import Container from '../../components/Skeleton/Container';
import FindMovie from './FindMovie/FindMovie';
import Movies from './Movies/Movies';
const Home = () => {
  return ( 
    <Container>
      <FindMovie />
      <Movies />
    </Container>
  )
};

export default Home;
