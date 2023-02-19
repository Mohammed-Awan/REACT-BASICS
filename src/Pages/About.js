import axios from "axios";
import React, {useState,useEffect} from "react";
import NavigationBar from "../components/NavigationBar";

const About = () =>{
    const [isData,setIsData] = useState([]);
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
            setIsData(res.data);
            console.log(res.data);
        });
    }, []);
    return(
    <div>
        <NavigationBar />
        <h1>About page component</h1>
        {isData.map((item)=>(
            <div key={item.id}>
                <p>{item.title}</p>
            </div>
        ))}
    </div>
    );
};
export default About;