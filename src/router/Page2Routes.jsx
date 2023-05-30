import { Page2 } from "../pages/Page2";
import { UrlParameter } from "../pages/UrlParameter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />,
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />,
  },
];
