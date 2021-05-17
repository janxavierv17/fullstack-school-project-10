import React, { Component } from "react"
export default class UpdateCourse extends Component {

    state = {
        title: "",
        description: "",
        estimatedTime: "",
        materialsNeeded: "",
        errors: []
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(() => {
            return {
                [name]: value
            };
        });
    }

    render() {
        const { title, description, estimatedTime, materialsNeeded } = this.state;

        return (
            <main>
                <div className="wrap">
                    <h2>Update Course</h2>
                    <form>
                        <div className="main--flex">
                            <div>
                                <label htmlFor="courseTitle">Course Title</label>
                                <input id="courseTitle" name="title" type="text" value={title} onChange={this.handleChange} />

                                <label htmlFor="courseDescription">Course Description</label>
                                <input id="courseDescription" name="description" type="text" value={description} onChange={this.handleChange} />

                                <label htmlFor="estimatedTime">Estimated Time</label>
                                <input id="estimatedTime" name="estimatedTime" type="text" value={estimatedTime} onChange={this.handleChange} />

                                <label htmlFor="materialsNeeded">Materials Needed</label>
                                <input id="materialsNeeded" name="materialsNeeded" type="text" value={materialsNeeded} onChange={this.handleChange} />

                                <button className="button" type="submit">Update Course</button>
                                <button className="button button-secondary" onClick={this.props.history.push("/")}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        )
    }
}