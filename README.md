# Bloom UI Components

This package contains a component library used by the Bloom affordable housing system.

## Locales/Translations

`src/locales` contains JSON files with translated keys and copy used within all of our packages.

## Storybook

UIC uses [Storybook](https://storybook.js.org/) to document our components, and reviewing it is the best way to get started and understand what's available. You can view our published Storybook [here](https://storybook.bloom.exygy.dev/).

To spin up Storybook locally, from root run:

```
yarn start
```

## Testing

To run the unit test suite which is built with Jest and RTL, from root run:

```
yarn test
```

or

```
yarn test:coverage
```

which generates local coverage reports.

To run our accessibility suite which leverages Storybook, from root run:

```
yarn test:a11y
```

## Tailwind

- We are using the [Tailwind](https://v2.tailwindcss.com) framework to make use of their low-level utility classes in page-level markup and sometimes in components. We configure the settings in `tailwind.config.js`.

## Vendor Plugins

- [AG Grid](https://www.ag-grid.com)

## Style Conventions

- Our components are styled with SCSS files located alongside React component TS files.

- We are currently in the process of migrating components to a second-generation styling convention which relies on CSS variables for internal design tokens and removes `@apply` Tailwind statements. V2 style components are indicated in our Storybook with a :triangular_flag_on_post:.

- Bloom design tokens encompass many styles including colors, typography settings, sizes, border, + more.

- More information on this migration can be found in [V2Styles.md](https://github.com/bloom-housing/ui-components/blob/main/V2Styles.md).

### Naming Conventions

- Our recommendation for class naming methodology is a modified version of BEM. It still uses blocks, sections within blocks and modifiers, but with a subclass syntax for modifiers.

  - Avoid using Sass nesting to build class names

    - Avoid
      - .accordion
        - &-item
    - Preferred
      - .accordion
      - .accordion-item
      - .accordion-item\_\_label

  - Modify with adjectives
    - is-, has-
    - .accordion-item\_\_label.is-open

- Component naming
  - Be wary of naming components based on content, presentation, location, or theming, as this limits the use of the class or becomes confusing
  - Use capitals for React component names
    - SelectButton instead of selectbutton, or Menu instead of menu
- Avoid including any backend business logic in ui-components so that they may be consumed regardless of the backend implementation

### General Rules

- Don’t use IDs for styles.
- Don’t nest more than 3 layers deep.
- Don’t fix problems with !important. Use !important purposefully.
- Refrain from using overqualified selectors; div.container can simply be stated as .container.
- Use flex instead of float
- Use grid utilities for uniform grids

### Accessibility Considerations

- Storybook A11Y test suite runs on all PRs
- Storybook AXE panel when looking at an individual component can be useful
- Keyboard accessibility
  - Consider aria roles, focus state
- Consider color contrast
- Accessible forms
  - Labels for each input
  - Screen reader labels for inputs with no label
  - Fieldsets for groups
  - Required indicators
- Accessible data tables
- Alt tags for images
- Errors and alert messages
