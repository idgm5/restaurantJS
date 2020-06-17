
const footer = () => {
  const div = document.getElementById("mainContent");
  const divfooter = document.createElement("footer");
  const link = document.createElement("a");

  link.setAttribute("href", "https://github.com/idgm5");
  link.innerHTML="Build with Vanilla JS by @idgm5";

  divfooter.appendChild(link);
  div.appendChild(divfooter);
}

export default footer;
