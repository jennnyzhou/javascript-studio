let userData = {}; // Object to store user data

function saveName() {
  let name = document.getElementById('nameInput').value;
  localStorage.setItem('name', name); // Save name to Local Storage
  userData.name = name;
  // Move to next page or process data
}

function saveBday() {
  let bday = document.getElementById('bdayInput').value;
  localStorage.setItem('bday', bday); // Save birthday to Local Storage
  userData.bday = bday;
  // Move to next page or process data
}

function saveLocation() {
  let location = document.getElementById('locationInput').value;
  localStorage.setItem('location', location); // Save location to Local Storage
  userData.location = location;
  // Move to next page or process data
}

function saveJob() {
  let job = document.getElementById('jobInput').value;
  localStorage.setItem('job', job); // Save job to Local Storage
  userData.job = job;
  // Move to next page or process data
}

function savePets() {
  let pets = document.getElementById('petsInput').value;
  localStorage.setItem('pets', pets); // Save pets to Local Storage
  userData.pets = pets;
  // Move to next page or process data
}

function capturePhoto() {
  // Your existing code to capture photo
}

window.onload = function() {
    displayIDCard();
  };

  function displayIDCard() {
    let idcontainer = document.getElementById('container');
    let idTextDiv = document.getElementById('idText');

    let photoDataURL = localStorage.getItem('capturedPhotoData');

    idcontainer.innerHTML = `
    <img src="${photoDataURL}" alt="User photo" style="max-width: 100%; height: 100%;  ">
    `;

    idTextDiv.innerHTML = `
        <h2><span>I</span>dentification <span>C</span>ard</h2>
        <div id = "info">
        <p>Name: ${localStorage.getItem('name')}</p>
        <p>DOB: ${localStorage.getItem('bday')}</p>
        <p>Location: ${localStorage.getItem('location')}</p>
        <p>Job: ${localStorage.getItem('job')}</p>
        <p>Pets: ${localStorage.getItem('pets')}</p>
        </div>
    `;
}
