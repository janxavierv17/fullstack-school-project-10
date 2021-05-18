import React from "react"

const UpdateCourse = (props) => {
    const handleChange = (event) => {
        event.preventDefault();
        console.log("HANDLING CHANGE ....")
    }
    return (
        <main>
            <div className="wrap">
                <h2>Update Course</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle">Course Title</label>
                            <input id="courseTitle" name="title" type="text" value="title" onChange={handleChange} />

                            <label htmlFor="courseDescription">Course Description</label>
                            <input id="courseDescription" name="description" type="text" value="description" onChange={handleChange} />

                            <label htmlFor="estimatedTime">Estimated Time</label>
                            <input id="estimatedTime" name="estimatedTime" type="text" value="estimatedTime" onChange={handleChange} />

                            <label htmlFor="materialsNeeded">Materials Needed</label>
                            <input id="materialsNeeded" name="materialsNeeded" type="text" value="materialsNeeded" onChange={handleChange} />

                            <button className="button" type="submit">Update Course</button>
                            {/* <button className="button button-secondary" onClick={props.history.push("/")}>Cancel</button> */}
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default UpdateCourse;