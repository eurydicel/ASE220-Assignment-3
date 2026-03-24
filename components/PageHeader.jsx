export default function PageHeader({ title }) {
  return (
    <header className="page-header">
      <div>
        <h1 className="page-title">{title}</h1>
      </div>
    </header>
  )
}
