import { useRouter } from "next/router"
import { gray } from "../../styles/constants"
import HorizontalContainer from "./HorizontalContainer"
import ProfilePicture from "./ProfilePicture"

export default function CvHeader() {
  const router = useRouter()
  const withProfilePicture = router.query.profilePicture

  return (
    <>
      <header className={withProfilePicture ? "with-pic" : ""}>
        <div className="texture" />
        <h1 className="name">Daniel Mateos Labrador</h1>
        <h2 className="role">Full Stack Developer</h2>
        <HorizontalContainer as="p" className="summary">
          Driven and passionate software developer seeking a company that shares
          my belief in technology's power to solve complex global issues. Eager
          to continue learning and collaborating with like-minded professionals
          to create impactful systems that make a real difference.
        </HorizontalContainer>

        {withProfilePicture && (
          <div className="pic-container">
            <ProfilePicture />
          </div>
        )}
      </header>

      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          margin-bottom: 2rem;
          padding: 2rem 0;
          gap: 0.75rem;
        }
        .with-pic {
          margin-bottom: calc(1.5rem + 100px);
          padding-bottom: calc(2rem + 100px);
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
          text-align: center;
          padding: 0 2rem;
        }
        .name {
          font-size: 2rem;
          font-weight: 300;
        }
        .role {
          font-size: 1.2rem;
          font-weight: 400;
          color: ${gray};
        }
        .summary {
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: 0.0225em;
          line-height: 150%;
          max-width: 1024px;
          margin: auto;
          text-align: justify;
        }

        .pic-container {
          position: absolute;
          bottom: -100px;
          left: calc(50% - 100px);
        }
      `}</style>
    </>
  )
}
