
const about = () => {
  // About elements
  const div = document.getElementById("mainContent");
  const divAbout = document.createElement("DIV");
  const h2 = document.createElement("H2");
  const paraFirst = document.createElement("P");
  const paraSecond = document.createElement("P");
  const paraThird = document.createElement("P");

  const divImg = document.createElement("DIV");
  const divImgMain = document.createElement("DIV");
  const divImgCollection = document.createElement("DIV");

  h2.innerHTML = "The Journey"
  paraFirst.innerHTML = "On May 4th, 2005 we opened the doors to Coconut Mojo. The culmination of years of dreaming and imagination, Coconut Mojo was a minimalist modern vision that put the focal point on the cuisine and dining as an experience."
  paraSecond.innerHTML = "On 2018 Coconut Mojo was awarded a Michelin Star and was selected as the second best restaurant in the world for 2018 by the Elite Traveler Magazine."
  paraThird.innerHTML = "Coconut Mojo is also fortunate to have a team of experienced and dedicated bar and waiting-on staff who collectively have raised the status of the restaurant under the guidance of Cheff Luciano. All have a story to tell, some have their businesses, many are graduates or bi-lingual and many of the staff originate from all corners of the world - USA, Malta, Sicily, Sardinia, Lithuania, Poland - talk to your bar or waiter/waitress you may be surprised what you discover!";

  divAbout.append(h2, paraFirst, paraSecond, divImg, paraThird)
  div.appendChild(divAbout);
}

export default about;
