import * as React from "react"
import "./ListSection.scss"

export interface ListSectionProps {
  title: string
  subtitle: string | React.ReactNode
  children?: React.ReactNode
}

const ListSection = (props: ListSectionProps) => (
  <li className="list-section custom-counter__item">
    <header className="list-section__header custom-counter__header">
      <hgroup>
        <h3 className="custom-counter__title">{props.title}</h3>
        <span className="custom-counter__subtitle">{props.subtitle}</span>
      </hgroup>
    </header>

    {props.children}
  </li>
)

export { ListSection as default, ListSection }
