// In this lecture, we're learning how to create a class-based component in React.

import React from "react";

// To create a class-based component:
// 1. Use the `class` keyword followed by the component's name (ClassProfile).
//    The name should be in PascalCase (capitalized) as a React convention.
// 2. Extend `React.Component` which gives access to React's component features.
//    This inheritance is essential for making the class behave like a React component.
// 3. Class components must include a `constructor()` method if we need to initialize state or bind methods.
// 4. Class components must include a `render()` method.
//    The `render()` method is required and is responsible for returning JSX (the UI structure).
// 5. Inside the `render()` method, return the component’s JSX.

// Note: While functional components are more commonly used in modern React due to the introduction of hooks,
// understanding class components is still valuable, especially for working with legacy codebases.



// Always remember according to React Lifecycle 
// the very first thing which render in the webpage in the class based component is 
//  constructor followed by the render so which means if we will make two console.logs in each of those first 
// the log inside the constructor will be work first and later ComponentDidMount
class ClassProfile extends React.Component {
    constructor(props) {
        // Calling the superclass constructor and passing props
        super(props);

        console.log("Child - Constructor" + this.props.name )
        
        // Initializing state inside the constructor
        this.state = {
            count: 0,
            count2: 1,

            userinfo : {
            Name : "Dummy Name",
            Location : "Dummy Location ",
        }
        };
    }
        // like we have useEffect inside the functional component similarly we have 
        // ComponentdidMount() in class based component as it is also the function 
        // which works right after the first render  and it is considered as the best place to 
        // make your API calls
        // below are the reason why it is considered as the best place to make APi calls 

        // as we are doing API call we  can make this function async
    async componentDidMount(){
        {console.log("Child - ComponentDidMount" + this.props.name)}
        // Component Initialization: componentDidMount runs after the component is added to the DOM,
        //  so fetched data can be set directly without interrupting rendering.

        //Avoiding Multiple Calls: It only runs once after initial render, preventing repeated API 
        // calls that can happen in the constructor or render method.

        //Consistent State Updates: Allows safe state updates without risking errors from setting 
        // state on an unmounted component.

        //Asynchronous Nature: Makes it easy to handle loading states, showing feedback while data
        //  is fetched asynchronously.
        
        const response = await fetch("https://api.github.com/users/Abhsihekkaul");
        const data = await response.json();
        console.log(data);
        this.setState({
            userinfo : data,
    })

        // this.timer = setInterval(()=> {
        //     console.log("I am working behind the scene so always unmount me")
        // },1000)
        }


        // if we want something to change when the state of something is changing then we have to declare in 
        // the componentDIdUpdate as it reconcile after every re render 
    // componentDidUpdate(prevProps, prevState){
    //    if (this.state.count !== prevState.count){
    //     // code 
    //    }
    // }   
    
    
    // componentWillUnmount(){
    //     clearInterval(this.timer);
    //     console.log("ComponentWillUnmount")
    // }
        
    render() {
        // Accessing props and state values with `this.props` and `this.state`
        // we can also destructor them 
        {console.log("Child - render"  + this.state.name)}
        const {count2} = this.state
        return (
            
            <>
                <h2>Hello world</h2>
                <h1>Name: {this.props.name}</h1>
                <h2>Count 1: {this.props.count}</h2>
                {/* as we have destructure it now we can simply use count2 here */}
                <h2>Count 2: {count2}</h2>
                <button onClick={() => {
                    this.setState({
                        count2 : 2,
                    })
                }}>Button</button>


                <h1>Github-Name: {this.state.userinfo.name}</h1>
                <h2>Location : {this.state.userinfo.location}</h2>
                {/* <img src={this.setState.userinfo.avatar_url} /> */}
            </>
        );
    }
}

export default ClassProfile;
