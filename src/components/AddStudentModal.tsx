import { useState } from "react";
import { useStudentStore } from "../hooks/useStudentStore";
import type { Student } from "../types/Student";
import { Button } from "./common/Button";
interface AddStudentModalProps {
    courseId: string;
    onClose: () => void;
    total: string;
}
export default function AddStudentModal({courseId, onClose, total}: AddStudentModalProps) {
    const { addStudent } = useStudentStore()
    const [studentId, setStudentId] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [grade, setGrade] = useState(0);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const newStudent: Student = {
            id: `STU-${total}`,
            studentId: studentId,
            fullName,
            email,
            grade,
            courseId
        }

        addStudent(newStudent);
        onClose();
        return (
            <div className="modal-overlay">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Add New Student</h2>
                        <p>Register a student in curser</p>
                    </div>
                    <form onSubmit={handleSubmit} className="modal-form">
                        <div className="form-section">
                            <h3>Student Info</h3>
                            <div className="form-group">
                                <label>Student ID</label>
                                <div className="input-wrapper">
                                    <input 
                                        type="text"
                                        className="form-input"
                                        value={studentId}
                                        onChange={(e) => setStudentId(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Full Name</label>
                                <div className="input-wrapper">
                                    <input 
                                        type="text"
                                        className="form-input"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <div className="input-wrapper">
                                    <input 
                                        type="email"
                                        className="form-input"
                                        value={fullName}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="modal-actions">
                                <Button type="submit" className="save-btn">Save Students Profile</Button>
                                <Button className="cancel-btn" onClick={onClose}>Cancel</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}