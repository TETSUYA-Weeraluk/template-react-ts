import { RouteObject } from "react-router-dom";
import Home from "../../pages/Home/Home";
import PokemonDetailPage from "../../pages/Home/PokemonDetailPage";

export const route_home: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "pokemon/:name",
    element: <PokemonDetailPage />,
  },
];
