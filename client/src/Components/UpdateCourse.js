import React, { Component } from "react"
class UpdateCourse extends Component {

    state = {
        courseTitle: "",
        courseDescription: "",
        estimatedTime: "",
        materialsNeeded: "",
        firstName: "",
        lastName: "",
        errors: [],
    }

    getCourse = async () => {
        let response = await fetch(`http://localhost:5000/api/courses/${this.props.match.params.id}`)
        response = await response.json();

        this.setState(() => {
            return {
                courseTitle: response.course.title,
                courseDescription: response.course.description,
                estimatedTime: response.course.estimatedTime,
                materialsNeeded: response.course.materialsNeeded,
                firstName: response.course.User.firstName,
                lastName: response.course.User.lastName,
            }
        })
    }

    componentDidMount() {
        this.getCourse();
    }

    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        this.setState(() => {
            return {
                [name]: value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { context } = this.props;
        const { emailAddress, password, id } = context.authenticatedUser;
        const { title, description, estimatedTime, materialsNeeded } = this.state;
        const courseID = this.props.match.params.id
        const courseDetails = { id, title, description, estimatedTime, materialsNeeded }

        context.data.updateCourse(courseID, courseDetails, emailAddress, password)
            .then(errors => {
                console.log(errors)
            })
            .catch((err) => { //handle rejected promises
                console.log(err);
                this.props.history.push('/forbidden');
            })
        // .then(errors => {
        //     if (errors.length) {
        //         console.log("ERRORS:", errors)
        //         this.setState({ errors });
        //     } else {
        //         console.log("Course successfully updated.");
        //     }
        // })
        // .catch((err) => { //handle rejected promises
        //     console.log(err.message);
        //     // this.props.history.push('/error');
        // })
    }

    render() {
        return (
            <main>
                <div className="wrap">
                    <h2>Update Course</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="main--flex">
                            <div>
                                <label htmlFor="courseTitle">Course Title</label>
                                <input id="courseTitle" name="courseTitle" type="text" value={this.state.courseTitle} onChange={this.handleChange} />

                                <p>By {this.state.firstName} {this.state.lastName}</p>

                                <label htmlFor="courseDescription">Course Description</label>
                                <input id="courseDescription" name="courseDescription" type="text" value={this.state.courseDescription} onChange={this.handleChange} />
                            </div>
                            <div>
                                <label htmlFor="estimatedTime">Estimated Time</label>
                                <input id="estimatedTime" name="estimatedTime" type="text" value={this.state.estimatedTime} onChange={this.handleChange} />

                                <label htmlFor="materialsNeeded">Materials Needed</label>
                                <textarea id="materialsNeeded" name="materialsNeeded" type="text" value={this.state.materialsNeeded} onChange={this.handleChange} />

                                <button className="button" type="submit">Update Course</button>
                                <button className="button button-secondary" onClick={() => { this.props.history.push("/") }}> Cancel</button>
                            </div>


                        </div>
                    </form>
                </div>
            </main>
        )
    }
}

export default UpdateCourse;