import {Component} from "react";
import {styleSheet} from "./style"
import {withStyles} from "@mui/styles";
import Grid from '@mui/material/Grid';
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator';
import {Link, Typography} from "@mui/material";
import CommonButton from "../common/btn";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.loginContainer}>
                <div className={classes.loginContent}>
                    <div className={classes.formContainer}>
                        <ValidatorForm
                            ref="form"
                            className={classes.formValidatorContainer}
                            // onSubmit={this.handleSubmit}
                            // onError={errors => console.log(errors)}
                        >
                            <Grid container spacing={0.5}>
                                <Grid item lg={12} md={12} sm={12} xm={12} marginBottom={'5%'}>
                                    <Typography variant="body2">User Name</Typography>
                                    <TextValidator
                                        id="outlined-basic"
                                        name="User Name"
                                        placeholder="Enter Your User Name"
                                        variant="outlined"
                                        size="small"
                                        // value={this.state.formData.userId}
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.userId = e.target.value
                                            this.setState({formData})
                                        }}
                                        style={{width: '100%'}}
                                        // validators={['required',]}
                                    />
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xm={12} marginBottom={'5%'}>
                                    <Typography variant="body2">Password</Typography>
                                    <TextValidator
                                        id="outlined-basic"
                                        variant="outlined"
                                        name="password"
                                        type="password"
                                        placeholder="Enter Your Password"
                                        size="small"
                                        style={{width: '100%'}}
                                        // validators={['required']}
                                        // value={this.state.formData.id}
                                        onChange={(e) => {
                                            let formData = this.state.formData
                                            formData.id = e.target.value
                                            this.setState({formData})
                                        }}
                                    />
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}}
                                      justifyContent="center" marginBottom={'5%'}>
                                    <CommonButton style={{width: "100%"}} size="large" variant="contained" label="Login"
                                                  type="submit"/>
                                </Grid>

                            </Grid>
                        </ValidatorForm>
                         <div className={classes.btnContainer}>
                            <Grid container spacing={0.5} style={{height:"100%"}}>
                                <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} 
                                    justifyContent="center"
                                    marginBottom={'5%'}>
                                    <a href="/" style={{textDecoration: 'none'}}>
                                        <CommonButton style={{width: "100%"}} size="large" variant="contained"
                                                    label="Return To Home" type="submit"/>
                                    </a>

                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}}
                                    justifyContent="flex-end" marginBottom={'5%'}>
                                    <Link to='/createCustomerAccount'>
                                        <p>Create Customer Account</p>
                                    </Link>
                                </Grid>
                            </Grid>
                        </div>               
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Login);