import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

export default function Contact() {
    return (
        <div className="stack">
            <PageHeader
                title="Eurydice Lunnemann"
            />
            <section className="card-fit">
                <h2 className="section-title">Contact</h2>
                <ul className="list">
                    <li><span className="label">Email</span><a
                        href="mailto:eurydicelunnemann@gmail.com">eurydicelunnemann@gmail.com</a></li>
                    <li><span className="label">Phone</span><a href="tel:+18593935117">+1 (859) 393-5116</a></li>
                    <li><span className="label">GitHub</span><a href="https://github.com/eurydicel" aria-label="GitHub profile">@eurydicel</a></li>
                    <li><span className="label">LinkedIn</span><a href="https://www.linkedin.com/in/eurydice-lunnemann/" aria-label="LinkedIn profile">/in/eurydice-lunnemann</a>
                    </li>
                </ul>
            </section>
        </div>
    )

}
