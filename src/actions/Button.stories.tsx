import * as React from "react"
import { useArgs } from "@storybook/preview-api"
import { BADGES } from "../../.storybook/constants"
import { Button } from "../actions/Button"
import {
  AppearanceBorderType,
  AppearanceSizeType,
  AppearanceStyleType,
} from "../global/AppearanceTypes"
import { faArrowsRotate, faCoffee, faTable } from "@fortawesome/free-solid-svg-icons"

export default {
  title: "Actions/Button 🚩",
  decorators: [(storyFn: any) => <div>{storyFn()}</div>],
  parameters: {
    badges: [BADGES.GEN2],
    controls: {
      disable: true,
    },
  },
  argTypes: {
    label: {
      control: "text",
    },
    styleType: {
      options: AppearanceStyleType,
      control: "select",
    },
    border: {
      options: AppearanceBorderType,
      control: "select",
    },
    icon: {
      options: { arrowBack: "arrowBack", arrowForward: "arrowForward", coffee: faCoffee, rotate: faArrowsRotate, table: faTable },
      control: "select",
    },
    iconPlacement: {
      options: { left: "left", right: "right" },
      control: "select",
    },
  },
}

const handleClick = (e: React.MouseEvent) => {
  alert(`You clicked me! Event: ${e.type}`)
}

export const standard = {
  parameters: {
    controls: {
      disable: false,
    },
  },
  args: {
    label: "Hello Storybook",
  },
  render: (args: Record<string, any>) => {
    return (
      <>
        <Button
          styleType={args.styleType}
          border={args.border}
          icon={args.icon}
          iconPlacement={args.iconPlacement}
          onClick={handleClick}
        >
          {args.label}
        </Button>

        <p className="mt-10">Try out different styles with the controls below.</p>
      </>
    )
  },
}

export const withFontAwesomeIcon = {
  parameters: {
    controls: {
      disable: false,
      include: ["icon"]
    },
  },
  args: {
    icon: faArrowsRotate,
  },
  render: (args: Record<string, any>) => {
    return (
      <>
        <Button icon={args.icon} iconSize="medium" iconPlacement="left" onClick={handleClick}>
          FontAwesome is awesome
        </Button>

        <p className="mt-10">Try out different icons with the controls below.</p>
      </>
    )
  },
}

export const small = () => (
  <Button size={AppearanceSizeType.small} onClick={handleClick}>
    Small Button
  </Button>
)

export const big = () => (
  <Button size={AppearanceSizeType.big} onClick={handleClick}>
    Big Button
  </Button>
)

export const SmallAndPrimary = () => (
  <Button
    size={AppearanceSizeType.small}
    styleType={AppearanceStyleType.primary}
    onClick={handleClick}
  >
    Small and Primary Button
  </Button>
)

export const NormalCase = () => (
  <Button normalCase={true} onClick={handleClick}>
    Button (Normal Case)
  </Button>
)

export const NormalCaseAndSuccess = () => (
  <Button normalCase={true} styleType={AppearanceStyleType.success} onClick={handleClick}>
    Button (Normal Case)
  </Button>
)

export const borderless = () => (
  <Button border={AppearanceBorderType.borderless} onClick={handleClick}>
    Borderless Button
  </Button>
)

export const unstyled = () => (
  <Button unstyled={true} onClick={handleClick}>
    Unstyled Button
  </Button>
)

export const inlineIcon = () => (
  <>
    <Button inlineIcon="left" icon="arrowBack" onClick={() => alert("Click!")}>
      Go Back
    </Button>
    <br />
    <br />
    <Button inlineIcon="right" icon="right" onClick={() => alert("Click!")}>
      Go Forward
    </Button>
    <br />
    <br />
    <Button inlineIcon="right" icon="arrowForward" onClick={() => alert("Click!")}>
      Go Forward
    </Button>
  </>
)

export const detroitStyle = () => {
  const cssVarsOverride = `
    .button-overrides {
      --bloom-font-sans: Montserrat;
      --bloom-font-alt-sans: var(--bloom-font-sans);
      --bloom-color-primary: rgb(41,126,115);
      --bloom-color-primary-dark: rgb(0,68,69);

      --primary-appearance-hover-background-color: white;
      --primary-appearance-hover-label-color: var(--bloom-color-primary-dark);

      --outlined-appearance-hover-background-color: var(--bloom-color-primary);
      --outlined-appearance-hover-border-color: var(--bloom-color-primary);
    }

    .button-overrides .button {
      --normal-rounded: 60px;
      --normal-padding: 0.5rem 1rem;
      --normal-font-size: var(--bloom-font-size-base);
      --label-letter-spacing: normal;
      --label-transform: none;
    }
  `

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
        rel="stylesheet"
      ></link>
      <div className="button-overrides">
        <Button styleType={AppearanceStyleType.primary} onClick={handleClick}>
          "Detroit" Primary Button
        </Button>{" "}
        <Button onClick={handleClick}>"Detroit" Outlined Button</Button>
        <style>{cssVarsOverride}</style>
      </div>

      <p className="mt-12 font-semibold">Customized using the following variable overrides:</p>

      <pre>
        {cssVarsOverride.replace(".button-overrides ", ":root ").replace(".button-overrides ", "")}
      </pre>
    </>
  )
}

export const loading = () => (
  <Button styleType={AppearanceStyleType.primary} loading={true} onClick={handleClick}>
    Loading Button
  </Button>
)

export const transitions = () => (
  <Button onClick={handleClick} transition={true}>
    With Transitions
  </Button>
)

// TODO: replace with tailwind markup, if it matters
export const inaccessible = () => (
  <button style={{ backgroundColor: "red", color: "darkRed" }}>Inaccessible button</button>
)

// Example of how you can override axe a11y checks
inaccessible.parameters = {
  a11y: {
    config: {
      rules: [
        {
          id: "color-contrast",
          enabled: false,
        },
      ],
    },
  },
}
