import React, {Component} from 'react';
import './Create_survey.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class CreateSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: ''
        }

        // this.handleNewQuestion = this.handleNewQuestion.bind(this);
    }

    

    // handleNewQuestion() {
    //     questionList.push(
    //         <Form.Group>
    //             <Form.Label>New Question</Form.Label>
    //             <Form.Control placeholder="Type question here"/>
    //         </Form.Group>
    //     )
    // }

    render(){

        var doneQuestionList = (
            <>
                <p>Question</p>
                <p>You should start adding the people</p>
            </>
        )

        var questionList = (
        <Form.Group>
            <Form.Label>Question</Form.Label>
            <Form.Control placeholder="Type question here" />
        </Form.Group>);


        return(
            <>
                <head>
                    <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                    crossorigin="anonymous"
                    />
                </head>

                <div className="surveyBG">
                    <p className="surveyTitles">
                        Create Survey
                    </p>
                    <div className="surveyBody">
                        <Form className="surveyBodyInner">
                            <Form.Group>
                                <Form.Label>Title of survey</Form.Label>
                                <br></br>
                                <Form.Control placeholder="Enter Title of survey"/>
                            </Form.Group>
                            {doneQuestionList}
                            {questionList}
                            <Button variant="dark surveyButton">Add New Question</Button>
                        </Form>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateSurvey;