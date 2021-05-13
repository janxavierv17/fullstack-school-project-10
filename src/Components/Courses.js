import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Courses(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        async function listOfCourses() {
            let response = await fetch("http://localhost:5000/api/courses")
            response = await response.json();
            setData(response.courses)
        }

        listOfCourses();
    }, [])

    return (
        <div >
            <main>
                <div className="wrap main--grid">
                    {data.map(courseDetails =>
                        <div key={courseDetails.id} className="course--module course--link">
                            <Link to={`/courses/${courseDetails.id}`} >
                                <h2 className="course--label">Course</h2>
                                <h3 className="course--title">{courseDetails.title}</h3>
                            </Link>
                        </div>
                    )}
                    {/* Create a course component goes here. */}
                </div>
            </main>
        </div>
    )
}