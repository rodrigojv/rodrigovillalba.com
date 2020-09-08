import { useClipboard } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import PropTypes from "prop-types";

export default function CopyButton({ value }) {
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <Button aria-label="Copy text" role="button" onClick={onCopy}>
      {hasCopied ? "Copied" : "Copy"}
    </Button>
  );
}

CopyButton.propTypes = {
  value: PropTypes.string.isRequired,
};
