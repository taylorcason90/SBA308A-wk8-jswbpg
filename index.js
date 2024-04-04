

    const btn = document.querySelector('button');
btn.style.backgroundColor = 'Pink';
console.log(btn);

// event listener 
btn.addEventListener('click', function(evt) {
 
// logging
console.log(evt);


// // create a list and add to the end of the list

const li = document.createElement('li')

// //add text here

const input = document.querySelector('input');

li.textContent = input.value;

// //i need to add this li to the end of the list
document.querySelector('ul').appendChild(li);
console.log(input.value);

 });

    document.querySelector('ul')
    .addEventListener("click", handleUlClick);

    function handleUlClick(evt) {
        console.log(evt.target);
        console.dir(evt.target);
    
        console.log(evt.target.localName);
        console.log(evt.target.nodeName);
    
        if (evt.target.localName === 'li') {
        let evtColor = evt.target.style.color;
        console.log(evtColor);
        if (evt.target.style.color == 'red') {
            evt.target.style.color = 'black';
        } else {
            evt.target.style.color = 'red';
        }
    }
    }

    var pages = {
        'home': `Welcome to the <b>Flower Pot!<b>!<br/><br/><img src='images/flower1.jpg'
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

document
.getElementById("myBtn")
.addEventListener("click", testRequest);

async function testRequest(myInput) {
    let inputVal = document.getElementById("myInput").value;
    let requestBody = {data: inputVal};
    console.log(requestBody);
    

const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
method: "POST",
body: JSON.stringify(requestBody),
headers: {
    'Content-Type': 'application/json;charset-UTF-8',
}
});

alertResponse(response);
} alert("***ALERT***");


async function alertResponse(response) {
    if (response.ok) {
    const textData = await response.text();
        alert(textData);
    } else {
        alert("The request returned a status other than 200 OK: " + response.status);
    }
}

    // const moreFlowers = document.getElementById('moreFlowers');
    // moreFlowers.addEventListener("click", getNewFlowers);

    // async function getNewFlowers() {
    //     moreFlowers.style.cursor = 'wait';
    //     const response = await fetch("http://{defaultHost}/api/v1/plants");
    //     // console.log(response);
    //     const jsonData = await response.json();
    //     // console.log(jsonData);
    //     const url = jsonData.message;
    
    //     moreFlowers.src = url;
    //     moreFlowers.style.cursor = 'pointer';
    // }

    // getNewFlowers();

    // Modified Flower Code

    // let currentIndex = 0; // Initialize the current image index

    // document.getElementById('clickableImage').addEventListener('click', function() {
    //     fetch('https://api.pexels.com/v1/search?query=flowers&per_page=5', {
    //         headers: {
    //             Authorization: ''
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         // Remove the first image if it exists
    //         const clickableImage = document.getElementById('clickableImage');
    //         if (clickableImage) {
    //             clickableImage.remove();
    //         }
    
    //         // Get the next image URL based on the current index
    //         const imageUrl = data.photos[currentIndex].src.medium;
    
    //         // Create and append the next image
    //         const image = document.createElement('img');
    //         image.src = imageUrl;
    //         document.body.appendChild(image);
    
    //         // Increment the current index for the next click
    //         currentIndex = (currentIndex + 1) % data.photos.length;
    //     })
    //     .catch(error => console.error('Error fetching images:', error));
    // });

    // try  

    let currentIndex = 0; // Initialize the current image index
let currentImageIndex = 0; // Initialize the current index of the displayed image

document.getElementById('clickableImage').addEventListener('click', function() {
    fetch('https://api.pexels.com/v1/search?query=flowers&per_page=5', {
        headers: {
            Authorization: 'Te2AxJtvuJZTZLxU21ZBZiZ0jEFAaZiQ0QzjK2YzqbF4Ui2XghQzwO7B' // Replace 'YOUR_API_KEY' with your actual Pexels API key
        }
    })
    .then(response => response.json())
    .then(data => {
        // Get the next image URL based on the current index
        const imageUrl = data.photos[currentIndex].src.medium;

        // Update the clickableImage source
        document.getElementById('clickableImage').src = imageUrl;

        // Increment the current index for the next click
        currentIndex = (currentIndex + 1) % data.photos.length;
        // Update the current image index
        currentImageIndex = currentIndex;
    })
    .catch(error => console.error('Error fetching images:', error));
});

    

    
 

   