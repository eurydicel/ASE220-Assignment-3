import { useSearchParams} from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import ExperienceItem from '../components/ExperienceItem.jsx'
import QuoteWidget from "../components/QuoteWidget.jsx";
export default function Experience() {
    const [params, setParams] = useSearchParams()
    const query = params.get('q') ?? ''
    const num = query.trim()

    const handleSearch = (e) => setParams({ q: e.target.value })
    return (
        <div className="stack">
            <PageHeader
                title="Eurydice Lunnemann">
            </PageHeader>
            <h2 className="section-title">Experience</h2>
            <ExperienceItem
                role="Land Surveying Intern"
                org="Viox & Viox"
                date="July 2024 – Present"
                desc="Created a system of standards to modernize and streamline projects and Mastered Carlson Intellicad to optimize the drawing process"
            />
            <ExperienceItem
                role="Lighting Designer"
                org="St. Henry District High School"
                date="October 2022 – June 2024"
                desc="Revolutionized the theater's used of lighting by programming effects and created a framework for changing lights quickly within a scene"
            />
            <div className="card-fit">
                <h2 className="section-title">Quotes</h2>
                <input
                    className="input chip-input"
                    type="number"
                    placeholder="0"
                    value={query}
                    onChange={handleSearch}
                    aria-label="Search contacts"
                />
                <QuoteWidget
                    amount={num}
                />
            </div>
        </div>

    )

}
