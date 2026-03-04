import { create } from "zustand";
import type { Student } from "../types/Student";

interface StudentState {
    students : Student[];
    addStudent: (student: Student) => void;
    deleteStudent: (id: string) => void;
    updateStudentGrade: (id: string, grade: number) => void;
}

const INITIAL_STUDENTS: Student[] = [
    {
        id: 's1',
        studentId: "STU-001",
        fullName: "Alice jhonson",
        email: "alice@example.com",
        grade: 96,
        courseId: 'c2'
    },
        {
        id: 's2',
        studentId: "STU-002",
        fullName: "Bob Smith",
        email: "bob@example.com",
        grade: 82,
        courseId: 'c2'
    },
        {
        id: 's3',
        studentId: "STU-003",
        fullName: "Charlie Davies",
        email: "cahrlie@example.com",
        grade: 100,
        courseId: 'c2'
    }
]

export const useStudentStore = create<StudentState>((set) => ({
    students: INITIAL_STUDENTS,
    addStudent: (student) => set((state) => ({students: [...state.students, student]})),
    deleteStudent: (id: string) => set((state) => ({students: state.students.filter(s=>s.id != id)})),
    updateStudentGrade: (id, grade) => set((state) => ({
        students: state.students.map(s=>s.id===id ? {...s,grade} : s)
    }))
}))