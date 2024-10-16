const root = document.querySelector(".root");

window.onload = () => {
    alert("Selamat datang di website! Silakan isi form di bawah.");
};

// Header
const hWrapper = document.createElement("div");
hWrapper.classList.add("hWrapper");
const header = document.createElement('h1');
header.innerText = "Tugas-2 Praktikum Pemrograman Web";
header.classList.add("header");
hWrapper.append(header);
root.append(hWrapper);

// Main Content
const mainContent = document.createElement("div");
mainContent.classList.add("main-content");
root.appendChild(mainContent);

// Form
const form = document.createElement("form");
const formContainer = document.createElement("div");

// Username
const usernameWrp = document.createElement("div");
const usernameLabel = document.createElement("label");
usernameLabel.htmlFor = "usernameInput";
usernameLabel.innerText = 'Username';
const usernameInput = document.createElement("input");
usernameInput.type = "text";
usernameInput.id = "usernameInput";
usernameInput.placeholder = "Aryasatya Wicaksana";
usernameInput.required = "true";
usernameWrp.append(usernameLabel, usernameInput);
formContainer.appendChild(usernameWrp);

// NIM
const nimWrp = document.createElement("div");
const nimLabel = document.createElement("label");
nimLabel.htmlFor = 'nimInput';
nimLabel.innerText = "NIM";
const nimInput = document.createElement("input");
nimInput.type = "text";
nimInput.id = 'nimInput';
nimInput.placeholder = '231401114';
nimInput.required = "true";
nimWrp.append(nimLabel, nimInput);
formContainer.appendChild(nimWrp);

// KOM
const komWrp = document.createElement("div");
const komLabel = document.createElement("label");
komLabel.htmlFor = 'komInput';
komLabel.innerText = "KOM";
const komInput = document.createElement("input");
komInput.type = 'text';
komInput.id = "komInput";
komInput.placeholder = 'C';
komInput.required = "true";
komWrp.append(komLabel, komInput);
formContainer.appendChild(komWrp);

// Photo
const photoWrp = document.createElement("div");
const photoLabel = document.createElement("label");
photoLabel.htmlFor = "photoInput";
photoLabel.innerText = "Upload Photo";
const photoInput = document.createElement("input");
photoInput.type = "file";
photoInput.id = "photoInput";
photoInput.accept = "image/png, image/jpeg";
photoInput.required = "true";
photoWrp.append(photoLabel, photoInput);
formContainer.appendChild(photoWrp);

// Submit
const submit = document.createElement("input");
submit.type = "submit";
formContainer.append(submit);
form.append(formContainer);
mainContent.append(form);

// Display Container
const displayContainer = document.createElement('div');
displayContainer.classList.add("display-container");
mainContent.append(displayContainer);
displayContainer.style.display = "none";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const nim = nimInput.value;
    const kom = komInput.value;
    const photoFile = photoInput.files[0];

    // Create new card
    const card = document.createElement("div");
    card.classList.add("card");
    const img = document.createElement("img");
    img.src = URL.createObjectURL(photoFile);
    img.alt = "User Photo";
    const usernameText = document.createElement('p');
    usernameText.innerText = "Username: " + username;
    const nimText = document.createElement('p');
    nimText.innerText = "NIM: " + nim;
    const komText = document.createElement('p');
    komText.innerText = "KOM: " + kom;
    card.append(img, usernameText, nimText, komText);

    // Clear old content and add new card
    displayContainer.append(card);

    // Show display container
    displayContainer.style.display = "flex";

    // Show alert on form submit
    alert("Form berhasil disubmit!");
});
