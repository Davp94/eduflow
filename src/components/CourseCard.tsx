

interface CourseCardProps {
    id: string;
    title: string;
    code: string;
    studentsCount: number;
    description?: string;
    isActive: boolean;
    imageUrl?: string;
    onToggle: (id: string, active: boolean) => void;
}
function CourseCard({
    id, 
    title, 
    code,
    studentsCount,
    description,
    isActive,
    imageUrl,
    onToggle }: CourseCardProps) {
    return (
        <>
            <div className="course-card">
               <div className="course-image-container">
                    {imageUrl ? (
                        <img src={imageUrl} alt={title} className="course-iamge"/>                        
                    ) : (
                        <div className="course-image-placeholder"/>
                    )}
               </div>
               <div className="course-content">
                    <h3 className="course-title">{title}</h3>
                    <p className="course-subtitle">
                        {studentsCount} students - {code}
                    </p>
                    <div className="course-actions">
                        <span className="course-enable-label"> ENABLE COURSE</span>
                        <button type="button" role="switch" disabled  onClick={()=>onToggle(id, isActive)} className="toggle-btn"></button>
                    </div>
               </div>
            </div>
        </>
    )
}

export default CourseCard;
