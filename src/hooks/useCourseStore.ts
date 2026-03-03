import { create } from "zustand";
import type { Course } from "../types/Course";


interface CourseState {
    courses: Course[];
    addCourse: (course: Course) => void;
    toggleCourseActive: (id: string, active: boolean) => void;
}

const INITIAL_COURSES: Course[] = [
    {
        id: 'c1',
        title: 'Introduction Programming',
        code: 'INF-101',
        studentsCount: 40,
        isActive: true,
        imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600&auto=format&fit=crop"
    },
       {
        id: 'c2',
        title: 'Advanced Programming',
        code: 'INF-301',
        studentsCount: 20,
        isActive: true,
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
    },
       {
        id: 'c3',
        title: 'React programming',
        code: 'RC-101',
        studentsCount: 10,
        isActive: true,
        imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&auto=format&fit=crop"
    }
]

export const useCourseStore = create<CourseState>((set)=>({
    courses: INITIAL_COURSES,
    addCourse: (course) => set((state)=>({courses: [...state.courses, course]})),
    toggleCourseActive: (id, active) => 
        set((state) => ({
            courses: state.courses.map((course)=>(course.id === id ? {...course, isActive: active} : course))
        }))
}))