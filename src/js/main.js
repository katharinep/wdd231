import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function setHeaderInfo(data) {
    const disclaimer = document.querySelector(".disclaimer > a");
    if (disclaimer) {
        disclaimer.href = data.url;
        disclaimer.innerHTML = data.fullName;
    }

    document.querySelector("head > title").textContent = data.fullName;
    document.querySelector(".hero-banner > img").src = data.images[0].url;
    document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(data);
}

const parkInfoLinks = [
  {
    name: "Current Conditions &#x203A;",
    link: "conditions.html",
    image: parkData.images[2].url,
    description:
      "See what conditions to expect in the park before leaving on your trip!"
  },
  {
    name: "Fees and Passes &#x203A;",
    link: "fees.html",
    image: parkData.images[3].url,
    description: "Learn about the fees and passes that are available."
  },
  {
    name: "Visitor Centers &#x203A;",
    link: "visitor_centers.html",
    image: parkData.images[9].url,
    description: "Learn about the visitor centers in the park."
  }
];

function parkInfoTemplate(info) {
  return `
    <a href="${info.url}" class="hero-banner__title">${info.fullName}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation || "National Park"}</span>
      <span>${info.states.replaceAll(",", ", ")}</span>
    </p>
  `;
}

setHeaderInfo(parkData);