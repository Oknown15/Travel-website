const div = document.createElement("div");
div.id = "container"
div.className = "container"
const newMain = document.getElementById("container");

document.body.appendChild(div);

const navBar = document.createElement("nav")
navBar.id = "nav";
const textLoc = document.getElementById("container");
textLoc.appendChild(navBar);

const unOrdered = document.createElement("ul");
unOrdered.id = "link";
unOrdered.className = ""
const nav = document.getElementById("nav");
nav.append(unOrdered);

const Links = document.createElement("a");
Links.id = "nav1";
Links.href = "#";
Links.className = " text-dark ";
Links.textContent = "Places"

const navOne = document.getElementById("link");
navOne.appendChild(Links);

const LinksOne = document.createElement("a");
LinksOne.id = "nav2";
LinksOne.href = "#";
LinksOne.className = " text-dark";
LinksOne.textContent = "Restaurants"
const navTwo = document.getElementById("link");
navTwo.appendChild(LinksOne);

const LinksTwo = document.createElement("a");
LinksTwo.id = "nav3";
LinksTwo.className = " text-dark"
LinksTwo.textContent = "Hotels"
const navThree = document.getElementById("link");
navThree.append(LinksTwo);

const LinksThree = document.createElement("a");
LinksThree.id = "nav4";
LinksThree.className = " text-dark"
LinksThree.textContent = "Parks"
const navFour = document.getElementById("link");
navFour.append(LinksThree);


const Thefather = document.createElement("div")
Thefather.className = "container-fluid"
Thefather.id = "Father";
document.body.appendChild(Thefather)

const Theson = document.createElement("div")
Theson.className = "position-relative"
Theson.id = "Son";
Thefather.appendChild(Theson);

const text = document.createElement("h3");
text.id = "Text"
text.textContent = "welcome to abuja"
text.className = "text-uppercase p-5";

const Thetext = document.getElementById("Son");
Thetext.appendChild(text);

const text2 = document.createElement("h5");
text2.textContent = "the centre of excellence"
text2.className= "text-uppercase position-absolute top-50 start-50 translate-middle"
text2.id = "Text1";
Thetext.appendChild(text2);

const newDiv = document.createElement("div");
newDiv.id = "";
newDiv.classList = "row align-item-start"
const myDiv = document.getElementById("Father");

myDiv.appendChild(newDiv);

const intDiv = document.createElement("b");
intDiv.id = "Popular"
intDiv.className = "text-light "
intDiv.textContent = "Popular places";
Thetext.appendChild(intDiv);

const images = document.createElement("img");
images.id = "Images";
images.src = "./styles/Images/images (33).jpeg";
images.className = "rounded "

newDiv.appendChild(images);



const images1 = document.createElement("img");
images1.id = "Images1";
images1.src = "./styles/Images/image2.jpg";
images1.className = "rounded mx-auto d-block"
newDiv.appendChild(images1);

const imgDescription1 = document.createElement("p");
imgDescription1.className= "description1";
imgDescription1.textContent = "the aso-rock ";
newDiv.appendChild(imgDescription1);

const imgDescription = document.createElement("p");
imgDescription.className= "description position-relative";
imgDescription.textContent = "the eagle's square";
newDiv.append(imgDescription);

const moreBtn =document.createElement("a")
moreBtn.id = "more";
moreBtn.href = "#";
moreBtn.className = "text-capitalize position-relative"
moreBtn.textContent = "More";
Thetext.append(moreBtn)