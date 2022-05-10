export default function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="root">
        <div>
          <div className="dash" />
        </div>
        <span>{children}</span>
      </div>

      <style jsx>
        {`
          .root {
            display: flex;
            align-items: baseline;
          }
          .dash {
            width: 1rem;
            height: 0.25rem;
            border-top: 1px solid black;
            margin: 0 0.5rem;
          }
        `}
      </style>
    </>
  )
}
