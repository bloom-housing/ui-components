import React, { useState } from "react"

type Order = "above" | "below"

type ExpandableContentProps = {
  children: React.ReactNode
  strings: {
    readMore?: string
    readLess?: string
  }
  className?: string
  order?: Order
}

const ExpandableContent = ({
  children,
  strings,
  className,
  order = "above",
}: ExpandableContentProps) => {
  const [isExpanded, setExpanded] = useState(false)
  const rootClassNames = className ? `${className}` : undefined

  return (
    <div className={rootClassNames}>
      {order === "above" && <>{isExpanded && <div>{children}</div>}</>}
      <button
        type="button"
        className="button is-unstyled m-0 no-underline has-toggle"
        aria-expanded={isExpanded}
        onClick={() => {
          setExpanded(!isExpanded)
        }}
      >
        {isExpanded ? strings.readLess : strings.readMore}
      </button>
      {order === "below" && <>{isExpanded && <div>{children}</div>}</>}
    </div>
  )
}

export { ExpandableContent as default, ExpandableContent }
