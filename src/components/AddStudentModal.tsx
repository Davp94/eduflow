import { useState } from "react";
import { useStudentStore } from "../hooks/useStudentStore";
import type { Student } from "../types/Student";
import { Button } from "./common/Button";
import { Hash, User, Mail, Save } from "lucide-react";
import "./AddStudentModal.css";

interface AddStudentModalProps {
    courseId: string;
    onClose: () => void;
    total: string;
}

export default function AddStudentModal({ courseId, onClose, total }: AddStudentModalProps) {
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
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Add New Student</h2>
                    <p>Register a student and assign their initial course performance.</p>
                </div>
                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-section">
                        <h3>STUDENT INFORMATION</h3>

                        <div className="form-group">
                            <label>Student ID</label>
                            <div className="input-wrapper">
                                <Hash className="input-icon" size={18} />
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="e.g. STU-2024-001"
                                    value={studentId}
                                    onChange={(e) => setStudentId(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Full Name</label>
                            <div className="input-wrapper">
                                <User className="input-icon" size={18} />
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="e.g. Alexander Pierce"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <div className="input-wrapper">
                                <Mail className="input-icon" size={18} />
                                <input
                                    type="email"
                                    className="form-input"
                                    placeholder="alex@university.edu"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grade-section">
                            <h3>INITIAL GRADE</h3>
                            <div className="grade-box">
                                <div className="grade-info">
                                    <h4>Score (0-100)</h4>
                                    <p>Enter the current cumulative grade for the student.</p>
                                </div>
                                <div className="grade-input-wrapper">
                                    <input
                                        type="number"
                                        min="0"
                                        max="100"
                                        className="grade-input"
                                        value={grade}
                                        onChange={(e) => setGrade(Number(e.target.value))}
                                    />
                                    <span className="grade-symbol">%</span>
                                </div>
                            </div>
                        </div>

                        <div className="modal-actions">
                            <Button type="submit" className="save-btn">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Save size={20} /> Save Student Profile
                                </div>
                            </Button>
                            <button type="button" className="cancel-btn" onClick={onClose}>
                                Cancel and Go Back
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}