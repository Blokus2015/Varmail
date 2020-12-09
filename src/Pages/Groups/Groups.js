import React, {Component} from 'react';
import './Groups.css';
import Var_navbar from '../Components/Var_navbar/Var_navbar.js';
import emailjs from "emailjs-com";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded } from  'react-redux-firebase';
import { compose } from 'redux';

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_idapiq4', 'template_g1tauwo', e.target, 'user_deuwa03kMxAwKcmYnfzQR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }


  render(){
    if(!isLoaded(this.props.teamMembers)) {
      return <div>Loading team teamMembers</div>
    }
    return (
      <>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"/>
      </head>

        <Button to="/" variant="dark">Back</Button>
        <div className="Groups_title">
          <h1>Team members</h1>
          {/*<p>{this.props.teamMembers.surveyQuestion1.answers.answer1}</p>
          <p>{this.props.teamMembers.surveyQuestion1.answers.answer2}</p> */}

        </div>
        <div class="ripple-background">
          <div class="circle xxlarge shade1"></div>
          <div class="circle xlarge shade2"></div>
          <div class="circle large shade3"></div>
          <div class="circle mediun shade4"></div>
          <div class="circle small shade5"></div>
        </div>


        <div>
          <div className="container">
            <div className="mainText">
             <form onSubmit={this.sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Your Name" name="from_Name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Teams" name="to_Name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
              </div>
            </div>
        </div>


      </>
    )
}};

const mapStateToProps = state => {
  console.log(state);
  const teamMembers = state.firebase.data.survey;
  return { teamMembers: teamMembers };
};

export default compose(
  firebaseConnect([{path:'/users/sean/Organization/Survey', storeAs: 'survey'}]),
  connect(mapStateToProps),
)(Groups);
