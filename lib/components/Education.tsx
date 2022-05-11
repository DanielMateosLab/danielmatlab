export default function Education() {
  const education: Array<{
    school: string
    degree: string
    startDate: string
    endDate: string
  }> = [
    {
      school: "4GeeksAcademy, Spain",
      degree: "Full Stack Web Developer Bootcamp",
      startDate: "January 2022",
      endDate: "May 2022",
    },
    {
      school: "University of Salamanca, Spain",
      degree: "Physiotherapy Degree",
      startDate: "September 2014",
      endDate: "July 2018",
    },
  ]

  return (
    <article>
      <h2>Education</h2>
      <div className="spaced-list">
        {education.map((item) => (
          <div key={item.degree} className="list-item">
            <span className="secondary-text">
              {item.startDate} - {item.endDate}
            </span>
            <span>{item.degree}</span>
            <span className="thin-text">{item.school}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
