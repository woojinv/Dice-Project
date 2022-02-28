let picGallery = {
  1:'https://i.imgur.com/IaBx0k2.jpeg',
  2:'https://i.imgur.com/aez62JY.png',
  3:'https://i.imgur.com/NlyPUv0.png',
  4:'https://i.imgur.com/aPBcTgK.png',
  5:'https://i.imgur.com/3J8kVFI.png',
  6:'https://i.imgur.com/2lnuf9A.png'
}

const compareNumbers = () => {
  const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  let generatedNum = randomNum(1, 6);
  const element = document.getElementById("myP");
  for (let i = 1; i < 7; i++) {
    if (generatedNum === i) {
      let url = picGallery[i];
      element.setAttribute('src', url);
    }
  }
};