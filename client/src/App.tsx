import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import queryClient from "./api/queryClient";
import { Root } from "./routes/Root";
import { Server } from "./apps/Server/Server";
import { Room } from "./apps/Room/Room";
import { AuthLayout } from "./Layouts/AuthLayout";
import { Login } from "./apps/Auth/Login";
import { Game } from "./apps/Game/Game";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='/server/:serverId' element={<Server />}>
        <Route path='/room/:roomId' element={<Room />}>
          <Route path='/game/:gameId' element={<Game />} />
        </Route>
      </Route>
      <Route element={<AuthLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='logout' />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
