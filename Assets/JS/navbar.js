// Sidebar menu function
function openNav() {
  document.getElementById("sideBar").style.width = "250px";
  document.querySelector(".fa-bars").style.display = "none";
}

function closeNav() {
  document.getElementById("sideBar").style.width = "0";
  document.querySelector(".fa-bars").style.display = "block";
}

// Gallery Section function
function openGallery() {
  document.querySelector(".gallerySection").style.width = "100%";
  sessionStorage.setItem("gallerySectionOpen", "true");
}

function closeGallery() {
  document.querySelector(".gallerySection").style.width = "0";
  sessionStorage.removeItem("gallerySectionOpen");
}

// Projects Section function
function openProjects() {
  document.querySelector(".projectsSection").style.width = "100%";
  sessionStorage.setItem("projectsSectionOpen", "true");
}

function closeProjects() {
  document.querySelector(".projectsSection").style.width = "0";
  sessionStorage.removeItem("projectsSectionOpen");
}

// About Section function
function openAbout() {
  document.querySelector(".aboutSection").style.width = "100%";
  sessionStorage.setItem("aboutSectionOpen", "true");
}

function closeAbout() {
  document.querySelector(".aboutSection").style.width = "0";
  sessionStorage.removeItem("aboutSectionOpen");
}

// Contact Section function
function openContact() {
  document.querySelector(".contactSection").style.width = "100%";
  sessionStorage.setItem("contactSectionOpen", "true");
}

function closeContact() {
  document.querySelector(".contactSection").style.width = "0";
  sessionStorage.removeItem("contactSectionOpen");
}

// Services Section function
function openServices() {
  document.querySelector(".servicesSection").style.width = "100%";
  sessionStorage.setItem("servicesSectionOpen", "true");
}

function closeServices() {
  document.querySelector(".servicesSection").style.width = "0";
  sessionStorage.removeItem("servicesSectionOpen");
}

// Pricing Section function
function openPricing() {
  document.querySelector(".pricingSection").style.width = "100%";
  sessionStorage.setItem("pricingSectionOpen", "true");
}

function closePricing() {
  document.querySelector(".pricingSection").style.width = "0";
  sessionStorage.removeItem("pricingSectionOpen");
}

// Check if sections were open on page load
window.addEventListener("load", function () {
  if (sessionStorage.getItem("gallerySectionOpen")) {
    openGallery();
  }

  if (sessionStorage.getItem("projectsSectionOpen")) {
    openProjects();
  }

  if (sessionStorage.getItem("aboutSectionOpen")) {
    openAbout();
  }

  if (sessionStorage.getItem("contactSectionOpen")) {
    openContact();
  }
  if (sessionStorage.getItem("servicesSectionOpen")) {
    openServices();
  }
  if (sessionStorage.getItem("pricingSectionOpen")) {
    openPricing();
  }
});