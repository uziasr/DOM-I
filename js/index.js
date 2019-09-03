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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelector('nav').querySelectorAll('a')
for (let i=0; i<navItems.length; i++){
  let currentNav = (`nav-item-${i+1}`)
  navItems[i].textContent = siteContent.nav[currentNav]
}

//center start
let cta = document.getElementsByClassName('cta');
let ctaText = document.getElementsByClassName('cta-text');

//splitting up the DOM IS AWESOME to get the words to stack
let bigTitle = ctaText[0].querySelector('h1')
let splitTitle = siteContent.cta.h1.split(' ');
let titleH = document.createElement('h1')
let titleT = document.createTextNode(splitTitle[1])
let titleH1 = document.createElement('h1')
let titleT1 = document.createTextNode(splitTitle[0])
titleH.appendChild(titleT)
titleH1.appendChild(titleT1)
bigTitle.textContent = splitTitle[2]
//prepending the titles
ctaText[0].prepend(titleH)
ctaText[0].prepend(titleH1)
let title1 = document.createElement('h1');



let ctaButton = cta[0].querySelector('button')
ctaButton.textContent = siteContent.cta.button

let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta['img-src']
//center complete

//main content
let mainContent = document.getElementsByClassName('main-content')

let middleImg = document.getElementById("middle-img")
middleImg.src = siteContent["main-content"]["middle-img-src"]

//populating middle content
let middleContentTitles = ['features','about','services','product','vision']
let middleContentP = mainContent[0].querySelectorAll('p')
middleContentP.forEach((element, index)=>(element.textContent = siteContent["main-content"][`${middleContentTitles[index]}-content`]))
let middleContentH4 = mainContent[0].querySelectorAll('h4')
middleContentH4.forEach((element, index)=>(element.textContent = siteContent["main-content"][`${middleContentTitles[index]}-h4`]))

let contactSection = document.getElementsByClassName('contact')
let contactH4 = contactSection[0].querySelector('h4')
contactH4.textContent = siteContent.contact['contact-h4']
let contactP = contactSection[0].querySelectorAll('p')
contactP[0].textContent = siteContent.contact.address
contactP[1].textContent = siteContent.contact.phone
contactP[2].textContent = siteContent.contact.email

let footerP = document.getElementsByTagName('footer')[0].getElementsByTagName('p')[0]
footerP.textContent = siteContent.footer.copyright