import React from "react";
import "./App.css";
import FunctionalComp from "./Components/functionalComponent";
import ClassComp from "./Components/ClassComp";
import FParent from "./Props/FParent";
import ClassA from "./State/ClassA";
import Mounting from "./LifeCycleMethod/Mounting";
import Counter from "./LifeCycleMethod/Counter";
import List from "./ListRendering/List";
import Parent from "./UpdatingParentFromChild/Parent";
import Form from "./Refs/Form";
import Table from "./Tables/tables";
import OnClickCounter from "./HOC/counter";
import OnHoverCounter from "./HOC/Hover";
import Fetch from "./Apis.js/Fetch";
import Axios from "./Apis.js/axios";
import MemoClass from "./Memo/ClassComp";
import { Provider } from "./ContextApi/context";
import Fcomp from "./A_Revision/functionalComp";
import MainComp from './HigherOrderComp/MainComp'
function Apps() {
  return (
    <div className="Ap">
      <h2> Hello React </h2>
      <MainComp></MainComp>
      <Fcomp></Fcomp>
      {/* <Provider value="Namespace">
        <MemoClass></MemoClass>
      </Provider> */}
      {/* <OnClickCounter></OnClickCounter>
      <OnHoverCounter></OnHoverCounter> */}
      {/* <Fetch></Fetch>
   <Axios></Axios> */}
      {/* <Parent></Parent>
      <Form></Form>
      <Table></Table> */}
      <List></List>
      {/* <FunctionalComp></FunctionalComp> ctrl+ /
      <ClassComp></ClassComp>
      <FParent></FParent>
      <ClassA></ClassA> */}
      {/* <Counter></Counter> */}
    </div>
  );
}

export default Apps;

/*
index.html (<div id ="root"> </div>)
 App.js
 App.css (styling)
 index.js ( rendering App to the root )
 index.css
*/
