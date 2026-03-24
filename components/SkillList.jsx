export default function SkillList(props) {
    const skills = props.skills;
    const items = skills.map((skill) =>
        <span className="chip" role="listitem">{skill.data}</span>
    )
    return (
        <div className="card-fit">
            <h2 className="section-title">Skills</h2>
        <div className="chips" role="list" aria-label="Skill tags">
            {items}

        </div>
        </div>
    )
}