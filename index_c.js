/* Change Contact Section  */

function changeToGithub(){	
	var gitHubButton = document.getElementById("github-contact");
	var emailButton = document.getElementById("email-contact");
	var addressButton = document.getElementById("address-contact");
	var contactLink = document.getElementById("contactLink");
	var contactImg = document.getElementById("contact-img");
	var contactText = document.getElementById("contact-text");
	gitHubButton.className = "contact-li-active";
	emailButton.className = "contact-li";
	addressButton.className = "contact-li";
	contactLink.href = "https://github.com/yichunsung";
	contactImg.src = "github-icon.png";
	contactText.innerHTML = "View My GitHub!";
};
function changeToEmail(){	
	var gitHubButton = document.getElementById("github-contact");
	var emailButton = document.getElementById("email-contact");
	var addressButton = document.getElementById("address-contact");
	var contactLink = document.getElementById("contactLink");
	var contactImg = document.getElementById("contact-img");
	var contactText = document.getElementById("contact-text");
	gitHubButton.className = "contact-li";
	emailButton.className = "contact-li-active";
	addressButton.className = "contact-li";
	contactLink.href = "http://google.com";
	contactImg.src = "email-icon.png";
	contactText.innerHTML = "Send Email to me!";

};
function changeToAddress(){
	var gitHubButton = document.getElementById("github-contact");
	var emailButton = document.getElementById("email-contact");
	var addressButton = document.getElementById("address-contact");
	var contactImg = document.getElementById("contact-img");
	var contactText = document.getElementById("contact-text");
	gitHubButton.className = "contact-li";
	emailButton.className = "contact-li";
	addressButton.className = "contact-li-active";
	contactImg.src = "address-icon.png";
	contactText.innerHTML = "To know where I am!";
};


