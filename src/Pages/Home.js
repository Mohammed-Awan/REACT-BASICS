import React, { useState,useEffect} from "react";
import NavigationBar from "../components/NavigationBar";
import "./Style.css"
import classes from "./Style.module.css";
const Home =() =>
{   
    const [isData ,setIsData]= useState("Hello");
    const myStyle={
        color:"#8352fa",
        backgroundColor:"#84bae3",
        textAlign:"center"
    };
    const handleClick= () =>{
        setIsData("World");
    };
    return(
    <div>
        <NavigationBar />
        <h1 style={{color: "blue", backgroundColor:"cyan"}}>Home Page Component</h1>
        <h3 style={myStyle}>style using object</h3>
        <h3 className="demo">external css</h3>
        <h3 className={classes.body}>CSS modules</h3>
        <h3 className={`${classes.body} demo`}>add more</h3>
        <h1>{isData}</h1>
        <button onClick={handleClick}>Change</button>
    </div>
    );
};
export default Home;