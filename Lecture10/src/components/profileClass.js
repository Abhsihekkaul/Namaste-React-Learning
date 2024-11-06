
import React from "react";
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
    async componentDidMount(){
        {console.log("Child - ComponentDidMount" + this.props.name)}
        
        const response = await fetch("https://api.github.com/users/Abhsihekkaul");
        const data = await response.json();
        console.log(data);
        this.setState({
            userinfo : data,
    })
    
    }
    render() {
        {console.log("Child - render"  + this.state.name)}
        const {count2} = this.state
        return (
            
            <>
                <h2>Hello world</h2>
                <h1>Name: {this.props.name}</h1>
                <h2>Count 1: {this.props.count}</h2>
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
