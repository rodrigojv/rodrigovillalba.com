import { Link, Stack } from "@chakra-ui/core";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer>
        <Stack isInline={true}>
          <Link
            isRound={true}
            fontSize="30px"
            isExternal
            href="https://github.com/rodrigojv"
          >
            <FaGithub />
          </Link>
          <Link
            isRound={true}
            fontSize="30px"
            isExternal
            href="https://twitter.com/rodrigoj_el"
          >
            <FaTwitter />
          </Link>
          <Link
            isRound={true}
            fontSize="30px"
            isExternal
            href="https://www.linkedin.com/in/rodrigo-jos%C3%A9-villalba-otto-0b313618/"
          >
            <FaLinkedin />
          </Link>
        </Stack>
      </footer>
      <style jsx>
        {`
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
}
