import React from "react"
import { Heading } from "../text/Heading"
import "./ActionBlock.scss"

export enum ActionBlockLayout {
  block = "block",
  inline = "inline",
}

export enum ActionBlockBackground {
  none = "none",
  primaryLighter = "primary-lighter",
  primaryDarker = "primary-darker",
}
interface ActionBlockProps {
  actions: React.ReactNode[]
  background?: string
  className?: string
  header: string
  headerPriority?: number
  icon?: React.ReactNode
  layout?: ActionBlockLayout
  subheader?: string
}
const ActionBlock = ({
  actions,
  background = ActionBlockBackground.none,
  className,
  header,
  headerPriority,
  icon,
  layout = ActionBlockLayout.block,
  subheader,
}: ActionBlockProps) => {
  const actionBlockClasses = ["action-block", `${className ? className : ""}`]
  if (background) actionBlockClasses.push(background)
  if (layout === "block") {
    actionBlockClasses.push("action-block__block")
  } else {
    actionBlockClasses.push("action-block__inline")
  }

  return (
    <div className={actionBlockClasses.join(" ")}>
      <div className="action-block__head">
        {icon && <div className="action-block__icon">{icon}</div>}
        <Heading priority={headerPriority ?? 3} className="action-block__header">
          {header}
        </Heading>
        {subheader && layout === ActionBlockLayout.block && (
          <p className="action-block__subheader">{subheader}</p>
        )}
      </div>
      <div className="action-block__actions">{actions}</div>
    </div>
  )
}
export { ActionBlock as default, ActionBlock }
