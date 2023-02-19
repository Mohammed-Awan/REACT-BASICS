import React from "react";
import Demo2 from "./Demo2";
// import MadeGoal from "./MadeGoal";
// import MissedGoal from "./MissedGoal";


const Demo = (props) => {
    // const handleClick= (x,y) =>{
    //     alert("The sum of x and y is "+(x+y));
    // };
    // const bool= true;
    // const x=10;
    const arr = ["java", "python", "c", "c++", "java script"];
    // if(bool){
    //     return <MadeGoal />
    // }else{
    //     return <MissedGoal />
    // }
    const handleNamechange = (event) => {
        console.log(event.target.value);
    };
    const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const handlePassword = (event) => {
        if(passwordRegex.test(event.target.value))
        {
            console.log("Correct password");
        }else{
            console.log("Incorrect password");
        }
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
    };
    return (
        <div>Demo component
            <h1>{props.para}</h1>
            <Demo2 para2={props.para} />
            {/* <button onClick={()=>handleClick(10,50)}>10 + 50</button><br />
             <button onClick={()=>handleClick(100,50)}>100 + 50</button>
             {bool && <MadeGoal />} {/*if bool is false madegoal cant render */}
            {/* {bool ? <MadeGoal /> : <MissedGoal />}
             {x>10 ? <MadeGoal /> : <MissedGoal />}  */}
            <ul>
                {arr.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type="text" name="name" onChange={handleNamechange}/>
                <br />
                <label>Password : </label>
                <input type="password" name="password" onChange={handlePassword}/>
                <br />
                <input type="submit" value="submit" />
            </form>

            

            {/* <ol>
                {arr.map((item,i) => (
                    <li key={i}>{item}</li>
                ))}
            </ol> */}
        </div>
    );
};

export default Demo;