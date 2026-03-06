/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {useHydratePosts} from './useBootstrapPosts'


//create a react component
export function AppBootstrap() {
  useHydratePosts()
  return null
}
