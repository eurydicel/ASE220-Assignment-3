export default function ProjectCard({title, desc, points}) {
    const pnt_itms = points.map((point)=>
        <li>{point.data}</li>
    )
    return (
        <article className="card">
            <div className="project__top">
                <h3 className="project__title">{title}</h3>
            </div>
            <p className="muted">
                {desc}
            </p>
            <ul className="bullets">
                {pnt_itms}
            </ul>
            <div className="project__links">
                <a className="link" href="https://github.com/milnera2/Malio-Stock-Options-Learning-Dashboard">Code</a>
            </div>
        </article>
    )
}