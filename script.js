let trends = document.querySelectorAll(".trends");
let button = document.querySelectorAll(".cart");
let  cards = document.querySelectorAll(".card");

let count = 0;

trends.forEach((curElem, index)=>{
    curElem.style.left=`${index*100}%`;
})


const myFun  = ( ) =>{
    trends.forEach((curImg)=>{
        curImg.style.transform=`translateX(-${count * 100}%)`
    })
     
}

setInterval(()=>{
    count++;
    if(count == trends.length){
        count=0
    }
    myFun()
},4000)

// cart
button.forEach((curBtn)=>{
    curBtn.addEventListener("click", function(){
        alert("Added To Cart")
    })
})


// card detail
cards.forEach((curCard)=>{
    curCard.addEventListener("click", function(){
        console.log(curCard);

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
        <h1>Fresh Foods</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae odio velit mollitia nulla inventore asperiores fuga. Quasi, eius nemo. Blanditiis, consequatur sunt.</p>

        `
        document.querySelector("body").appendChild(div)
        document.getElementById("icon").addEventListener("click", function(){
            div.remove();
        })
    })
})










let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let foods = document.getElementById('food');

food1s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food1.png')";
})

food2s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food.jpg')";
})

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.menu');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('highlight');
            } else {
                entry.target.classList.remove('highlight');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
// scripts.js

function toggleHistory() {
    const extendedHistory = document.getElementById('extended-history');
    const historyContent = document.getElementById('history-content');
    
    if (extendedHistory.style.display === 'none') {
        extendedHistory.style.display = 'block';
        historyContent.querySelector('button').innerText = 'Read Less';
    } else {
        extendedHistory.style.display = 'none';
        historyContent.querySelector('button').innerText = 'Read More';
    }
}

// When the page loads, create a button to toggle night mode
document.addEventListener('DOMContentLoaded', () => {
    const nightModeButton = document.createElement('button'); // Create a new button
    nightModeButton.textContent = 'Night Mode'; // Set the button text
    nightModeButton.classList.add('night-mode'); // Add a class to the button

    // Set the style for the night mode button
    Object.assign(nightModeButton.style, {
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: '#34495e',
        color: 'white',
        border: '2px solid #555',
        padding: '10px',
        borderRadius: '10px',
        cursor: 'pointer'
    });

    // Append the button to the body of the document
    document.body.appendChild(nightModeButton);

    // Toggle night mode on button click
    nightModeButton.addEventListener('click', () => {
        document.body.classList.toggle('night-theme'); // Toggle the 'night-theme' class

        if (document.body.classList.contains('night-theme')) { // Check if night mode is active
            nightModeButton.textContent = 'Day Mode'; // Change the button text to 'Day Mode'
        } else {
            nightModeButton.textContent = 'Night Mode'; // Change the button text back to 'Night Mode'
        }
    });
});


// Simple form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) { // Check if any field is empty
        alert('Please fill in all the fields before submitting.');
        e.preventDefault(); // Prevent form submission
    }
});


