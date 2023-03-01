import Image from "next/image"
import profilePic from "../../public/profile.jpg"

export default function ProfilePicture() {
  return (
    <>
      <Image
        alt="A picture of me"
        className="profile-pic"
        src={profilePic}
        width="200"
        height="200"
      />

      <style jsx>
        {`
          :global(.profile-pic) {
            border-radius: 50%;
          }
        `}
      </style>
    </>
  )
}
