
export default function ExperienceItem({role, org, date, desc}) {
    return (
        <article className="card">
            <div className="timeline-item__meta">
                <h3 className="timeline-item__title">{role} - {org}</h3>
                <p className="muted">{date}</p>
                <p >{desc}</p>
            </div>

        </article>
    )
}