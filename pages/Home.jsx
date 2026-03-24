import PageHeader from '../components/PageHeader.jsx'
import SkillList from '../components/SkillList'
export default function Home() {


  return (
      <div className="stack" >
          <PageHeader
              title="Eurydice Lunnemann"
          />
          <section className="card">
              <h2 className="section-title">Summary</h2>
              <p>
                  Full stack developer with a passion for both hardware and software.
                  Strong fundamentals in database design, backend development, and hardware interfaces.
                  Enjoys creating and learning.
              </p>
          </section>
          <SkillList
            skills={[{id:0, data:"HTML"},
                    {id:1, data:"CSS"},
                    {id:2, data:"JavaScript"},
                    {id:3, data:"PHP"},
                    {id:4, data:"MySQL"},
                    {id:5, data:"REST APIs"},
                    {id:6, data:"Git"},
                    {id:7, data:"OracleSQL"},
                    {id:8, data:"Testing"},
                    {id:9, data:"Scrum"}]}
          />


      </div>

  )
}







