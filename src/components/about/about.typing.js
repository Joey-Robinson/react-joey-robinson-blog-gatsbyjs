import React from "react"
import Typed from "react-typed"

const AboutTyping = () => (
  <>
    <Typed
      strings={[
        `{
  "beautify.ignore": [
  "src/components/*",
  "src/pages/*",
  "src/templates/*",
  "src/layouts/*",
  "gatsby-node.js",
  "gatsby-config.js",
],
  "editor.renderWhitespace": "all",
  "editor.fontSize": 24,
  "workbench.iconTheme": "material-icon-theme",
  "git.ignoreLegacyWarning": true,
  "workbench.activityBar.visible": false,
  "editor.minimap.enabled": false,
  "editor.tabSize": 2,
  "emmet.includeLanguages": {
    javascript: "javascriptreact",
  },
  "emmet.syntaxProfiles": {
    javascript: "jsx",
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "breadcrumbs.enabled": true,
  "prettier.eslintIntegration": true,
  "editor.formatOnSave": true,
  "window.zoomLevel": 1,
  "editor.cursorBlinking": "solid",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "prettier.semi": false,
}
`,
      ]}
      typeSpeed={20}
    />
  </>
)

export default AboutTyping
