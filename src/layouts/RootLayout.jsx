import React from 'react';
import Container from 'react-bootstrap/Container';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default RootLayout;