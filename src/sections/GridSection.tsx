import * as React from "react"
import "./GridSection.scss"

export interface GridCellProps {
  children: React.ReactNode
  span?: number
  className?: string
  ariaLabel?: string
}

const GridCell = (props: GridCellProps) => {
  const gridCellClasses = ["grid-item"]
  if (props.span) gridCellClasses.push(`md:col-span-${props.span}`)
  if (props.className) gridCellClasses.push(props.className)

  return (
    <div aria-label={props.ariaLabel ?? ""} className={gridCellClasses.join(" ")}>
      {props.children}
    </div>
  )
}

export interface GridSectionProps {
  title?: React.ReactNode
  edit?: string
  editHref?: string
  subtitle?: string
  description?: string
  tinted?: boolean
  grid?: boolean
  columns?: number
  inset?: boolean
  wrapperClassName?: string
  className?: string
  tightSpacing?: boolean
  reverse?: boolean
  children: React.ReactNode
  separator?: boolean
}

const GridSection = (props: GridSectionProps) => {
  const sectionClasses = ["grid-section"]
  if (props.separator) sectionClasses.push("has-separator")
  if (props.wrapperClassName) sectionClasses.push(props.wrapperClassName)

  const gridClasses = ["grid-section__inner"]
  const grid = typeof props.grid != "undefined" ? props.grid : true
  if (props.tinted) gridClasses.push("is-tinted")
  if (props.inset) gridClasses.push("is-inset")
  if (grid) {
    const columns = props.columns || 3
    gridClasses.push(`md:grid md:grid-cols-${columns}`)
    if (props.tightSpacing) {
      gridClasses.push("md:gap-2")
    } else {
      gridClasses.push("md:gap-8")
    }
    if (props.reverse) gridClasses.push("is-reversed")
  }
  if (props.className) gridClasses.push(props.className)

  const headerClasses = ["grid-section__header"]
  if (props.subtitle && (!props.title || !props.inset)) headerClasses.push("mb-0")

  const subtitleClasses = ["grid-section__subtitle"]
  if (props.title) subtitleClasses.push("mt-4")

  return (
    <section className={sectionClasses.join(" ")}>
      <div className={"grid-section__header-container"}>
        {(props.title || props.subtitle) && (
          <div>
            <header className={headerClasses.join(" ")}>
              {props.title && <h2 className="grid-section__title">{props.title}</h2>}
              {props.subtitle && <h3 className={subtitleClasses.join(" ")}>{props.subtitle}</h3>}
              {props.description && (
                <span className={"grid-section__description"}>{props.description}</span>
              )}
            </header>
          </div>
        )}
        {props.edit && props.editHref && (
          <span className="grid-section__edit-link">
            <a className="edit-link" href={props.editHref}>
              {props.edit}
            </a>
          </span>
        )}
      </div>

      <div className={gridClasses.join(" ")}>{props.children}</div>
    </section>
  )
}

export { GridSection as default, GridSection, GridCell }
