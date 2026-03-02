import * as React from "react"

export interface HeadingProps {
  children?: React.ReactNode
  className?: string
  priority?: number
  styleType?: HeaderType
}

export type HeaderType = keyof typeof HeaderStyleMap

const HeaderStyleMap = {
  largePrimary: "text__large-primary",
  mediumNormal: "text__medium-normal",
  smallWeighted: "text__small-weighted",
  smallNormal: "text__small-normal",
  underlineWeighted: "text__underline-weighted",
  lightWeighted: "text__light-weighted",
  capsWeighted: "text__caps-weighted",
}

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

const Heading = (props: HeadingProps) => {
  const priority = props.priority && props.priority >= 1 && props.priority <= 6 ? props.priority : 1
  const Tag = `h${priority}` as HeadingTag
  const classNames = []
  if (props.styleType) classNames.push(HeaderStyleMap[props.styleType])
  if (props.className) classNames.push(props.className)

  return <Tag className={classNames.join(" ")}>{props.children}</Tag>
}

export { Heading as default, Heading }
