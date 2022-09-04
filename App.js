import React from 'react';
import './App.css';
import Header from './Header'
import Container from './Container';
import Container2 from './Container2';
import FooterSignUp from './FooterSignUp';
import Footer from './Footer';
import Button1A from './Button1A';
import Button2T from './Button2T';
import Header1F from './Header1F';
import Header2T from './Header2T';
import HeaderImage from './HeaderImage';


function App() {
  return (
    <div className="App">
      <Header />
      <HeaderImage />
      <Header1F />
      <Container />
      <Button1A />
      <Header2T />
      <Container2 />
      <Button2T />
      <FooterSignUp />
      <Footer />
    </div>
  );
}

export default App;
