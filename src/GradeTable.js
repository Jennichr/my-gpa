import { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import GradeValue from "./GradeValue";

function GradeTable({ data, setGradeData }) {
    const [dataRows, setDataRows] = useState();
    // const [gradePointAverage, setGradePointAverage] = useState(0);
    const [overallGrade, setOverallGrade] = useState(0);

    useEffect(() => {
        var newSubject = []
        const x = data.map((v, i) => {
            let y = 'TERM ' + v.semester + '/' + v.year;
            let z = GradeValue(v.grade);
            newSubject.push({ yrs: y, subjects: v.subject, grades: v.grade, gradesval: z })
        });
        var filteredByYear = newSubject.reduce((v, i) => {
            v[i.yrs] = v[i.yrs] || [];
            v[i.yrs].push(i)
            return v;
        }, Object.create(null));

        // let gpa = 0;
        let gpac = 0;
        const smth = newSubject.map((v, i) => {
            gpac += v.gradesval;
            return (
                <Table key={i} style={{ backgroundColor: "lightgrey", padding: "5px", borderRadius: "8px", borderBottom: "1px solid white" }}>
                    <thead>
                        <tr>
                            <th align="left">{v.yrs}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{v.subjects}</td>
                            <td align="center">{v.grades}</td>
                        </tr>
                    </tbody>
                </Table>
            )
        })
        // console.log(filteredByYear)
        // console.log(newSubject)
        setDataRows(smth);
        setOverallGrade((gpac/newSubject.length).toFixed(2));

    }, [data]);

    return (
        <Container style={{ backgroundColor: "white", borderRadius: "10px", marginTop: "30px", padding: "10px" }}>
            <Table>
                <thead>
                    <tr>
                        <th align="right" style={{ width: "350px", color: "lightpink" }}>GPAC: {overallGrade}</th>
                    </tr>
                </thead>
            </Table>
            {dataRows}
        </Container>
    )
}

export default GradeTable