import * as React from "react"
import "./MarkdownSection.scss"

export interface MarkdownSectionProps {
  fullwidth?: boolean
  padding?: boolean
  children: React.ReactNode
}

export const MarkdownSection = ({ fullwidth, padding = true, children }: MarkdownSectionProps) => {
  const contentWidth = fullwidth ? "markdown" : "markdown max-w-2xl"
  const sectionClassNames = ["markdown-section"]

  if (padding) sectionClassNames.push("markdown-section--with-padding")

  return (
    <div className={sectionClassNames.join(" ")}>
      <div className="markdown-section__inner">
        <div className={contentWidth}>{children}</div>
      </div>
    </div>
  )
}

export default MarkdownSection
