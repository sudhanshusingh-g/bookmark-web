const menuButton=document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close");
const faqAnswer = document.querySelector(".faq-answer");
// Select all the tabs
const tabs = document.querySelectorAll(".feature-tab");

// Content mapping for the three tabs
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
  const featureImage = document.getElementById("feature-image").querySelector("img");
  const featureContent = document.getElementById("feature-content");
  const { image, title, description } = content[tabNumber];

  // Update the image and content
  featureImage.src = image;
  featureContent.querySelector("h3").innerText = title;
  featureContent.querySelector("p").innerText = description;

  // Remove active-tab class from all tabs and add to the clicked one
  tabs.forEach((tab) => {
    tab.classList.remove("text-primaryred", "after:opacity-100");
    tab.classList.add("text-neutralgrayblue", "after:opacity-0");
  });

  const activeTab = document.querySelector(`.feature-tab[data-tab="${tabNumber}"]`);
  activeTab.classList.remove("text-neutralgrayblue", "after:opacity-0");
  activeTab.classList.add("text-primaryred", "after:opacity-100");
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
});

// Add click event to the close button
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

function toggleAnswer(faqItem) {
  const faqAnswer = faqItem.querySelector(".faq-answer");
  const svgIcon = faqItem.querySelector("svg");
  const faqQuestion = faqItem.querySelector(".faq-question");

  // Toggle the hidden class on the answer to show or hide it
  faqAnswer.classList.toggle("hidden");

  // Toggle the arrow direction by adding/removing a rotate class
  svgIcon.classList.toggle("rotate-180");

  // Toggle the color of the arrow and the question text
  // faqQuestion.classList.toggle("text-primaryred");
  svgIcon.classList.toggle("stroke-primaryred");
}
