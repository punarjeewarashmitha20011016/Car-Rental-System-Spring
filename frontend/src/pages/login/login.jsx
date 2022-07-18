import { Component, Fragment } from "react";
import Login from "../../component/login/index"

class LoginPage extends Component{
    constructor(props){
        super(props);
        console.log('constructor');
    }
    render(){
        return(
            <Fragment>
                <Login/>
            </Fragment>
        )
    }
}
export default LoginPage;