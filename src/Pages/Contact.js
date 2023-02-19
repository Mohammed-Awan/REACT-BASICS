import React, { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
const Contact = () => {
    const [isName, setIsName] = useState("");
    const [isPass, setIsPass] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() =>{
        const interval= setInterval(() =>{
            setCount((count) => count +1 );
        },1000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(isName, isPass);
    };
    const handleNameChange = (event) => {
        setIsName(event.target.value);
    };
    const handlePassChange = (event) => {
        setIsPass(event.target.value);
    };
    return (
        <div>
            <NavigationBar />
            <h1>Contact page component</h1>

            <h1>{count}</h1>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" onChange={handleNameChange} /><br />
                <label>Password</label>
                <input type="password" name="password" onChange={handlePassChange} /><br />
                <input type="submit" name="submit" />

            </form>
        </div>
    );
};
export default Contact;