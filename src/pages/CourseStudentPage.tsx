import { useParams } from "react-router-dom";
import { useCourseStore } from "../hooks/useCourseStore";
import { useState } from "react";
import { useStudentStore } from "../hooks/useStudentStore";
import { Edit2, Eye, FileSpreadsheet, Plus, Trash2, Calendar, Users, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "../components/common/Button";
import AddStudentModal from "../components/AddStudentModal";
import "./CourseStudentPage.css";

// Helper function to get initials from full name
const getInitials = (fullName: string) => {
    return fullName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
};

export default function CourseStudentsPage() {
    const { courseId } = useParams<{ courseId: string }>();
    const { courses } = useCourseStore();
    const { students } = useStudentStore();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const courseStudents = students.filter(s => s.courseId === courseId);
    const course = courses.find(c => c.id === courseId);

    if (!course) {
        return <div className="container">Course not found</div>
    }

    return (
        <div className="students-page container">
            <div className="breadcrumbs">
                <span className="text-primary">Courses <ChevronRight size={14} /></span>
                <span className="current-page">{course.title}</span>
            </div>

            <div className="students-header-area">
                <div className="students-header-title">
                    <h1>Student List and Grading</h1>
                    <div className="students-header-subtitle">
                        <span><Calendar size={16} /> Semester 1</span>
                        <span>&bull;</span>
                        <span><Users size={16} /> {courseStudents.length} Students</span>
                    </div>
                </div>
                <div className="students-header-actions">
                    <button className="btn-secondary"><FileSpreadsheet size={18} /> Import from Excel</button>
                    <Button onClick={() => setIsModalOpen(true)}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Plus size={18} /> Add Student
                        </div>
                    </Button>
                </div>
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
                        {courseStudents.map((student, index) => {
                            const initials = getInitials(student.fullName);
                            // simple logic to vary avatar colors
                            const avatarClass = index % 3 === 0 ? 'student-avatar' : index % 3 === 1 ? 'student-avatar alt-1' : 'student-avatar alt-2';

                            return (
                                <tr key={student.id}>
                                    <td className="student-id-cell">{student.id}</td>
                                    <td className="student-name-cell">
                                        <div className={avatarClass}>{initials}</div>
                                        {student.fullName}
                                    </td>
                                    <td>{student.email}</td>
                                    <td className="grade-val">{student.grade}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="icon-btn"><Eye size={18} /></button>
                                            <button className="icon-btn"><Edit2 size={18} /></button>
                                            <button className="icon-btn"><Trash2 size={18} /></button>
                                            <button className="grade-action-btn">GRADE</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                        {courseStudents.length === 0 && (
                            <tr>
                                <td colSpan={5} style={{ textAlign: 'center', padding: '2rem' }}>
                                    <p>No students enrolled yet.</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="table-footer">
                    <span>Showing {courseStudents.length} of {courseStudents.length} students</span>
                    <div className="pagination-controls">
                        <button className="pagination-btn"><ChevronLeft size={18} /></button>
                        <button className="pagination-btn"><ChevronRight size={18} /></button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <AddStudentModal
                    courseId={courseId!}
                    total={(students.length + 1).toString().padStart(3, '0')}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    )
}