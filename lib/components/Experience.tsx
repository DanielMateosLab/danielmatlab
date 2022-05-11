export default function Experience() {
  const experience: Array<{
    company: string
    position: string
    startDate: string
    endDate: string
    location: string
  }> = [
    {
      position: "Ecological Agriculture",
      company: "Les Papillons Verts",
      startDate: "Nov 2021",
      endDate: "Apr 2022",
      location: "Cotignac, Provence-Alpes-Côte d'Azur, France",
    },
    {
      company: "Los Guindales",
      position:
        "Volunteering. Self Resiliance in Rural Areas. Ecological Agriculture",
      startDate: "Aug 2020",
      endDate: "Aug 2021",
      location: "Algatocín, Málaga, Spain",
    },
    {
      company: "Fisioterapia Árnica S.L.",
      position: "Physiotherapist",
      startDate: "June 2019",
      endDate: "August 2020",
      location: "A Coruña, Spain",
    },
    {
      company: "Arteixo Centro de Fisioterapia",
      position: "Physiotherapist",
      startDate: "July 2018",
      endDate: "May 2019",
      location: "A Coruña, Spain",
    },
  ]

  return (
    <article>
      <h2>Experience</h2>
      <div className="spaced-list">
        {experience.map((item) => (
          <div key={item.company} className="list-item">
            <span className="secondary-text">
              {item.startDate} - {item.endDate}
            </span>
            <span>{item.position}</span>
            <span className="thin-text">{item.company}</span>
            <span className="secondary-text">{item.location}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
