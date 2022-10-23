import { APPS } from "./constant"

export const getApp = () => {
   const subdomain = getSubDomain(window.location.hostname);
   const main = APPS.find((app) => app.main);
   if(!main) throw new Error ("Must Have Main App");
   if(subdomain === "") return main.app;
   const app = APPS.find((app) => subdomain === app.subdomain);
   if(!app) return main.app;
    return app.app;
}

const getSubDomain = (location) => {
    const locationPart = location.split(".");
    let sliceTill = -2;
    const isLocalhost = locationPart.slice(-1)[0] === "localhost";
    if(isLocalhost){
        sliceTill = -1;
    }
    return locationPart.slice(0, sliceTill).join("");
}