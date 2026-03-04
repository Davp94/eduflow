import { useParams } from "react-router-dom";
import { useCourseStore } from "../hooks/useCourseStore";
import { useState } from "react";
import { useStudentStore } from "../hooks/useStudentStore";
import { Edit2, Eye, FileSpreadsheet, Plus, Trash2 } from "lucide-react";
import { Button } from "../components/common/Button";
import AddStudentModal from "../components/AddStudentModal";

export default function CourseStudentsPage() {
    const { courseId } = useParams<{courseId: string}>();
    const { courses } = useCourseStore();
    const { students } = useStudentStore();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const courseStudents = students.filter(s => s.courseId === courseId);
    const course = courses.find(c=>c.id===courseId);

    if(!course) {
        return <div className="container">Course not found</div>
    }

    return (
        <div className="students-page container">
            <div className="breadcumbs">
                <span className="text-primary">Courses-</span>
                <span className="current-page">{course.title}</span>
            </div>
            <div className="students-header-area">
                <div>
                    <h1>Student List and Grading</h1>
                    <div>
                        <span>{courseStudents.length} Students</span>
                    </div>
                </div>
                <div>
                    <button><FileSpreadsheet size={18}/> Import to Excel</button>
                </div>
                <Button><span><Plus size={18}/> Add student</span></Button>
            </div>

            <div className="table-container">
                <table className="students-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FULL NAME</th>
                            <th>EMAIL</th>
                            <th>GRADE (0-100)</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseStudents.map((student) => {
                            const color = 'red';
                            return (
                                <tr key={student.id}>
                                    <td>{student.studentId}</td>
                                    <td>{student.fullName}</td>
                                    <td>{student.email}</td>
                                    <td>{student.grade}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="icon-btn"><Eye size={18}/></button>
                                            <button className="icon-btn"><Edit2 size={18}/></button>
                                            <button className="icon-btn"><Trash2 size={18}/></button>
                                            <button className="grade-action-btn">Grade</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                        {courseStudents.length === 0 && (
                            <tr>
                                <td>
                                    <p>No students enrolled yet.</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {isModalOpen && (
                <AddStudentModal courseId={courseId} onClose={()=>setIsModalOpen(false)}/>
            )}
        </div>
    )

}