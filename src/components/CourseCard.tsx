import { useNavigate } from "react-router-dom";


interface CourseCardProps {
    id: string;
    title: string;
    code: string;
    studentsCount: number;
    isActive: boolean;
    imageUrl?: string;
    onToggle: (id: string, active: boolean) => void;
}
function CourseCard({
    id,
    title,
    code,
    studentsCount,
    isActive,
    imageUrl,
    onToggle }: CourseCardProps) {
    const navigate = useNavigate();    
    return (
        <>
            <div className="course-card" key={id}>
                <div 
                    className="course-image-container"
                    onClick={() => navigate(`/courses/${id}/students`)}
                >
                    {imageUrl ? (
                        <img src={imageUrl} alt={title} className="course-iamge" />
                    ) : (
                        <div className="course-image-placeholder" />
                    )}
                </div>
                <div className="course-content">
                    <h3 className="course-title">{title}</h3>
                    <p className="course-subtitle">
                        {studentsCount} students - {code}
                    </p>
                    <div className="course-actions">
                        <span className="course-enable-label"> ENABLE COURSE</span>
                        <button type="button" role="switch" onClick={() => onToggle(id, isActive)} className={`toggle-btn ${isActive ? 'active' : ''}`}></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard;
