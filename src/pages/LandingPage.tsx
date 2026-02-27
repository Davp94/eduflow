import { useNavigate } from "react-router-dom"
import { Button } from "../components/common/Button"
import FeatureCard from "../components/FeatureCard";
import { BarChart2, BookOpen, FolderHeart } from "lucide-react";

// styles
import './LandingPage.css';

function LandingPage() {
    //COMPONENT LOGIC
    const navigate = useNavigate();

    const features = [
        {
            icon: <BookOpen />,
            title: "Course tracking",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsum velit esse"
        },
        {
            icon: <BarChart2 />,
            title: "Course tracking",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsum velit esse"
        },
        {
            icon: <FolderHeart />,
            title: "Course tracking",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsum velit esse"
        }
    ]
    //VISUAL COMPONENT
    return (
        <>
            <div className="landing-page">
                <section className="container hero-section">
                    <div className="hero-content">
                        <p className="hero-subtitle">Intelligent Education Management</p>
                        <h1 className="hero-title">Streamline <br /> your <br /> <span>Classroom</span></h1>
                        <p className="hero-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo odio illum nam ratione blanditiis, eos iste ducimus repudiandae minus laudantium, aliquid dolorum, reprehenderit ipsa ea magnam commodi optio quisquam.</p>
                        <div className="hero-action">
                            <Button size="lg" onClick={() => navigate('/dashboard')}>
                                Go To courses
                            </Button>
                            <Button variant="outline" size="lg" onClick={() => navigate('/dashboard')} className="btn-outline">
                                Watch a Demo
                            </Button>
                        </div>
                    </div>
                    <div className="hero-image-wrapper">
                        <img src="" alt="Image hero eduflow" className="hero-image"/>
                    </div>
                </section>
                <section className="container features-section">
                    <div className="features-header">
                        <h2>Simplifyyour teaching workflow</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsum velit esse, quasi ab deserunt sed? Aliquam eligendi aspernatur atque maiores, asperiores natus obcaecati. Placeat itaque repellat iste iusto quos!</p>
                    </div>
                    <div className="features-grid">
                        {features.map(feature => 
                        <FeatureCard
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />)}
                    </div>
                </section>
            </div>
        </>
    )
}

export default LandingPage
