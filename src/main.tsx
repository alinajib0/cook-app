import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import {
  Signin,
  Signup,
  VerificationCode,
  ForgotPassword,
  Home,
  Profile,
  CreateRecipe,
  RecipeDetails,
} from "@/pages";
import RootLayout from "@/layouts/RootLayout";
import HomeLayout from "@/layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "auth",
        children: [
          {
            path: "signin",
            Component: Signin,
          },
          {
            path: "signup",
            Component: Signup,
          },
          {
            path: "verificationCode",
            Component: VerificationCode,
          },
          {
            path: "forgotPassword",
            Component: ForgotPassword,
          },
        ],
      },
      {
        Component: HomeLayout,
        children: [
          {
            path: "home",
            Component: Home,
          },
          {
            path: "profile",
            children: [
              {
                path: ":id",
                Component: Profile,
              },
            ],
          },
          {
            path: "createRecipe",
            Component: CreateRecipe,
          },
          {
            path: "recipe/:id",
            Component: RecipeDetails,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
