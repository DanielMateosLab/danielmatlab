import Image from "next/image"
import profilePic from "../../public/profile.jpg"

export default function ProfilePicture() {
  return (
    <>
      <div className="pic-container">
        <Image
          className="profile-pic"
          src={profilePic}
          width="200"
          height="200"
        />
      </div>

      <style jsx>
        {`
          :global(.profile-pic) {
            border-radius: 50%;
          }
          .pic-container {
            position: absolute;
            bottom: -100px;
            left: calc(50% - 100px);
          }
        `}
      </style>
    </>
  )
}
