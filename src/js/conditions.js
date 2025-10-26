import "../css/style.css";
import "../css/conditions.css";

import { getParkData, getParkAlert, getParkVisitorCenters } from "./parkService.mjs";
import { alertTemplate, activityListTemplate, visitorCenterTemplate} from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const html = alerts.map(alertTemplate);
  alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
}

function getVisitorCenterData(parkCode) {

}

function setVisitorsCenters(centers) {
    const centersContainer = document.querySelector(".activities-list");
    const html = centers.map(visitorCenterTemplate);
    centersContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setActivities(activities) {
    const activitiesContainer = document.querySelector(".activities ul");
    const html = activityListTemplate(activities);
    activitiesContainer.insertAdjacentHTML("afterbegin", html);
}

async function init() {
  const parkData = await getParkData();
  const alerts = await getParkAlerts(parkData.parkCode);
  setHeaderFooter(parkData);
  setAlerts(alerts);
  setVisitorCenters(visitorCenters);
  setActivities(parkData.activities);
}

init();