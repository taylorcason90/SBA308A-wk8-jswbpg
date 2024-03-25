var pages = {
    'home': `Welcome to the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Flower Pot<b>!<br/><br/><img src='images/flower1.jpg'
style='width:500px;' />`,
    'aboutus': `About my page<br/><br/><img src='images/flower2.jpg'
style='width:500px;' />`,
    'services': `Everything we provide<br/><br/><img src='images/flower3.jpg'
style='width:500px;' />`,
    'contact': `Here's our contact information<br/><br/><img src='images/flower4.jpg'
style='width:500px;' />`,
};

function getPageContent(page) {
    var contentToReturn;

    switch (page) {
        case 'home':
            contentToReturn = pages.home;
            break;
        case 'aboutus':
            contentToReturn = pages.aboutus;
            break;
        case 'services':
            contentToReturn = pages.services
            break;
        case 'contact':
            contentToReturn = pages.contact
            break;
        default:
            contentToReturn = pages.home
            break;

    }
    document.getElementById('content').innerHTML =
        contentToReturn;
};


const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formEl);
    const data = new URLSearchParams(formData); //url encoded
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: data
    }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));

     
});

function favFlower() {
return new Promise((resolve,reject) => {
    setTimeout(() => {

        const flowerPicked = true;

        if(flowerPicked) {
            resolve("You picked your flower");
        } 
        else {
            reject("No flower picked")
        }
    
    }, 1500);
});
}
function moreFlowers() {
return new Promise((resolve,reject) => {
    setTimeout(() => {

        const getMore = true;

        if(getMore) {
            resolve("You got more flowers");
        } 
        else {
            reject("No more flowers")
        }
    
    }, 1500);
});
}

async function allGood(){
const favFlowerResult = await favFlower();
console.log(favFlowerResult); 

const getMoreResult = await getMore();
console.log(getMoreResult); 

console.log("You are finished!")   
}