export interface Course {
    id: string;
    title: string;
    code: string;
    studentsCount: number;
    isActive: boolean;
    imageUrl?: string;
    description?: string;
}