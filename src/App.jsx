import React from 'react'
import { useState } from 'react';
import Backgrund from '../src/components/background/Background'
import Nav from './components/nav/nav';
import Hero from './components/HeroPart/Hero';

function App (){
  let heroData = [
    {text1: "Div into", text2: "What your love"},
    {text1: "In clude", text2: "whats Your passion"},
    {text1: "Give into", text2: "your passion"},
  ];
  const[heroCount, setHeroCount] = useState(0);
  const[playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Backgrund playStatus={playStatus} heroCount={heroCount}/>
      <Nav />
      <Hero 
      setPlayStatus={setPlayStatus}
      heroData={heroData}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
    </div>
  )
}

export default App
