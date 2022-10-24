import { IndexRoutes, SubRoutes } from "./IndexRoutes";

export const APPS = [
  {
    subdomain: "www",
    app: IndexRoutes,
    main: true,
  },
  {
    subdomain: "dashboard",
    app: SubRoutes,
    main: false,
  },
];
