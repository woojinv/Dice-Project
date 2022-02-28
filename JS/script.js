const oPICS = {
  1:'https://i.imgur.com/VjeQG20.png',
  2:'https://i.imgur.com/5Yjwn6e.png',
  3:'https://i.imgur.com/FOqNrQT.png',
  4:'https://i.imgur.com/5xr2QJF.png',
  5:'https://i.imgur.com/uaESiMS.png',
  6:'https://i.imgur.com/mPaO13v.png'
}
/*
const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const updateImg = () => {
  let randomlyGeneratedNum = generateRandomNum(1, 6);
  const image = document.getElementById("myImg");
  const message = document.getElementById("message");
  if (randomlyGeneratedNum === 1 || randomlyGeneratedNum === 2 || randomlyGeneratedNum === 3 || randomlyGeneratedNum === 4 || randomlyGeneratedNum === 5 || randomlyGeneratedNum === 6) {
    let urlOfImg = oPICS[randomlyGeneratedNum];
    image.setAttribute('src', urlOfImg);
    message.innerHTML = randomlyGeneratedNum + "!";
  }
};
*/

const generateRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const rollDice = () => {
  let randomlyGeneratedNum = generateRandomNum(1, 6);
  const image = document.getElementById("myImg");
  const message = document.getElementById("message");
  const exclamation = document.getElementById("exclamation");
  
  let urlOfImg = oPICS[randomlyGeneratedNum];
  image.setAttribute('src', urlOfImg);
  message.innerHTML = randomlyGeneratedNum;
  exclamation.setAttribute('style', 'visibility', 'visible')
};