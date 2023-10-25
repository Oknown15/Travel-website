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

const navigate = document.getElementById("navigation");
unOrdered.appendChild(navigate)

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
moreBtn.onclick = "moreMenu()";
moreBtn.className = "text-capitalize position-relative"
moreBtn.textContent = "More";
Thetext.append(moreBtn)


const moreMenu = () => {
    document.getElementById("Father").style.display= "none";
    document.getElementById("body").style.backgroundImage = "none"
    
    const Fatherdoc1 = document.createElement("div")
    Fatherdoc1.id = "Fatherdoc"
    Fatherdoc1.className = "position-relative"
    document.body.appendChild(Fatherdoc1)

    const docImg = document.createElement("img")
    docImg.src = "./styles/Images/abuja.jpg";
    docImg.id = "abujaImg"
    const Fatherdoc = document.getElementById("Fatherdoc");
    Fatherdoc.appendChild(docImg)

    const head = document.createElement("h3");
    head.id = "abujaPop";
    head.className =  "text-capitalize position-relative"
    head.textContent = "travellers' choice"
    const Papa =document.getElementById("Fatherdoc");
    Papa.appendChild(head);

    const doc = document.createElement("p");
    doc.id = "document";
    doc.className = "text-capitalize text-dark p-3"
    doc.textContent = "abuja to the world -";
    Papa.append(doc)

    const doc1 = document.createElement("p");
    doc1.id = "document1";
    doc1.className = "p-3"
    doc1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusamus repudiandae optio magnam in fugit tenetur architecto. Laboriosam atque eos fugiat quod. Esse unde a omnis alias dicta accusamus hic!"
    Papa.appendChild(doc1)
    
    document.getElementById("carouselExampleSlidesOnly").style.display = "block";

    const Jabi = document.createElement("code");
    Jabi.textContent = "01. jabi lake mall";
    Jabi.className = "p-2 text-capitalize"
    Papa.appendChild(Jabi);

    const next = document.createElement("p");
    next.className = "p-5 text-primary firstText"
    next.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusamus repudiandae optio magnam in fugit tenetur architecto. Laboriosam atque eos fugiat quod. Esse unde a omnis alias dicta accusamus hic!"
    Papa.append(next)

    const Papa1 = document.createElement("div");
    Papa1.id = "Papa1"
    document.body.appendChild(Papa1);

    const Pyramid = document.createElement("code")
    Pyramid.id = "Pyramid"
    Pyramid.className = "text-capitalize"
    Pyramid.textContent = "02.  Pyramid art centre, abuja"
    const Papa1main = document.getElementById("Papa1")
    Papa1main.appendChild(Pyramid)

    const nextImage = document.createElement("img");
    nextImage.id = "nextImg";
    nextImage.src = "./styles/Images/images (35).jpeg";
    Papa1main.appendChild(nextImage);

    const nextImagedoc = document.createElement("p");
    nextImagedoc.id = "documentForImg";
    nextImagedoc.className = "text-primary";
    nextImagedoc.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusamus repudiandae optio magnam in fugit tenetur architecto. Laboriosam atque eos fugiat quod. Esse unde a omnis alias dicta accusamus hic!";
    Papa1main.append(nextImagedoc);

    const Maitama = document.createElement("code");
    Maitama.textContent = "03. maitama";
    Maitama.className = "text-capitalize";
    Papa1main.appendChild(Maitama);

    const nextImage1 = document.createElement("img");
    nextImage1.src = "./styles/Images/abuja (38).jpg";
    nextImage1.className = "nextImage1"
    Papa1main.appendChild(nextImage1);

    const nextImage1doc = document.createElement("p");
    nextImage1doc.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusamus repudiandae optio magnam in fugit tenetur architecto. Laboriosam atque eos fugiat quod. Esse unde a omnis alias dicta accusamus hic!";
    nextImage1doc.id = "documentForImg1";
    nextImage1doc.className = "text-primary"
    Papa1main.append(nextImage1doc);

    const asokoro = document.createElement("code");
    asokoro.textContent = "04.  asokoro";
    asokoro.className = "text-capitalize";
    Papa1main.appendChild(asokoro)

    const nextImage2 = document.createElement("img");
    nextImage2.className = "nextImg2"
    nextImage2.src = "./styles/Images/abuja (39).jpg";
    Papa1main.appendChild(nextImage2);

    const nextImage21 = document.createElement("img");
    nextImage21.className ="nextImg21"
    nextImage21.src = "./styles/Images/abuja (40).jpg";
    Papa1main.appendChild(nextImage21)

    const nextImage22 = document.createElement("img");
    nextImage22.className = "nextImg22";
    nextImage22.src = "./styles/Images/images (38).jpeg";
    Papa1main.appendChild(nextImage22);
    
    const nextImage2doc = document.createElement("p");
    nextImage2doc.className = "documentForImg2 text-capitalize text-primary"
    nextImage2doc.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusamus repudiandae optio magnam in fugit tenetur architecto. Laboriosam atque eos fugiat quod. Esse unde a omnis alias dicta accusamus hic!";
    Papa1main.appendChild(nextImage2doc);

    const gwarimpa =document.createElement("code");
    gwarimpa.textContent = "05. zuma rock";
    gwarimpa.className = "text-capitalize";
    Papa1main.appendChild(gwarimpa);

    const nextImage3 = document.createElement("img");
    nextImage3.className  = "nextImg3"
    nextImage3.src = "./styles/Images/abuja (41).jpg";
    Papa1main.appendChild(nextImage3);

    const nextImage3doc = document.createElement("p");
    nextImage3doc.className = "text-capitalize documentForImg3 text-primary"
    nextImage3doc.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt accusamus repudiandae optio magnam in fugit tenetur architecto. Laboriosam atque eos fugiat quod. Esse unde a omnis alias dicta accusamus hic!";
    Papa1main.appendChild(nextImage3doc);
}
const menu = document.getElementById("more");
menu.onclick = moreMenu;