import { Component, Fragment } from "react";
import {styleSheet} from '../navBar/style'
import {Typography} from '@material-ui/core';
import { withStyles } from "@mui/styles";
import NavBtns from "../navBar/navBtns"
class NavBar extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const {classes,setBtnsList}=this.props;
        return(
                <Fragment>
                    <Typography 
                        className={classes.navTitle}
                        gutterBottom variant="h5" 
                        component="div">
                        Easy Car Rentals
                    </Typography>
                    <ul 
                    className={classes.listOfNavBars}>
                        <NavBtns
                            setBtnsList = {setBtnsList}
                        />
                    </ul>
                </Fragment>
        )
    }
}
export default withStyles(styleSheet)(NavBar)