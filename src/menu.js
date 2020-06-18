const menu = () => {
  // Menu elements
  const div = document.getElementById('mainContent');
  const divMenu = document.createElement('DIV');
  const para = document.createElement('P');
  const h2 = document.createElement('H2');
  const divContainer = document.createElement('DIV');
  divContainer.setAttribute('class', 'menu-container');
  // Menu Items
  const divFirst = document.createElement('DIV');
  const h3First = document.createElement('H3');
  const paraFirst = document.createElement('P');
  const imgFirst = document.createElement('IMG');
  divFirst.setAttribute('class', 'menu-item');
  imgFirst.setAttribute('src', './assets/coctel_camaron.png');
  imgFirst.setAttribute('class', 'item-img');
  h3First.innerHTML = 'Shrimp Cocktail';
  paraFirst.innerHTML = 'Our elite recipe consist of 2 pounds of cooked shrimp, peeled and deveined. Using garlic, red onion, cilantro and clam juice with a small tablespoon of ketchup.';

  const divSecond = document.createElement('DIV');
  const h3Second = document.createElement('H3');
  const paraSecond = document.createElement('P');
  const imgSecond = document.createElement('IMG');
  divSecond.setAttribute('class', 'menu-item');
  imgSecond.setAttribute('src', './assets/fish_recipe.jpg');
  imgSecond.setAttribute('class', 'item-img');
  h3Second.innerHTML = 'Grilled Fish Salad';
  paraSecond.innerHTML = 'From our special guests from NPR we create a masterful grilled fish salad that consist of 400grms of red salmon, a drizzle of a nice gren fruity olive oil, a splash of our home special citrus juice and a sprinkling of fennel pollen.';

  const divThird = document.createElement('DIV');
  const h3Third = document.createElement('H3');
  const paraThird = document.createElement('P');
  const imgThird = document.createElement('IMG');
  divThird.setAttribute('class', 'menu-item');
  imgThird.setAttribute('src', './assets/raw_salmon.png');
  imgThird.setAttribute('class', 'item-img');
  h3Third.innerHTML = 'Salmon with Ponzu & Grapefruit';
  paraThird.innerHTML = 'We all know lemon is loved by salmon, but the fish also adores the flavour and acidity of pink grapefruit. We use kombu in the dressing. It’s a dried seaweed which is an essential ingredient for good dashi, the Japanese stock.';
  // Menu Page
  divFirst.append(imgFirst, h3First, paraFirst);
  divSecond.append(imgSecond, h3Second, paraSecond);
  divThird.append(imgThird, h3Third, paraThird);
  divContainer.append(divFirst, divSecond, divThird);

  h2.innerHTML = "Today's Menu";
  para.innerHTML = 'Our specialities for today, for fast take-out or delivery call 983-3YY-ZZZ!';
  divMenu.append(h2, para, divContainer);
  divMenu.setAttribute('class', 'menu');
  div.appendChild(divMenu);
};

export default menu;
