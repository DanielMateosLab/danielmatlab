import { lightGray } from "../../styles/constants"

export default function Title1({ text }: { text: string }) {
  return (
    <>
      <div className="container">
        <div className="line" />
        <h2>{text}</h2>
        <div className="line" />
      </div>

      <style jsx>
        {`
          .container {
            display: flex;
            align-items: center;
          }
          .line {
            height: 0px;
            border: 2px solid ${lightGray};
            border-radius: 2px;
            flex-grow: 1;
          }
          h2 {
            font-size: 1.2rem;
            padding: 0 2rem;
          }
        `}
      </style>
    </>
  )
}
