const compareNumbers = () => {
  const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  let generatedNum = randomNum(1, 6);
  if (generatedNum === 1) {
  const element = document.getElementById("myP");
  element.outerHTML = "<img src='https://i.imgur.com/IaBx0k2.jpeg'/>";
  } else if ( generatedNum === 2) {
    const element = document.getElementById("myP");
  element.outerHTML = "<img src='https://i.imgur.com/aez62JY.png'/>";
  } else if ( generatedNum === 3) {
    const element = document.getElementById("myP");
  element.outerHTML = "<img src='https://i.imgur.com/NlyPUv0.png'/>";
  } else if ( generatedNum === 4) {
    const element = document.getElementById("myP");
  element.outerHTML = "<img src='https://i.imgur.com/aPBcTgK.png'/>";
  } else if ( generatedNum === 5) {
    const element = document.getElementById("myP");
  element.outerHTML = "<img src='https://i.imgur.com/3J8kVFI.png'/>";
  } else if ( generatedNum === 6) {
    const element = document.getElementById("myP");
  element.outerHTML = "<img src='https://i.imgur.com/2lnuf9A.png'/>";
  } 
};


