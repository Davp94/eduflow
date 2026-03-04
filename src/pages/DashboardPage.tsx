import { Plus, Star } from "lucide-react";
import { Button } from "../components/common/Button";
import CourseCard from "../components/CourseCard";
import { useCourseStore } from "../hooks/useCourseStore";

function DashboardPage() {
  //COMPONENT LOGIC
  const { courses, toggleCourseActive, addCourse } = useCourseStore();

  //VISUAL COMPONENT
  return (
    <>
      <div className="dashboard-page container">
        <div className="dashboard-header">
          <div className="dashboard-title-area">
            <h1 className="dashboard-title">Courses Overview</h1>
            <p className="dashboard-subtitle">You are managing 12 active courses this semester.</p>
          </div>
          <div className="dashboard-controls">
            <div className="view-toogle">
              <button className="view-btn active">Grid</button>
              <button className="view-btn">List</button>
            </div>
          </div>
        </div>
        <div className="course-grid">
          <div className="add-course-card">
            <div className="add-course-icon">
              <Plus size={24} className="text-primary" />
            </div>
            <h3 className="add-course-title">Add New Course</h3>
            <p className="add-course-subtitle">Set up a new curriculum</p>
          </div>
          {courses.map((course => (
            <>
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                code={course.code}
                studentsCount={course.studentsCount}
                isActive={course.isActive}
                imageUrl={course.imageUrl}
                onToggle={toggleCourseActive}
              />
            </>
          )))}
        </div>
        <div className="generator-banner">
          <div className="generator-content">
            <div className="generator-icon-wrapper">
              <Star size={24} className="text-white" />
            </div>
            <div className="generator-text">
              <h3 className="generator-title">Try Course Generator</h3>
              <p className="generator-desc">Use AI to build a syllabus based on your requirements.</p>
            </div>
          </div>
          <Button>Launch Assistant</Button>
        </div>
      </div>
    </>
  )
}

export default DashboardPage;
