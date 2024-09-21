const menuButton=document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close");
const navigationBar = document.getElementById("navbar");

// Select all the tabs
const tabs = document.querySelectorAll(".feature-tab");
// Set initial content
const content = {
  1: {
    image: "./images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  2: {
    image: "./images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to search through all your bookmarks.",
  },
  3: {
    image: "./images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
};

// Function to update the content based on the active tab
function updateContent(tabNumber) {
  const featureImage = document
    .getElementById("feature-image")
    .querySelector("img");
  const featureContent = document.getElementById("feature-content");
  const { image, title, description } = content[tabNumber];

  // Update the image and content
  featureImage.src = image;
  featureContent.querySelector("h3").innerText = title;
  featureContent.querySelector("p").innerText = description;

  // Remove active-tab class from all tabs and add to the clicked one
  tabs.forEach((tab) => {
    tab.classList.remove("active-tab", "text-primaryred");
  });
  document
    .querySelector(`.feature-tab[data-tab="${tabNumber}"]`)
    .classList.add("active-tab", "text-primaryred");
}

// Add click event to all tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const tabNumber = e.target.getAttribute("data-tab");
    updateContent(tabNumber);
  });
});


// Add click event to the menu button
menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  navigationBar.classList.toggle("hidden");
});

// Add click event to the close button
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    navigationBar.classList.toggle("hidden");
});