const oPICS = {
  1:'https://i.imgur.com/IaBx0k2.jpeg',
  2:'https://i.imgur.com/aez62JY.png',
  3:'https://i.imgur.com/NlyPUv0.png',
  4:'https://i.imgur.com/aPBcTgK.png',
  5:'https://i.imgur.com/3J8kVFI.png',
  6:'https://i.imgur.com/2lnuf9A.png'
}

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