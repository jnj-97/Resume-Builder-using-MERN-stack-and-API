import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import './Home.css';



export class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            url:"http://localhost:4000"
        }
    }
    render() {
        return (
            <div>
                <div>
                {
                    <Button style={{backgroundColor:"lightgray"}}>  <Link to="/signup"> SIGN UP</Link></Button>
                }
                {
                    <Button style={{backgroundColor:"lightgray"}}>  <Link to="/login"> LOGIN</Link></Button>
                }
                {
                    <Button style={{backgroundColor:"lightgray"}}>  <Link to="/resume"> CREATE RESUME</Link></Button>
                }
                {
                    <Button style={{backgroundColor:"lightgray"}}><a href="http://18d1-103-6-158-106.ngrok.io/">JOB SEARCH</a></Button>
                }
                </div>
                <div>
                <p>
                <br/>
                <br/>
                <br/>
                <h1>Hello, we welcome you to RESUME BUILDER TOOL AND JOB SEARCH!</h1>
                <br/>
                You can use this website to create yourself a RESUME by entering your details. 
                You can also search for jobs you can apply to using the JOB SEARCH feature.
                <h1>Enjoy your stay!</h1>
                <br/>
                </p>

                </div>
                <footer className="Home__foot" >Created by: Nobin Johnson, Rahul Noronha and Jagadeeswar
                <div>&copy;2021</div>
                </footer>
            </div>
          
        )
    }
}

export default Home
