/**
 * Code borrowed from:
 * https://github.com/domitriusclark/mdnext/blob/d8854a768e239b00f0c8f116af85dca81f8a2c4a/packages/mdnext/src/components/Code.js
 */
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import PropTypes from "prop-types";

export default function Code({ value, language }) {
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={value.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            overflow: "scroll",
            marginTop: 20,
            marginBottom: 20,
            padding: 16,
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

Code.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};
