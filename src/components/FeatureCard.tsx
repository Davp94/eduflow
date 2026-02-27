
import './FeatureCard.css';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}
function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <>
            <div className="feature-card">
                <div className="feature-icon-wrapper">
                    {icon}
                </div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-description">{description}</p>
            </div>
        </>
    )
}

export default FeatureCard;
