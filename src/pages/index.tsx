import type { RouteObject } from "react-router-dom";

import NotFound from "./NotFound";
import Play from "./Home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Play />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
