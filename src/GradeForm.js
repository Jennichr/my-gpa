import React from "react";
import { useFormik } from "formik";
import { subjects } from "./SubjectList";
import CustomSelect from "./CustomSelect";
import { Container, Row, Col } from "react-bootstrap";
import useLocalStorage from "react-localstorage-hook";
import GradeTable from "./GradeTable";

const generateArrayOfYear = () => {
    const fullYear = new Date().getFullYear();
    return Array.from(new Array(10), (v, i) => (fullYear - i).toString())
}
const years = generateArrayOfYear().map(opt => ({ label: opt, value: opt }));
const semesters = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' }
]

export function GradeForm() {

    const validate = v => {
        const errors = {}
        if (!v.year) {
            errors.year = 'Year is required'
        }
        if (!v.semester) {
            errors.semester = 'Semester is required'
        }
        if (!v.subject) {
            errors.subject = 'Subject is required'
        }
        if (!v.grade) {
            errors.grade = 'Grade is required'
        }
        return errors
    }
    const formik = useFormik({
        initialValues: {
            year: '',
            semester: '',
            subject: '',
            grade: ''
        },
        validate,
        onSubmit: value => {
            console.log(value)
            var grades = {
                year: value.year,
                semester: value.semester,
                subject: value.subject,
                grade: value.grade
            }
            gradeData.push(grades)
            setGradeData([...gradeData])
        }
    })

    const [gradeData, setGradeData] = useLocalStorage("gradeData", []);

    return (
        <div>
            <h1>My GPA</h1>
            <Container>
                <Row>
                    <Col xs={6} style={{ backgroundColor: "white", padding: "10px", borderRadius: "10px" }}>
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="year">Year</label>
                            <CustomSelect
                                options={years}
                                value={formik.values.year}
                                className={"input"}
                                onChange={value => formik.setFieldValue('year', value.value)}
                            />
                            {formik.errors.year ? <div className="error">{formik.errors.year}</div> : null}

                            <label htmlFor="semester">Semester</label>
                            <CustomSelect
                                options={semesters}
                                value={formik.values.semester}
                                className={"input"}
                                onChange={value => formik.setFieldValue('semester', value.value)}
                            />
                            {formik.errors.semester ? <div className="error">{formik.errors.semester}</div> : null}

                            <label htmlFor="subject">Subject</label>
                            <CustomSelect
                                options={subjects}
                                value={formik.values.subject}
                                className={"input"}
                                onChange={value => formik.setFieldValue('subject', value.value)} //name="subject"
                            />
                            {formik.errors.subject ? <div className="error">{formik.errors.subject}</div> : null}

                            <label htmlFor="grade">Grade</label>
                            <input
                                name="grade"
                                id="grade"
                                type="grade"
                                onChange={formik.handleChange}
                                className={"input2"}
                                value={formik.values.grade}
                                style={{ padding: '2px 10px', borderStyle: 'solid', borderWidth: '1px', borderColor: 'lightgrey' }}
                            />
                            {formik.errors.grade ? <div className="error">{formik.errors.grade}</div> : null}

                            <button type="submit">Add</button>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col><GradeTable data={gradeData} setDataItems={setGradeData} /></Col>
                </Row>
            </Container>
        </div>
    )
}