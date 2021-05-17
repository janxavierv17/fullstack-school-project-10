import React, { Component } from "react";
export default class CreateCourse extends Component {

    state = {
        title: "",
        description: "",
        estimatedTime: "",
        materialsNeeded: "",
        errors: []
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { context } = this.props;
        const { emailAddress, password, id } = context.authenticatedUser;
        const { title, description, estimatedTime, materialsNeeded } = this.state
        const courseDetails = { id, title, description, estimatedTime, materialsNeeded, }

        const userPassword = password[0]
        context.data.createCourse(courseDetails, emailAddress, userPassword)
            .then(errors => {
                if (errors.length) {
                    this.setState({ errors });
                } else {
                    console.log("Course successfully created.");
                }
            })
            .catch((err) => { //handle rejected promises
                console.log(err);
                this.props.history.push('/error');
            })
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value

        this.setState(() => {
            return {
                [name]: value
            };
        });
    }

    render() {
        const { title, description, estimatedTime, materialsNeeded, errors } = this.state
        const { firstName, lastName } = this.props.context.authenticatedUser
        return (
            <main>
                <div className="wrap">
                    <h2> Create Course</h2>
                    <div className="validation-errors">
                        {errors && errors.length > 0
                            ? <div className="validation--errors">
                                <h3>Validation Errors</h3>
                                {errors}
                            </div>
                            : null
                        }
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="main--flex">
                            <div>
                                <label htmlFor="courseTitle">Course Title</label>
                                <input id="courseTitle" name="title" type="text" value={title} onChange={this.handleChange} />

                                <p>By {firstName} {lastName}</p>

                                <label htmlFor="courseDescription">Course Description</label>
                                <textarea id="courseDescription" name="description" value={description} onChange={this.handleChange} ></textarea>
                            </div>
                            <div>
                                <label htmlFor="estimatedTime">Estimated Time</label>
                                <input id="estimatedTime" name="estimatedTime" type="text" value={estimatedTime} onChange={this.handleChange} />

                                <label htmlFor="materialsNeeded">Materials Needed</label>
                                <textarea id="materialsNeeded" name="materialsNeeded" value={materialsNeeded} onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <button className="button" type="submit"> Create Course</button>
                        <button className="button button-secondary" onClick={() => { this.props.history.push("/") }}> Cancel</button>
                    </form>

                </div>
            </main>
        )
    }
}