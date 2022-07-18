import { Component, Fragment } from "react";
import Home from "../../component/home/index"
import {Link} from 'react-router-dom'
class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Fragment>
               <Link 
                    to='/' 
                >
                    <Home/>
                </Link> 
            </Fragment>
        )
    }
}
export default Home;