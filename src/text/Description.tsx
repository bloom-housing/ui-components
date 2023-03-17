import * as React from "react"
import "./Description.scss"
import Markdown, { MarkdownToJSX } from "markdown-to-jsx"

export interface DescriptionProps {
  term: string
  description: any
  dtClassName?: string
  markdown?: boolean
  markdownProps?: MarkdownToJSX.Options
}

export const Description = (props: DescriptionProps) => {
  const dtClasses = ["description__body"]
  if (props.dtClassName) dtClasses.push(props.dtClassName)

  return (
    <>
      <dt className="description__title">{props.term}</dt>
      {props.markdown ? (
        <dd className={dtClasses.join(" ")}>
          <Markdown
            options={{ disableParsingRawHTML: true, ...props.markdownProps }}
            children={props.description}
          />
        </dd>
      ) : (
        <dd className={dtClasses.join(" ")}>{props.description}</dd>
      )}
    </>
  )
}