import React, { useRef } from "react";

export default function CreateCourse(props) {

    const courseTitle = useRef();
    const estimatedTime = useRef();

    return (
        <main>
            <div className="wrap">
                <h2> Create Course</h2>
                <div className="validation-errors">
                    <h3>Validation Errors</h3>
                    <ul>
                        <li>Please provide a vlaue for "Title".</li>
                        <li>Please provide a vlaue for "Description".</li>
                    </ul>
                </div>
                <form>
                    <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle">Course Title</label>
                            <input id="courseTitle" name="courseTitle" type="text" ref={courseTitle} />

                            <p>By Joe Smith</p>

                            <label htmlFor="courseDescription">Course Description</label>
                            <textarea id="courseDescription" name="courseDescription"></textarea>
                        </div>
                        <div>
                            <label htmlFor="estimatedTime">Estimated Time</label>
                            <input id="estimatedTime" name="estimatedTime" type="text" ref={estimatedTime} />

                            <label htmlFor="materialsNeeded">Materials Needed</label>
                            <textarea id="materialsNeeded" name="materialsNeeded"></textarea>
                        </div>
                    </div>
                </form>
                <button className="button" type="submit"> Create Course</button>
                <button className="button button-secondary" onCick={() => { props.history.push("/") }}> Cancel</button>
            </div>
        </main>
    )

}