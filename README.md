<div align="center">
  <a href="https://intuit.github.io/Ignite/">
    <img width="200" height="200"
      src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/fire.png">
  </a>
  <h1>
    <a href="https://intuit.github.io/Ignite/">
      Ignite-Plugin-Prop-Types
    </a>
  </h1>
  <p>Takes a react component and displays a table with it's prop-types.</p>
</div>

## Usage

Install the plugin:

```bash
yarn add ignite-plugin-prop-types
```

Add it to your `.igniterc` or `package.json`:

```json
{
  "plugins": [
    ["PropTypes", "ignite-plugin-prop-types"],
    ["OtherComponentWithPropTypes", "/path/to/component"]
  ]
}
```

Use in your documentation:

```markdown
# OtherComponentWithPropTypes Documentation Page

Description of component.

<PropTypes component='OtherComponentWithPropTypes' />
```
