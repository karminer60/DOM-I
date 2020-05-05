const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Task 1-Task 3
//Create selectors by using any of the DOM element's methods

let headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


const navsNames = siteContent.nav
const keys = Object.keys(navsNames)

document.querySelectorAll('a').forEach((a, idx) => {
  a.textContent = navsNames[keys[idx]]
})

const theH1 = document.querySelector('h1');
theH1.textContent = siteContent["cta"]["h1"];

const theButton = document.querySelector('button');
theButton.textContent = siteContent["cta"]["button"];

const topText = document.querySelectorAll('.top-content .text-content');
const h4TopText = topText[0].querySelector('h4');
h4TopText.textContent = siteContent["main-content"]["features-h4"];


const h4TopText2 = topText[1].querySelector('h4');
h4TopText2.textContent = siteContent["main-content"]["about-h4"];

const topText1 = topText[0].querySelector('p');
topText1.textContent = siteContent["main-content"]["features-content"];

const topText2 = topText[1].querySelector('p');
topText2.textContent = siteContent["main-content"]["about-content"];

const bottomText = document.querySelectorAll('.bottom-content .text-content');
const bottomText1 = bottomText[0].querySelector('h4');
bottomText1.textContent = siteContent["main-content"]["services-h4"];

const bottomText2 = bottomText[1].querySelector('h4');
bottomText2.textContent = siteContent["main-content"]["product-h4"];

const bottomText3 = bottomText[2].querySelector('h4');
bottomText3.textContent = siteContent["main-content"]["vision-h4"];

const bottomText1P = bottomText[0].querySelector('p');
bottomText1P.textContent = siteContent["main-content"]["services-content"];

const bottomText2P = bottomText[1].querySelector('p');
bottomText2P.textContent = siteContent["main-content"]["product-content"];

const bottomText3P = bottomText[2].querySelector('p');
bottomText3P.textContent = siteContent["main-content"]["vision-content"];

const contactText = document.querySelector('.contact');
const contactH4 = contactText.querySelector('h4');
contactH4.textContent = siteContent["contact"]["contact-h4"];


const contactPs = contactText.querySelectorAll('p');
contactPs[0].textContent = siteContent["contact"]["address"];


contactPs[1].textContent = siteContent["contact"]["phone"];

contactPs[2].textContent = siteContent["contact"]["email"];

const footer = document.querySelector('footer p');
footer.textContent = siteContent["footer"]["copyright"];



let nav = document.querySelector('nav');

const newLinkProps = {
  href: 'https://google.com',
  textContent: 'Google',
  className: 'menu-item',
}

// create link out of thin air, put it in a variable
const newLink = document.createElement('a')

// add all the attrs and content it needs
newLink.href = newLinkProps.href
newLink.textContent = newLinkProps.textContent
newLink.classList.add(newLinkProps.className)

nav.appendChild(newLink);


const theAs = document.querySelectorAll('a')
theAs.forEach(link => link.style.color = 'green')

