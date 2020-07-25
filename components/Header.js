import Link from "next/link";
import { Flex, Box } from "@chakra-ui/core";

export default function Header() {
  return (
    <>
      <header>
        <Flex
          justify={["space-between", "space-around"]}
          w={["calc(100% - 120px)", "calc(100% - 40px)"]}
          mx="auto"
        >
          <Link href="/">
            <a className="brand">Rodrigo Villalba</a>
          </Link>
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
      </header>
      <style jsx>{`
        header {
          background-color: #b6b6b6;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1.5rem 0;
        }
        .navbar a {
          font-weight: 400;
          font-size: 1rem;
          padding: 1rem 1.5rem;
          margin: 0 0.25rem;
          color: #faf8ff;
          text-decoration: none;
          border-radius: 0.3rem;
        }

        a.brand {
          font-weight: 600;
          color: #faf8ff;
          font-size: 1rem;
        }

        .navbar a:hover {
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
