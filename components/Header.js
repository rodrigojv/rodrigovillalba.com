import Link from "next/link";
import { Flex, Box } from "@chakra-ui/react";
import Container from "./Container";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

export default function Header() {
  return (
    <>
      <Flex
        as="header"
        w="100%"
        justify="center"
        align="center"
        py={6}
        backgroundColor="screencase"
      >
        <Container>
          <Flex justify="space-between">
            <Box>
              <HeaderLink href="/">
                <a className="brand">Rodrigo Villalba</a>
              </HeaderLink>
            </Box>
            <Box className="navbar">
              <nav className="navbar">
                <HeaderLink href="/blog">
                  <a>Blog</a>
                </HeaderLink>
                <HeaderLink href="/about">
                  <a>About</a>
                </HeaderLink>
              </nav>
            </Box>
          </Flex>
        </Container>
      </Flex>
      <style jsx>{`
        .navbar a {
          font-weight: 400;
          font-size: 1rem;
          color: #faf8ff;
          text-decoration: none;
          padding: 1rem 0.5rem;
          border-radius: 0.3rem;
        }

        a.brand {
          font-weight: 600;
          color: #faf8ff;
          font-size: 1rem;
          padding: 1rem 0.5rem;
          border-radius: 0.3rem;
        }

        .navbar a:hover,
        a.brand:hover,
        a.selected:not(.brand) {
          background-color: #ababab;
        }

        @media screen and (min-width: 800px) {
          .navbar a {
            font-size: 1.3rem;
            margin: 0 0.25rem;
            padding: 1rem 1.5rem;
          }
          a.brand {
            font-size: 1.3rem;
            margin-right: 3rem;
          }
        }
      `}</style>
    </>
  );
}

// This saved my day :)
// https://flaviocopes.com/nextjs-active-link/
function HeaderLink({ href, children }) {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} selected`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}

HeaderLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
