import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export default function CourseDetail(props) {

    const id = props.match.params.id

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchCourse() {
            let response = await fetch(`http://localhost:5000/api/courses/${id}`)
            response = await response.json();
            setData(response)
            setLoading(false)
        }
        fetchCourse();
    }, [id])


    let materialsNeeded = ""
    if (!loading && data.course.materialsNeeded !== null) {
        const splitMaterialString = data.course.materialsNeeded.split("*")
        const filteredString = splitMaterialString.filter(function (el) {
            return el !== ""
        })
        materialsNeeded = filteredString.map((mats, index) => <li key={index}> {mats} </li>)
    }

    console.log(data)
    return (
        <main>
            <div className="actions--bar">
                <div className="wrap">
                    <div className="button">
                        <Link to={`/courses/${id}/update`}>Update Course</Link>
                    </div>
                    <div className="button">
                        <Link to="/">Delete Course</Link>
                    </div>
                    <div className="button button-secondary">
                        <Link to="/">Return to List</Link>
                    </div>
                </div>
            </div>

            {loading
                ? <h1>Loading ...</h1>
                : <div className="main--flex">
                    <div>
                        <h3 className="course--detail--title">Course</h3>
                        <h4 className="course--name">{data.course.title}</h4>
                        <p>By: {data.course.User.firstName} {data.course.User.lastName}</p>
                        <p>{data.course.description}</p>
                    </div>
                    <div>
                        <h3 className="course--detail-title">Estimated Time</h3>
                        <p>{data.course.estimatedTime}</p>
                        <h3 className="course--detail--title">Materials Needed</h3>
                        <ul className="course--detail-list">
                            {materialsNeeded}
                        </ul>
                    </div>
                </div>
            }
        </main>
    )
}
