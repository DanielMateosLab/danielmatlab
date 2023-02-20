import { ElementType, FC, HTMLAttributes } from "react"

interface HorizontalContainerProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType
}

const HorizontalContainer: FC<HorizontalContainerProps> = ({
  as: Tag = "div",
  className,
  children,
  ...props
}) => {
  return (
    <>
      <Tag
        className={
          className
            ? `horizontal-container ${className}`
            : "horizontal-container"
        }
        {...props}
      >
        {children}
      </Tag>

      <style jsx>
        {`
          .horizontal-container {
            padding: 0 1rem;
            max-width: 1024px;
            margin: auto;
          }
          @media (min-width: 768px) {
            .horizontal-container {
              padding: 0 4rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default HorizontalContainer
