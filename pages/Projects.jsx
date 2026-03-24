import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
export default function Projects() {
    return (
        <div className="stack">
        <PageHeader
            title="Eurydice Lunnemann"
            />
        <h2 className="section-title">Projects</h2>
            <ProjectCard
                title={"Malio"}
                desc={"A Github site based stock option dashboard made for the Fidelity Hackathon competition with learning opportunities built in."}
                points={[{id:1, data:"Implemented seamless page navigation"},
                {id:2, data:"Created a simulator to help users learn before doing"},
                {id:3, data:"Added dynamic RSS feed for updating news"},
                {id:4, data:"Utilized Firebase for login system"}]}
            />
            <ProjectCard
                title={"API Collection"}
                desc={"A collection of 10 CRUD APIs with functional and secure database design."}
                points={[{id:1, data:"Designed endpoints + JSON schema responses"},
                    {id:2, data:"Added Bearer Token functionality"},
                    {id:3, data:"Made web and command line tests"}]}
            />
        </div>
    )

}
