import React from 'react';
import Card from '../Components/Cards/card'

function Home() {
  return (
    <div className="flex flex-col tablet:flex-row justify-center flex-wrap">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Home;