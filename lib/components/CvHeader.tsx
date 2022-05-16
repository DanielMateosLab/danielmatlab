import { useRouter } from "next/router"
import { gray } from "../../styles/constants"
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
        {withProfilePicture && <ProfilePicture />}
      </header>

      <style jsx>{`
        :global(body) {
          font-size: ${withProfilePicture ? "20px" : "22px"};
        }
        header {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          margin-bottom: 3rem;
          padding: 6rem 0;
        }
        .with-pic {
          margin-bottom: calc(4rem + 100px);
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
