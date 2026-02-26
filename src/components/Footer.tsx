import { Globe, Mail, Share2 } from "lucide-react"
import './Footer.css'
function Footer() {
  //COMPONENT LOGIC
  
  //VISUAL COMPONENT
  return (
    <>
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-links">
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <a href="#" className="footer-link">Terms of Service</a>
                    <a href="#" className="footer-link">Documentation</a>
                    <a href="#" className="footer-link">Contact Support</a>
                </div>
                <div className="footer-social">
                    <a href="#"><Globe size={18}/></a>
                    <a href="#"><Mail size={18}/></a>
                    <a href="#"><Share2 size={18}/></a>
                </div>
                <div className="footer-copy">
                    &copy; {new Date().getFullYear()} Eduflow Teacher Portal. Built for educators, by educators
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
