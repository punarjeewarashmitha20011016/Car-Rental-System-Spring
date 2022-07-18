import { Component } from "react";
import {styleSheet} from './style'
import {Link} from 'react-router-dom'
import { withStyles } from "@mui/styles";
import { FaSignInAlt } from "react-icons/fa";
class NavBtns extends Component{
    constructor(props){
        super(props);
    }
    changeBackground(e,check){
        if(check==true){
            e.target.style.background = '#B2BD89';
            e.target.style.color = 'white';
            e.target.style.transition="all 1s";
        }else{
            e.target.style.background = '#CCD4B0';
            e.target.style.color = 'black';
            e.target.style.transition="all 1s";
        }
    }
    setBtns=()=>{
        const {setBtnsList,classes} = this.props;
        for(let i =0;i<setBtnsList.length;i++){
            if(setBtnsList[i] === 'signIn'){
                return (
                    <Link 
                            to='/' 
                            className={classes.setAdminBtn}
                            onMouseOver={(e)=>{
                                let checkMouseAway = true
                                this.changeBackground(e,checkMouseAway)
                            }}
                            onMouseLeave={(e)=>{
                                let checkMouseAway = false
                                this.changeBackground(e,checkMouseAway)
                            }}
                            style={{ textDecoration: 'none' }}
                            >
                            <FaSignInAlt/>
                        </Link>
                )
            }else{
                return(
                    <div>
                        <Link 
                            to='/' 
                            className={classes.navBtns}
                            onMouseOver={(e)=>{
                                let checkMouseAway = true
                                this.changeBackground(e,checkMouseAway)
                            }}
                            onMouseLeave={(e)=>{
                                let checkMouseAway = false
                                this.changeBackground(e,checkMouseAway)
                            }}
                            style={{ textDecoration: 'none' }}
                            >
                            <li className={classes.listInNav}>Dasboard</li>
                        </Link>
                        
                        <Link 
                            to='/customer' 
                            className={classes.navBtns}
                            onMouseOver={(e)=>{
                                let checkMouseAway = true
                                this.changeBackground(e,checkMouseAway)
                            }}
                            onMouseLeave={(e)=>{
                                let checkMouseAway = false
                                this.changeBackground(e,checkMouseAway)
                            }}
                            style={{ textDecoration: 'none' }}
                            >
                            <li className={classes.listInNav}>Customer</li>    
                        </Link>
                        <Link 
                            to='/item' 
                            className={classes.navBtns}
                            onMouseOver={(e)=>{
                                let checkMouseAway = true
                                this.changeBackground(e,checkMouseAway)
                            }}
                            onMouseLeave={(e)=>{
                                let checkMouseAway = false
                                this.changeBackground(e,checkMouseAway)
                            }}
                            style={{ textDecoration: 'none' }}
                            >
                            <li className={classes.listInNav}>Item</li>
                        </Link>
                    </div>
                )
            }
        }
    }
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.ulChildContainer}>
                {
                    this.setBtns()
                }
            </div>
        )
    }
}
export default withStyles(styleSheet)(NavBtns);