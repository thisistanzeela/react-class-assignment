// import "./App.css";

// a component is a js function..

// function

// rule......
// -- it must begin with pascal-case(HelloWorld)...

// for using component....<App />......
// normal function.............
// export function App(){
//     return (
//         <div>
//             <span>hello</span>
//         </div>
//     )
// }




// arrow function..............

// export const App=() =>{
//     return <h1>Hello</h1>; 
// }

// .....ORR......
// const App=() => <h1>Hello</h1>;







// ....................Props..............
//-- Biggest advantage of props is  we can Re-use Components...

// --Its an idea inspired by the func below--
// function greet(userName){
//     return 'hey, how r u, ${userName} ?';
// }
// greet('Anam');

// const OnePlusCard= () =>{
//     <div className="card">
//        <h2 className="title">One Plus</h2>
//        <h3> Bean Blue, Int the ear</h3>
//     </div> 
// };

// const BoatCard= () =>{
//     <div className="card">
//        <h2 className="title">boAT Rockerz</h2>
//        <h3> White Purity, on the Ear</h3>
//     </div> 
// };


//--- here we can named the props parameters with anything.....like(const ProductCard=(anything)=>{})

// const ProductCard= (props) => {
//     const { productName, description } = props;
//     return (
//         <div className="card">
//             <h2 className="title">{productName}</h2>
//             <h3>{description}</h3>
//         </div>
//     )
// };

// export const App=() =>{
//     return (
//         <div className="container">
//             <ProductCard 
//                 productName="boAT Rockerz"
//                 description="White Purity, On the Ear"
//             />
//             <ProductCard 
//                 productName="One Plus"
//                 description="Bean Blue, In the Ear"
//             />
//         </div> 
//     );
// }

// export default App;








// -----Creating comp for accordion.....

// const  Accordion = ({title , label})=>{
//     return (
//         <div>
//             <h3>{title}</h3>
//             <form>
//                 <div>
//                     <input type="checkbox" />
//                      <label>{label}</label>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export const App =() =>{
//     return (
//        <div>
//           <Accordion title="DISCOUNT" label="50% or more"  />
//           <Accordion title="MICROPHONE PRESENT" label="Yes" />
//        </div>
//     )
// }




// -----------Props TYPES......................
// const Child = (props) =>{
//     // one way of nested destructuring...
//     const {userName,age , isMarried, hobbies, userLocation } =props;

//     // const married= isMarried ? "Yes" : "No";
//     return(
//         <div>
//             <p>Name : {userName}</p>
//             {/* <p>Name : {userName.name}</p> */}
//             <p>Age : {age}</p>
//             {isMarried && <p>Married :Yes </p>}
//             <p>Hobby : {hobbies[0]}</p>
//         </div>
//     )
// }


// const App = () => {
//     return(
//         <main>
//             <Child 
//             // if we want to send individual props...
//                 userName="Eric" 
//                 age={20} 
//                 isMarried={false}  
//                 hobbies={["Singing", "Sleeping"]} 
//                 userLocation={ {city:"Paris", country:"France"} }

//             //if we want to send all props as one obj..
            
//             // user={
//             //     {
//             //         name:"Eric",
//             //         age: 20,
//             //     }
//             // }
//             />
//         </main>
//     );
// };


/* -----Condition rendering ............*/
// const UserChatCard = ({user})=>{
//     return (
//         <div>
//             <h3>{user}</h3>
//             {/* Circle Online Indicator */}
//             <span className="green-dot"  />
//         </div>
//     )
// }
// const App=() =>{
//     return(
//         <UserChatCard
//           user="Dulquer"
//         />
//     );
// };
// export default App;












// const UserChatCard = ({ user, isOnline }) => {
//         if (!isOnline) {
//       return <p>{user} Not online!</p>;
//     }
  
//     return (
//       <div className="user-chat-card-container">
//         <h3>{user}</h3>
//         <span className="green-dot" />
//       </div>
//     );
//   };
  
//   const App = () => {
//     return (
//       <main>
//         <UserChatCard user="Aditya" isOnline={true} />
//         <UserChatCard user="Abdur" isOnline={false} />
//         <UserChatCard user="Afroj" isOnline={false} />
//       </main>
//     );
//   };


// const UserChatCard = ({ user, isOnline }) => {
//     if (!isOnline) {
//       return (
//         <div className="user-chat-card-container offline">
//           <h3>{user}</h3>
//           <span className="offline-dot" />
//         </div>
//       );
//     }
  
//     return (
//       <div className="user-chat-card-container">
//         <h3>{user}</h3>
//         <span className="online-dot" />
//       </div>
//     );
//   };
  
// const App = () => {
//     return (
//       <main>
//         <UserChatCard user="Aditya" isOnline={true} />
//         <UserChatCard user="Abdur" isOnline={false} />
//         <UserChatCard user="Afroj" isOnline={false} />
//       </main>
//     );
//   };
  
  
//   export default App;

//   const Avatar = ({ size, src }) => {
//     const dimensions = size === "s" ? { width: 50, height: 50 } : { width: 100, height: 100 };
//     return <img src={src} {...dimensions} className="avatar" />;
//   };




// const Avatar = ({ size, src }) => {
//     const sizes = { s: 50, m: 100 };
//   <img
//     src={src}
//     width={sizes[size] || sizes.m}
//     height={sizes[size] || sizes.m}
//     className="avatar"
//   />
// };

// const Avatar = ({ size, src }) => {
//     const sizes = {
//       s: { width: 40, height: 50 },
//       m: { width: 120, height: 100 },
//       l: { width: 150, height: 180 },
//     };
//     const { width, height } = sizes[size] || sizes.m;
//     return <img src={src} width={width} height={height} className="avatar" />;
// };

// const App = () => {
//     return (
//       <div>
//         {/* Avatar can accept two sizes : "s" and "m" */}
//         <Avatar
//           size="m"
//           src="https://static.independent.co.uk/2020/11/12/16/newFile-14.jpg?width=1200"
//         />
//         <Avatar
//           size="s"
//           src="https://c4.wallpaperflare.com/wallpaper/819/537/101/movie-spider-man-into-the-spider-verse-marvel-comics-miles-morales-spider-man-hd-wallpaper-preview.jpg"
//         />
//          <Avatar
//           size="l"
//           src="https://static.independent.co.uk/2020/11/12/16/newFile-14.jpg?width=1200"
//         />
//       </div>
//     );
//   };






// -----rendering lists....


// const App = () => {

//     const items = ["Nike", "Adidas", "Onitsuka Tiger", "Puma"];

//     const result = items.map((item)=> <li>{item}</li>);
  
//     return (
//       <main>
//         <ul>
//           {result}
//         </ul>
//       </main>
//     );
// };

// --another example of simple list........

// const App=()=>{
    // const phones=["iPhone 11","iPhone 12","pixel 6", "Oppo","Vivo"];

    // return(
    //     <div>
    //         {phones.map((phone) =>(
    //             <p>{phone}</p>
    //        ))}
    //     </div>
    // )

//     const phones=[
//         {name :"iPhone 11" , rating:4.7},
//         { name:"iPhone 12", rating: 4.8},
//         {name :"Pixel" , rating:5}
//     ]
//     return(
//         <div>
//             {phones.map((phone)=>(
//                 <div>
//                     <h4>{phone.name}</h4>
//                     <p>{phone.rating}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };


// 04-05--
// const students = [
//     {
//       id: 1,
//       name: "Jesica",
//       score: 50,
//     },
//     {
//       id: 2,
//       name: "Amrutha",
//       score: 70,
//     },
//     {
//       id: 3,
//       name: "Tasha",
//       score: 40,
//     },
//     {
//       id: 4,
//       name: "Kiran",
//       score: 100,
//     },
//   ];
  
//   const App = () => {
//     const highScorers = students.filter(student => student.score >= 70).map(student => student.name);
  
//     return (
//       <div>
//         <h1>High Scorers</h1>
//         <ul>
//           {highScorers.map(name => <li >{name}</li>)}
//         </ul>
       
//       </div>
//     );
//   }

// const App=() =>{
//     const phones=["iPhone","Samsung","Pixel"];

// ........one way.......
    // const phonesWithJsx=[<h1>iPhone</h1>,<h1>Samsung</h1>,<h1>Pixel</h1>];

     // return(
     //     <main>{phonesWithJsx}</main>
     // )

//......... 2nd way................
    // const phonesWithJsx=[];
    // for(const phone of phones){
    //     const jsxElement=<h1>{phone}</h1>;
    //     phonesWithJsx.push(jsxElement);
    // }
    // return(
    //     <main>
    //         {phonesWithJsx}
    //     </main>
    // )

// ......3rd way.........
    // const phonesWithJsx=phones.map((phone)=>{
    //     const jsxElement=<h1>{phone}</h1>;

    //     return jsxElement;
    // });

    // return<main>{phonesWithJsx}</main>

//...... my way......
    // const phonesWithJsx = phones.map((phones) => <h1>{phones}</h1>);
    // return <div>{phonesWithJsx}</div>;
// }



// .................

// const App = () => {
//     const scores = [10, 20, 30, 40, 50];
    //...... one way of writting...................
    // const filteredScores=scores.filter((score)=>score >=30);
    
    // return(
    //     <main>
    //         {filteredScores.map((score)=>{
    //             return<h1>Score is : {score}</h1>
    //         })}
    //     </main>
    // )
// .........another way................
     
    // return(
    //     <main>
    //         {scores
    //         .filter((score)=> score >= 30)
    //         .map((score)=>{
    //             return<h1>Score is : {score}</h1>
    //         })}
    //     </main>
    // )


//............if score is less than 30 print result as fail and if score is greater than eql to 30 result it pass and take score in h4 and result in h3.................

// -----one way....using if-else---

    // const scoresResult = scores.map(score => {
    //   let result = '';
    //   if (score < 30) {
    //     result = 'Fail';
    //   } else {
    //     result = 'Pass';
    //   }
    //   return (
    //     <div>
    //       <h4>Score: {score}</h4>
    //       <h3>Result: {result}</h3>
    //     </div>
    //   );
    // });
  
    // return (
    //   <div>
    //     {scoresResult}
    //   </div>
    // );

// -------another way.....by ternary operator....
//   const scoresResult = scores.map(score => {
//     const result = score < 30 ? 'Fail' : 'Pass';
//     return (
//       <div>
//         <h4>Score: {score}</h4>
//         <h3>Result: {result}</h3>
//       </div>
//     );
//   });

//   return (
//     <div>
//       {scoresResult}
//     </div>
//   );

// --------another way...........
// return (
//     <div>
//       {scores.map(score => (
//         <div>
//           <h4>Score: {score}</h4>
//           <h3>Result: {score < 30 ? 'Fail' : 'Pass'}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };



// -----------children props--------------

// const Button=(props) =>{
//     return <button>{props.children}</button>
// }
// const App=()=>{
//     return(
//         <main>
//             <Button>Click Me</Button>
//         </main>
//     )
// }

// const Layout=(props) =>{
//     return(
//         <main>
//             {props.children}
//             <Button>Click Me</Button>
//         </main>
//     );
// };

// const App=()=>{
//     return(
//         <main>
//             <Layout>
//                 <header>This is a header</header>
//                 <nav>This is a nav</nav>
//                 <h1>Heading here</h1>
//                 <footer>Footer here</footer>
//             </Layout>
//         </main>
//     )
// }



// 05-05.................
// export default App;








// ...09-05.....................

// --------------EVENTS--------------
// const App=() =>{
//     // Most common event on a button is the "click" event......
    
//     // we want to call this func when we click on the button..

//     // name of the event handler can be whatever we want..

//     // standard--> handle(type of event)
//     // ex--> for click--> handleClick,for scroll->handleScroll..
//     function handleClick(){

//         console.log("button clicked");
//     }
//     // call a function on click on a button..
//     // All event handlers are camelCse by default..

//     // onClick--> Always requires a callback function..
//     // dont call the function here..
//     return <button onClick={handleClick}>Click me</button>
// }




// const App =() =>{

    // most of the html elements have the onClick listener..

    // event handler func can either be normal or arrow no diff..
    // function handleAnchorClick(){
    //     console.log("clicked by anchor")
    // };

    // const handleDivClick=()=>{
    //        console.log("clicked by div")
    // };
    // const handleSpanClick= ()=>{
    //     console.log("clicked by span.")
    // }
    // return (
    //     <main>
    //         <a onClick={handleAnchorClick}>Google</a>
    //         <div className="container" onClick={handleDivClick}>div</div>
    //         <span onClick={handleSpanClick}>span</span>
    //     </main>
    // )


    // one handler for multiple elements..................
    // const handleClick = () =>{
    //     console.log("handle click")
    // }





//     //---- ANOTHER way of adding func for events handler-----

//     // METHOD 1: Creating a function outside JSX...
//     function handleClick(){
//         console.log("Clicked by an element")
//     }

//     return (
//         <main>
//             <a onClick={handleClick}>Google</a>
//            <div className="container" onClick={handleClick}>div</div>


//            {/* Method 2: Creatin a func inside JSX */}
//             <span 
//                 onClick={() =>{
//                     console.log("Span is clicked")
//                 }}
//             >
//                 This is span</span>
//          </main>
//     )
// };


//...... Event object..........
// const App=()=>{
 
//     // React will pass the event obj because react is in control of 
//     // when to call the handleClick func

//     // its up to us , whether we want to 
//     const handleClick= (event) =>{
//     //  console.log(event)
//      console.log(event.target);    //most commonly used property on event is event.target..

//      dummyFunctionOne();
//      dummyFunctiontwo();
//      dummyFunctionthree();

//     }
//     return(
//         <main>
//             <a id="anchor" onClick={handleClick}>Google</a>
//             <div className="container" onClick={handleClick}>div</div>
            
            
//             {/* Method 2: Creating a func inside JSX */}
//             <span 
//                 onClick={(event) =>{
//                     console.log("Span is clicked")
//                 }}
//                 >
//                 This is span
//             </span>
//         </main>
//     )
// }


// ........................

// const App = () => {
    // Objective : When One, Two or Three buttons are clicked, print the
    // respective console logs :
    // "One has been clicked"
    // "Two has been clicked"
    // "Three has been clicked"
  
    // Method 1 : Using three separate functions
    // const handleOneButton = () => {
    //   console.log("One has been clicked");
    // };
    // const handleTwoButton = () => {
    //   console.log("Two has been clicked");
    // };
    // const handleThreeButton = () => {
    //   console.log("Three has been clicked");
    // };
  
    // Method 2 :
    // Create one function that handles all three buttons
//     const handleClick = (event) => {
//       console.log(`${event.target.id} has been clicked!`);
//     };
  
//     return (
//       <main>
//         <button id="One" onClick={handleClick}>
//           One
//         </button>
//         <button id="Two" onClick={handleClick}>
//           Two
//         </button>
//         <button id="Three" onClick={handleClick}>
//           Three
//         </button>
//       </main>
//     );
//   };



// Arguments inside the event handlers..................

// const App = () => {
//     const handleClick = (parameter) => {
//       console.log(parameter);
//     };
  
//     return (
//       <main>
//         {/* Using this way, we cannot pass any other argument, apart from the 
//         event object that's passed by React itself */}
//         {/* <button onClick={handleClick}>One</button>
//         <button onClick={handleClick}>Two</button>
//         <button onClick={handleClick}>Three</button> */}
  
//         <button
//           onClick={(event) => {
//             // Event object is optional
//             // Pass it along to handleClick ONLY if required
//             handleClick("ONE");
//           }}
//         >
//           One
//         </button>
//         <button
//           onClick={(event) => {
//             // Event object is optional
//             // Pass it along to handleClick ONLY if required
//             handleClick("TWO");
//           }}
//           // onClick={handleClick}
//         >
//           Two
//         </button>
//         <button
//           onClick={(event) => {
//             // Event object is optional
//             // Pass it along to handleClick ONLY if required
//             handleClick("THREE");
//           }}
//         >
//           Three
//         </button>
//       </main>
//     );
//   };

  


// Arguments inside the event handlers....................

// const App =()=>{
//     const users =[
//         {id:1,name:"Barry", occupation:"Assassin"},
//         {id:2, name:"Gene", occupation:"Theater Teacher"},
//         {id:3, name:"Monroe", occupation:"Assassin Manager"}
//     ]

//     const handleClick = ({ name, occupation }) => {
//         console.log(`Name is ${name} with occupation ${occupation}`);
//       };
//       return (
//         <main>
//           {users.map((user) => {
//             return (
//               <div
//                 onClick={() => {
//                   handleClick({ name: user.name, occupation: user.occupation });
//                 }}
//                 className="card"
//               >
//                 <p>Name : {user.name}</p>
//                 <p>Occupation : {user.occupation}</p>
//               </div>
//             );
//           })}
//         </main>
//       );
// }
  


// INput events..............

//  const App=()=>{

//   const handleChange=(event)=>{

//     // what we want is : input.value

//    //  we know that:
//     // event.target-->input (actual element that was interacted with)

//     // so we just need
//     // event.target.value-->input.value
//     console.log(event.target.value);  //the current value of input element...
//   }
//   return(
//     <main>
//       <form>
//         <label htmlFor="firstName">First Name:</label>
//         <input onChange={handleChange} id="firstName" type="text"></input>
//       </form>
//     </main>
//   )
// }



// const App=() =>{

//   const handleChange = () => { 
    
//     console.log('The checkbox was toggled'); 
    
//   }; 
  
//   return ( 
    
//     <div>  
//       <input type="checkbox" onChange={handleChange} /> uu
//       </div> 
    
//   ); 
// }
// named export..
//  export { App };



// const  App=()=> {
//   const handleHeaderClick = () => {
//     console.log('Header clicked');
//   };
//   const handleButtonClick = (event) => {
//     event.stopPropagation();
//     console.log('logout button clicked');
//   };
//   return (
//     <>
//       <div onClick={handleHeaderClick}>
//         <div>Header</div>
//         <button type="button" onClick={handleButtonClick}>
//           Log Out
//         </button>
//       </div>
//     </>
//   );
// }

// const App=()=>{
//   const handleHeaderClick = () => {
//     console.log('Header clicked');
//   };
//   const handleButtonClick = () => {
//     console.log('logout button clicked');
//   };
//   return (
//     <>
//       <div onClick={handleHeaderClick}>
//         <div>Header</div>
//         <button type="button" onClick={handleButtonClick}>
//           Log Out
//         </button>
//       </div>
//     </>
//   );
// }
// // export {App};

// const ParentComponent = () => {
//   const data = 'Hello from Parent';

//   return (
//     <div>
//       <ChildComponent data={data} />
//     </div>
//   );
// };

// export {ParentComponent};

// // ChildComponent.js
// import React from 'react';

// const ChildComponent = (props) => {
//   const { data } = props;

//   return <div>{data}</div>;
// };

// export {ChildComponent};











// ************************//






// import React, {Component, useState} from "react";
// import "./App.css";

   
// const App= () =>{
// 	let [start, setStart] =useState(false);
// 	const hi=()=>{
// 		setStart(true);
// 	}
//     	return(
//     		<div id="main">
// 				{ /* Do not remove this main div!! */ }
// 			<button id="click" onClick={hi}>click me</button>
// 			{start ? <p id="para">  Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
// 			  </p>: null}
//     		</div>
//     	);
//     }


// const  App= ()=> {
  
//     const [value, setValue] = useState("");
    
//     return (
//       <div>
//         <h2>GeeksforGeeks - ReactJs Form</h2>
//         <form>
//           <label>
//             Input Field:-  
//             <input value={value} onChange={(e)=>{
//               setValue(e.value)
//             }}/>
//           </label>
//         </form>
//       </div>
//     );
//   }



// ========  15-05  ============

// --first solution usinf if else---

// const App = () => {
//     const [state, setState] = useState({
//       name: "Aditya Keri",
//       age: 1000,
//       city: "New York",
//       country: "USA",
//     });
  
//     const handleChange = (field, value) => {
//       setState((prevState) => {
//         if (field === "name") {
//           return { name: value, age: prevState.age, city: prevState.city, country: prevState.country };
//         } else if (field === "age") {
//           return { name: prevState.name, age: value, city: prevState.city, country: prevState.country };
//         } else if (field === "city") {
//           return { name: prevState.name, age: prevState.age, city: value, country: prevState.country };
//         } else if (field === "country") {
//           return { name: prevState.name, age: prevState.age, city: prevState.city, country: value };
//         }
//         return prevState;
//       });
//     };
  
//     return (
//       <div>
//         <p>Name: {state.name}</p>
//         <p>Age: {state.age}</p>
//         <p>City: {state.city}</p>
//         <p>Country: {state.country}</p>
//         <hr />
  
//         <button onClick={() => handleChange("name", "Abhishek Keri")}>
//           Change Name
//         </button>
  
//         <button onClick={() => handleChange("age", 23)}>
//           Change Age
//         </button>
  
//         <button onClick={() => handleChange("city", "Hyderabad")}>
//           Change City
//         </button>
  
//         <button onClick={() => handleChange("country", "India")}>
//           Change Country
//         </button>
//       </div>
//     );
//   };

// //  -- Second solution ---


// // Firstly declare a state obj using useState hook.....
// const App = () => {
//     const [initialInfo, setInitialInfo] = useState({
//       name: "Aditya Keri",
//       age: 1000,
//       city: "New York",
//       country: "USA",
//     });
  
//     const updateInfo = (field, value) => {
//         setInitialInfo((previousInfo) => {
//         return Object.assign({}, previousInfo, { [field]: value });
//       });
//     };
  
//     return (
//       <div>
//         <p>Name: {initialInfo.name}</p>
//         <p>Age: {initialInfo.age}</p>
//         <p>City: {initialInfo.city}</p>
//         <p>Country: {initialInfo.country}</p>
//         <hr />
  
//         <button onClick={() => updateInfo("name", "Abhishek Keri")}>
//           Change Name
//         </button>
  
//         <button onClick={() => updateInfo("age", 23)}>
//           Change Age
//         </button>
  
//         <button onClick={() => updateInfo("city", "Hyderabad")}>
//           Change City
//         </button>
  
//         <button onClick={() => updateInfo("country", "India")}>
//           Change Country
//         </button>
//       </div>
//     );
//   };
  



// // third solution----------------------------------


// // --------------------------
// // 1--> first declare state obj using useState..
// // 2--> by using array destructuring assigning the state obj to the state constant nd the setState func to update it...

// const App = () => {
//     const [state, setState] = useState({
//       name: "Aditya Keri",
//       age: 1000,
//       city: "New York",
//       country: "USA",
//       designation: "Software Developer",
//     });

// // 3--> now by using object.assign() we create a new obj newState by merging previous state obj prevStstae into it...

// // 4--> then update the field property of newState with provided value then return the newState obj to update the state.....


//     const updateState = (field, value) => {
//       setState((prevState) => {
//         const newState = Object.assign({}, prevState);
//         newState[field] = value;
//         return newState;
//       });
//     };

// // 5--> updateUserFunc remains the same , it takes the field argument by using it it can access the corresponding val fro the newStateValue obj.. then it call the updateState func with field  nd the new val to update the state....
//     const updateUserDetails = (field) => {
//       const newStateValue = {
//         name: "Abhishek Keri",
//         age: 23,
//         city: "Hyderabad",
//         country: "India",
//         designation: "Driver",
//       };
  
//       updateState(field, newStateValue[field]);
//     };
  
// //6--> now coponent render the state property and provide button to trigger the updateUserDetail func... 
// // 7--> compo render the current val of state and by button it triggered the updateUsserDetail func with curresponding field...


//     return (
//       <div>
//         <p>Name: {state.name}</p>
//         <p>Age: {state.age}</p>
//         <p>City: {state.city}</p>
//         <p>Country: {state.country}</p>
//         <p>Designation: {state.designation}</p>
//         <hr />
  
//         <button onClick={() => updateUserDetails("name")}>
//           Change Name
//         </button>
  
//         <button onClick={() => updateUserDetails("age")}>
//           Change Age
//         </button>
  
//         <button onClick={() => updateUserDetails("city")}>
//           Change City
//         </button>
  
//         <button onClick={() => updateUserDetails("country")}>
//           Change Country
//         </button>
  
//         <button onClick={() => updateUserDetails("designation")}>
//           Change Designation
//         </button>
//       </div>
//     );
//   };

  // -->> overall it update the state obj by creating new obj using object.assign() nd updating the specific property within it..it also ensures that the state obj is not mutated directly..
  
// export default App;


// const App=()=>{
//  const [count, setCount]=useState(0);

//   const handleCount=()=>{

//     // const nextCount=count+1;
//     // setCount(nextCount);     //state setter are not immediate
//     // console.log(nextCount);
    
   

//   }
//   return(
//     <main>
//       <h1>Count : {count}</h1>
//       <button onClick={handleCount}>Increment</button>
//     </main>
//   )
// }









// *********************************//

// import {  useEffect,useState } from "react";
// import "./App.css";

/** Complex Form State */

/** Method 2 : Using if-else / switch / mapping / name attribute */
// const App = () => {
//   const [formDetails, setFormDetails] = useState({
//     firstName: "",
//     secondName: "",
//     email: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstNameError: "",
//     secondNameError: "",
//     emailError: "",
//   });

//   const handleFormInputs = (event) => {
//     const field = event.target.name;
//     const value = event.target.value;

//     const firstNameError =
//       field === "firstName" &&
//       value.length < 3 &&
//       "First name must contain at least 3 characters";

//     const secondNameError =
//       field === "secondName" &&
//       value.length < 3 &&
//       "Second name must contain at least 3 characters";

//     const emailError =
//       field === "email" &&
//       value.length < 3 &&
//       "Email must contain at least 3 characters";

//     if (firstNameError || secondNameError || emailError) {
//       setFormErrors({
//         firstNameError,
//         secondNameError,
//         emailError,
//       });
//     }

//     setFormDetails({
//       ...formDetails,
//       [field]: value,
//     });
//   };

//   return (
//     <main>
//       <div className="container">
//         <label>First Name </label>
//         <div>
//           <input
//             placeholder="John"
//             onChange={handleFormInputs}
//             value={formDetails.firstName}
//             type="text"
//             name="firstName"
//           />
//           {formErrors.firstNameError && <p>{formErrors.firstNameError}</p>}
//         </div>
//         <label>Second Name </label>
//         <div>
//           <input
//             placeholder="Cena"
//             onChange={handleFormInputs}
//             value={formDetails.secondName}
//             type="text"
//             name="secondName"
//           />
//           {formErrors.secondNameError && <p>{formErrors.secondNameError}</p>}
//         </div>
//         <label>Email </label>
//         <div>
//           <input
//             placeholder="youcantseeme@wwe.com"
//             onChange={handleFormInputs}
//             value={formDetails.email}
//             type="email"
//             name="email"
//           />
//           {formErrors.emailError && <p>{formErrors.emailError}</p>}
//         </div>
//       </div>
//       <button>Submit</button>
//     </main>
//   );
// };




///******************* *//
   

// const App = () => {
//       const [formDetails, setFormDetails] = useState({
//         firstName: "",
//         secondName: "",
//         email: "",
//       });
    
//       const [formErrors, setFormErrors] = useState({
//         firstNameError: "",
//         secondNameError: "",
//         emailError: "",
//       });
    
//       const handleFormInputs = (event) => {
//        //it refers to the ele that triggered the event(in this case input field)....
//         const field = event.target.name;
//         const value = event.target.value;
    
//   //       //declare nd initialize firstNameError,secondNameError nd emailError variable to empty string for holding any error msg for corresponding input fieldss.....
//         let firstNameError = "";
//         let secondNameError = "";
//         let emailError = "";
    
//   //       //now checking field var to determine which input field is changed if it matches one of the field names nd if length of the value is less than 3 char then an error msg assigned to var....
  
//         if (field === "firstName" && value.length < 3) {
//           firstNameError = "First name must contain at least 3 characters";
//         }
    
//         if (field === "secondName" && value.length < 3) {
//           secondNameError = "Second name must contain at least 3 characters";
//         }
    
//         if (field === "email" && value.length < 3) {
//           emailError = "Email must contain at least 3 characters";
//         }
    
//   //       //after checking conditions then fun called updated the formError state obj nd spread operator is used to retain existing val of formErrors nd the specific error field are updated wih nw val.....
//         setFormErrors({
//           ...formErrors,
//           firstNameError,
//           secondNameError,
//           emailError,
//         });
    
  
//   //       //then setFormDetail func called to update formDetails state obj spread operator used to retain the exiting val of formDetails n field var is used as a dynamic key to update the corresponding field val with new val....
//         setFormDetails({
//           ...formDetails,
//           [field]: value,
//         });
//       };
    
  
//       return (
//         <main>
//           <div className="container">
//             <label>First Name</label>
//             <div>
//               <input
//                 placeholder="John"
//                 onChange={handleFormInputs}
//                 value={formDetails.firstName}
//                 type="text"
//                 name="firstName"
//               />
//               {formErrors.firstNameError && <p>{formErrors.firstNameError}</p>}
//             </div>
//             <label>Second Name</label>
//             <div>
//               <input
//                 placeholder="Cena"
//                 onChange={handleFormInputs}
//                 value={formDetails.secondName}
//                 type="text"
//                 name="secondName"
//               />
//               {formErrors.secondNameError && <p>{formErrors.secondNameError}</p>}
//             </div>
//             <label>Email</label>
//             <div>
//               <input
//                 placeholder="youcantseeme@wwe.com"
//                 onChange={handleFormInputs}
//                 value={formDetails.email}
//                 type="email"
//                 name="email"
//               />
//               {formErrors.emailError && <p>{formErrors.emailError}</p>}
//             </div>
//           </div>
//           <button>Submit</button>
//         </main>
//       );
//     };





// ------------setEffect.....


// const Child = () => {
//   useEffect(() => {
//     // 1
//     console.log("Child component mounted!");

//     // Runs just before the component is unmounted
//     return () => {
//       // 2
//       console.log("Child component unmounted!");
//     };
//   }, []);

//   return <h1>Child</h1>;
// };

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [anotherCount, setAnotherCount] = useState(0);

//   const [user, setUser] = useState("");

//   useEffect(() => {
//     // 3
//     console.log("App component mounted!");
//   }, [count]);

//   useEffect(() => {
//     // 3
//     console.log("App component mounted!");
//   }, [anotherCount]);
//   return (
//     <main>
//       <h1>Count : {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <hr />
//       <h1>Another Count : {anotherCount}</h1>
//       <button onClick={() => setAnotherCount(anotherCount + 10)}>
//         Increment
//       </button>
//       <hr />
//       {/* {count % 2 === 0 && <Child />} */}
//     </main>
//   );
// };




// const App = () => {
//   const [formDetails,setFormDetails]=useState({
//     firstName:"",
//     email:"",
//     phoneNumber:"",
//   });
//   const {firstName,email,phoneNumber}=formDetails;

//   const handleFormChange=(e)=>{
//     setFormDetails({...formDetails,[e.target.name]:e.target.value});
//   }

 
//   return (
//     <main onChange={handleFormChange}>
//       <input
//        name="firstName" 
//        type="text"
//         placeholder="first name"
//         value={firstName}
//         />
//       <input 
//       name="email"
//        type="email" 
//        placeholder="email"
//        value={email}
//        />
//       <input 
//       name="phoneNumber"
//        type="number" 
//        placeholder="phone number"
//        value={phoneNumber}
//        />
//     </main>
//   );
// };


// const App=()=>{
//   useEffect(()=>{
//     function handleMouseMove(e){
      
//     }
//      window.addEventListener('mousemove',handleMouseMove);
//   },[]);
// }
// // Named Export



  // function Form() {
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  
  //   const handleNameChange = (event) => {
  //     setName(event.target.value);
  //   };
  
  //   const handleEmailChange = (event) => {
  //     setEmail(event.target.value);
  //   };
  
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // Perform form submission logic with name and email
  //     console.log("Submitted:", name, email);
  //   };
  
  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         Name:
  //         <input type="text" value={name} onChange={handleNameChange} />
  //       </label>
  //       <br />
  //       <label>
  //         Email:
  //         <input type="email" value={email} onChange={handleEmailChange} />
  //       </label>
  //       <br />
  //       <button type="submit">Submit</button>
  //     </form>
  //   );
  // }
  // export default Form;



  
import React, { useState, useEffect } from 'react';
import "./App.css";

// const  App=()=> {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
  
//   useEffect(() => {
//     fetch('https://api.github.com/users')
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.log(error));
//   }, []);
  
//   const handleClick = (username) => {
//     fetch(`https://api.github.com/users/${username}`)
//       .then((response) => response.json())
//       .then((data) => setSelectedUser(data))
//       .catch((error) => console.log(error));
//   };
  
//   return (
//     <div className='main'>
//       <div className="grid-col-1">
//         <h1>GitHub Users</h1>
//         <ul >
//           {users.map((user) => (
//             <li key={user.id} onClick={() => handleClick(user.login)}>
//               {user.login}
//             </li>
//           ))}
//         </ul>
//       </div>        
//       <div className="grid-col-2">
//         {selectedUser && (
//           <div className='user-details'>
//             <h2>Username: {selectedUser.login}</h2>
//             <p>Twitter Username: {selectedUser.twitter_username}</p>
//             <p>Location: {selectedUser.location}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.github.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchUsers();
  }, []);

  const handleClick = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      const data = await response.json();
      setSelectedUser(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="main">
      <div className="grid-col-1">
        <h1>GitHub Users</h1>
        {error && <p>Error: {error}</p>}
        <ul>
          {users.map((user) => (
            <li key={user.id} onClick={() => handleClick(user.login)}>
              {user.login}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid-col-2">
        {selectedUser && (
          <div className="user-details">
            <h2>Username: {selectedUser.login}</h2>
            <p>Twitter Username: {selectedUser.twitter_username || 'N/A'}</p>
            <p>Location: {selectedUser.location || 'N/A'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export { App};


