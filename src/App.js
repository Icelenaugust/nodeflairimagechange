import './App.css';
import React, { useState } from 'react';
import ImageContainer from './components/imageContainer/ImageContainer';
import Navbar from './components/navbar/Navbar';

const App = () => {

  const [theme, setTheme] = useState("Mountain")
  
  const mountainPics = ['/images/mountain/mountain1.jpeg',
                        '/images/mountain/mountain2.jpeg',
                        '/images/mountain/mountain3.jpeg',
                        '/images/mountain/mountain4.jpeg',
                        '/images/mountain/mountain5.jpeg',
                        '/images/mountain/mountain6.jpeg',
                        '/images/mountain/mountain7.jpeg',
                        '/images/mountain/mountain8.jpeg']

  const beachPics = ['/images/beach/beach1.jpeg',
                     '/images/beach/beach2.jpeg',
                     '/images/beach/beach3.jpeg',
                     '/images/beach/beach4.jpeg',
                     '/images/beach/beach5.jpeg',
                     '/images/beach/beach6.jpeg',
                     '/images/beach/beach7.jpeg',
                     '/images/beach/beach8.jpeg']

  const birdPics = ['/images/bird/bird1.jpeg',
                    '/images/bird/bird2.jpeg',
                    '/images/bird/bird3.jpeg',
                    '/images/bird/bird4.jpeg',
                    '/images/bird/bird5.jpeg',
                    '/images/bird/bird6.jpeg',
                    '/images/bird/bird7.jpeg',
                    '/images/bird/bird8.jpeg']

  const foodPics = ['/images/food/food1.jpeg',
                    '/images/food/food2.jpeg',
                    '/images/food/food3.jpeg',
                    '/images/food/food4.jpeg',
                    '/images/food/food5.jpeg',
                    '/images/food/food6.jpeg',
                    '/images/food/food7.jpeg',
                    '/images/food/food8.jpeg']
  

  const [pictures, setPictures] = useState(mountainPics)
  
  const changeMountain = () => {
    setTheme("Mountain");
    setPictures(mountainPics);
  }

  const changeBeaches = () => {
    setTheme("Beaches");
    setPictures(beachPics);
  }

  const changeBirds = () => {
    setTheme("Birds");
    setPictures(birdPics);
  }
  
  const changeFood = () => {
    setTheme("Food");
    setPictures(foodPics);
  }

  return (
    <div className="App">
      <Navbar onChangeMountain = { changeMountain }
              onChangeBeaches = { changeBeaches }
              onChangeBirds = { changeBirds }
              onChangeFood = { changeFood }></Navbar>
      <ImageContainer theme = { theme } pictures = { pictures }></ImageContainer>
    </div>
  );
}

export default App;
