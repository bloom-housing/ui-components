import * as React from "react"
import "./StepHeader.scss"

export interface StepHeaderProps {
  currentStep: number
  totalSteps: number
  stepPreposition: string
  stepLabeling: string[]
  className?: string
  priority?: number
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

const StepHeader = ({
  currentStep,
  totalSteps,
  stepPreposition,
  stepLabeling,
  className,
  priority,
}: StepHeaderProps) => {
  const limitedPriority = priority && priority >= 1 && priority <= 6 ? priority : 2
  const Tag = `h${limitedPriority}` as HeadingTag

  return (
    <Tag className={`step-header ${className || ""}`}>
      <span className="step-header__circle-number">{currentStep}</span>
      <span>{`${stepPreposition} ${totalSteps}`}</span>
      <span className="step-header__title">
        {stepLabeling[Math.min(currentStep - 1, stepLabeling.length - 1)]}
      </span>
    </Tag>
  )
}

export { StepHeader as default, StepHeader }
