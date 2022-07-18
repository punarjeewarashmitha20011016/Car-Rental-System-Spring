import { Component } from "react";
import image from "../../assets/img/img.jpg"
import { withStyles } from "@mui/styles";
import {styleSheet} from "./style"
import CommonButton from "../common/btn";
import NavBar from "../navBar";
import "./index.css"
class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {classes} = this.props;
        return(

            <div className='container'>
                    <div id='navBarContainer' className="navBarContainer">
                    <NavBar
                        setBtnsList = {['signIn']}
                    />
                    </div>

                    <div id='content' className="content">
                        <div className={classes.imgContainer}>
                                <img className={classes.img} src={image} />
                                <div className={classes.btnAndTopicContainer}>
                                <div className={classes.homeTopicContainer}>
                                    <div className={classes.mainTopContainer}>
                                        <h1>Easy Car Rental<br/><span className={classes.mainTopicSpan}>Service</span></h1>
                                    </div>
                                    <p>Best Car Rental Rates. No Hidden Extra Charges</p>
                                </div>
                                <div className={classes.btnContainer}>
                                    <CommonButton
                                        size="large" variant="outlined" label="View Cars" type="submit" className={classes.btn}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <Routes>
                        <Route exact path="/" element={<HomePage/>}/>
                        </Routes> */}
                    </div>

                    
                        {/* <div id="loginId" className='loginContainer'>
                            <Routes>
                                <Route exact path="/login" element={<LoginPage/>}/>
                            </Routes>
                        </div> */}
                
                </div>
        )
    }
}
export default withStyles(styleSheet)(Home);