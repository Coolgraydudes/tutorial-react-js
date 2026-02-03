import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import HelloWorld from "./HelloWorld";
import Container from "../container/Container";
import "../card/Card.css"
import Table from "../Table/Table";
import AlertButton from "../Button/AlertButton";
import MyButton from "../Button/MyButton";
import ToolBar from "../Button/ToolBar";
import Search from "../form/Search";
import SayHello from "../form/SayHello";
import Counter from "../form/Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld/>
      <Table/>
      <AlertButton text="Click saya" message="EELLOooooooooooooooooooooooooooo"/>
      <MyButton text="SMASH ME!" onSmash={() => alert("You Smash me")}/>
      <ToolBar onClick={(e) =>{
        e.stopPropagation()
        alert("You click toolbar")}}/>
      <Search/>
      <SayHello/>
      <Counter/>
    </Container>
  </StrictMode>
) 