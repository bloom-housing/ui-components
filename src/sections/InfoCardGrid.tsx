import * as React from "react"
import { HeaderType, Heading } from "../text/Heading"
import "./InfoCardGrid.scss"

export interface InfoCardGridProps {
  title: string
  subtitle?: string
  headingStyle?: HeaderType
  children: React.ReactNode
}

const InfoCardGrid = (props: InfoCardGridProps) => (
  <section className="info-cards">
    <header className="info-cards__header">
      <Heading
        styleType={props.headingStyle || "underlineWeighted"}
        priority={2}
        className={"info-cards__title"}
      >
        {props.title}
      </Heading>
      {props.subtitle && <p className="info-cards__subtitle">{props.subtitle}</p>}
    </header>
    <div className="info-cards__grid">{props.children}</div>
  </section>
)

export { InfoCardGrid as default, InfoCardGrid }
