import Link from "next/link";
import { Flex, Box } from "@chakra-ui/core";
import Container from "./Container";

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
              <Link href="/">
                <a className="brand">Rodrigo Villalba</a>
              </Link>
            </Box>
            <Box className="navbar">
              <nav className="navbar">
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
                <Link href="/about">
                  <a>About</a>
                </Link>
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
        a.brand:hover {
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
