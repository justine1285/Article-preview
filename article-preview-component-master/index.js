const iconButton = document.getElementById('icon');
const profile = document.querySelector('.profile');
const blueProfile = document.querySelector('.blue-profile');
const icon = document.getElementById('icon2');

iconButton.addEventListener('click', () => {
    profile.style.display = "none";
    blueProfile.style.display = "flex";
})

icon.addEventListener('click', () => {
    profile.style.display = "flex";
    blueProfile.style.display = "none";
})

