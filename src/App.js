import React from 'react';
import Cards from './Components/Cards';
import Container from './Components/Container';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <Container />
      <Cards />
      <Footer />
    </div>
    </>
  );
  
}

export default App;
