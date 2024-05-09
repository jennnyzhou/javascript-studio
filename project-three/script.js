let userData = {}; // Object to store user data

// Functions to save user data
function saveName() {
  let name = document.getElementById('nameInput').value;
  localStorage.setItem('name', name); // Save name to Local Storage
  userData.name = name;
  // Move to next page or process data
}

function saveBday() {
  let bday = document.getElementById('bdayInput').value;
  localStorage.setItem('bday', bday); 
  userData.bday = bday;
}

function saveLocation() {
  let location = document.getElementById('locationInput').value;
  localStorage.setItem('location', location); 
  userData.location = location;
}

function saveJob() {
  let job = document.getElementById('jobInput').value;
  localStorage.setItem('job', job); 
  userData.job = job;
}

function savePets() {
  let pets = document.getElementById('petsInput').value;
  localStorage.setItem('pets', pets); 
  userData.pets = pets;
}

function capturePhoto() {
  // Implement functionality to capture photo
}

// // Display ID card function
// function displayIDCard() {
//   let idcontainer = document.getElementById('container');
//   let idTextDiv = document.getElementById('idText');

//   let photoDataURL = localStorage.getItem('capturedPhotoData');

//   idcontainer.innerHTML = `
//     <img src="${photoDataURL}" alt="User photo" style="max-width: 100%; height: 100%;">
//   `;

//   idTextDiv.innerHTML = `
//     <h2><span>I</span>dentification< <span>C</span>ard</h2>
//     <div id="info">
//       <p>Name: ${localStorage.getItem('name')}</p>
//       <p>DOB: ${localStorage.getItem('bday')}</p>
//       <p>Location: ${localStorage.getItem('location')}</p>
//       <p>Job: ${localStorage.getItem('job')}</p>
//       <p>Pets: ${localStorage.getItem('pets')}</p>
//     </div>
//   `;
// }

function applyCustomization() {
  // Retrieve user's font and color choices from local storage
  let selectedFont = localStorage.getItem('selectedFont');
  let selectedColor = localStorage.getItem('selectedColor');

  // Apply user's customization to ID card elements
  let idCard = document.getElementById('idCard');
  idCard.style.fontFamily = selectedFont;
  idCard.style.color = selectedColor;
}

function displayIDCard() {
  let idcontainer = document.getElementById('container');
  let idTextDiv = document.getElementById('idText');

  let selectedFont = localStorage.getItem('selectedFont');
  let selectedColor = localStorage.getItem('selectedColor');

  let photoDataURL = localStorage.getItem('capturedPhotoData');

  idcontainer.innerHTML = `
    <img src="${photoDataURL}" alt="User photo" style="max-width: 100%; height: 100%;">
  `;

  let userInfoHTML = '<div class="title"><h2><span>I</span>dentification <span>C</span>ard</h2><div id="info">';
  let displayedCategories = new Set();

  // Display name if available
  let name = localStorage.getItem('name');
  if (name) {
    userInfoHTML += `<p>Name: ${name}</p>`;
    displayedCategories.add('name');
  }

  // Iterate through other categories to display selected questions and answers
  questions.forEach(question => {
    let category = question.category;
    let answer = localStorage.getItem(category);
    let selectedQuestion = JSON.parse(localStorage.getItem(category + 'SelectedQuestion'));

    if (answer && !displayedCategories.has(category) && selectedQuestion) {
      userInfoHTML += `<p>${selectedQuestion.text}: ${answer}</p>`;
      displayedCategories.add(category);
    }
  });

  userInfoHTML += '</div>';
  idTextDiv.innerHTML = userInfoHTML;
}





// Array of questions
const questions = [
  { text: "What is your preferred name?", category: "name" },
  { text: "What's your date of birth?", category: "bday" },
  { text: "What's your zodiac sign?", category: "bday" },
  { text: "What's your MBTI type?", category: "bday" },
  { text: "What zodiac sign do you dislike?", category: "bday" },
  { text: "What's your location?", category: "location" },
  { text: "What's your favorite city?", category: "location" },
  { text: "What's your dream destination?", category: "location" },
  { text: "Where are you from?", category: "location" },
  { text: "What's your favorite New York deli?", category: "location" },
  { text: "What's your favorite park?", category: "location" },
  { text: "What's your dream job?", category: "job" },
  { text: "What's the name of your boss?", category: "job" },
  { text: "Where do you work?", category: "job" },
  { text: "Are you your own boss?", category: "job" },
  { text: "What do you study?", category: "job" },
  { text: "What pets do you have?", category: "pets" },
  { text: "What's your dream pet?", category: "pets" },
  { text: "What's the name of your pet?", category: "pets" },
  { text: "What's your favorite type of shark?", category: "pets" },
  { text: "What's the craziest animal you've eaten?", category: "pets" },
  { text: "What would you name your pet fish?", category: "pets" },
];

// Function to display a random question based on category
// function displayRandomQuestion(category) {

//   let categoryQuestions = questions.filter(question => question.category === category);
  

//   if (categoryQuestions.length === 0) {
//     console.error(`No questions available for category: ${category}`);
//     return;
//   }


//   let randomIndex = Math.floor(Math.random() * categoryQuestions.length);
//   let randomQuestion = categoryQuestions[randomIndex];
//   let questionText = document.getElementById('questionText');
//   if (questionText) {

//     questionText.textContent = randomQuestion.text;
//   }
// }

function displayRandomQuestion(category) {
  let categoryQuestions = questions.filter(question => question.category === category);

  if (categoryQuestions.length === 0) {
    console.error(`No questions available for category: ${category}`);
    return;
  }

  let randomIndex = Math.floor(Math.random() * categoryQuestions.length);
  let selectedQuestion = categoryQuestions[randomIndex];
  localStorage.setItem(category + 'SelectedQuestion', JSON.stringify(selectedQuestion)); // Store selected question with category prefix

  let questionText = document.getElementById('questionText');
  if (questionText) {
    questionText.textContent = selectedQuestion.text;
  }
}




window.onload = function() {
  if (document.getElementById('bdayInput')) {
    displayRandomQuestion("bday");
  } else if (document.getElementById('locationInput')) {
    displayRandomQuestion("location");
  } else if (document.getElementById('jobInput')) {
    displayRandomQuestion("job");
  } else if (document.getElementById('petsInput')) {
    displayRandomQuestion("pets");
  } else {
    // If none of the input elements are present, display the ID card
    displayIDCard();
  }
};

