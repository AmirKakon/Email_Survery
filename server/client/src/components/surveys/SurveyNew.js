import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
    state = {showFormReview: false};
    //same this as the following:
    // constructor(proprs) {
    //     super(props);
    //     this.state = {new: true};
    // }

    renderContent() {
        if(this.state.showFormReview) {
            return <SurveyFormReview onCancel={() => this.setState({showFormReview: false})} />;
        }
        return <SurveyForm onSurveySubmit={() => this.setState({showFormReview: true})} />;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default SurveyNew;