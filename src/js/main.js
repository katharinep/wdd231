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

function parkInfoTemplate(info) {
  return `
    <a href="${info.url}" class="hero-banner__title">${info.fullName}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation || "National Park"}</span>
      <span>${info.states.replaceAll(",", ", ")}</span>
    </p>
  `;
}

function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  if (!introEl) return;
  introEl.innerHTML = `
    <h1>${data.fullName}</h1>
    <p>${data.description}</p>
  `;
}

function mediaCardTemplate(info) {
  return `<div class="media-card">
  <a href="${info.link}">
  <img src="${info.image}" alt="${info.name}" class="media-card__img">
  <h3 class="media-card__title">${info.name}</h3>
  </a>
 <p>${info.description}</p>
   </div>`;
}
function getMailingAddress(addresses) {
  const mailing = addresses.find((address) => address.type === "Mailing");
  return mailing;
}
function getVoicePhone(numbers) {
  const voice = numbers.find((number) => number.type === "Voice");
  return voice.phoneNumber;
}
function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers);

    return `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${mailing.line1}<p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${voice}</p>
    </section>`
}

function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  infoEl.innerHTML = html.join("");
}

function setFooter(data) {
  const footerEl = document.querySelector("#park-footer");
  footerEl.innerHTML = footerTemplate(data);
}

setHeaderInfo(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);
setFooter(parkData);