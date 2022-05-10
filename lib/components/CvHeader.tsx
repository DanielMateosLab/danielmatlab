import { gray } from "../../styles/constants"

export default function CvHeader() {
  return (
    <>
      <header>
        <div className="texture" />
        <h1 className="name">Daniel Mateos Labrador</h1>
        <h2 className="role">Full Stack Developer</h2>
      </header>

      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          margin-bottom: 3rem;
          padding: 3rem 0;
        }
        .texture {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          z-index: 0;
          opacity: 0.6;
        }
        header > :not(.texture) {
          z-index: 1;
        }

        .name,
        .role {
          margin: 0;
          text-transform: uppercase;
        }
        .name {
          font-size: 2rem;
          font-weight: 300;
          margin-bottom: 0.75rem;
        }
        .role {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          font-weight: 400;
          color: ${gray};
        }
      `}</style>
    </>
  )
}
