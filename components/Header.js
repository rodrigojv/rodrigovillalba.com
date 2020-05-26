import Link from "next/link";
import { Flex } from "@chakra-ui/core";

function HeaderLink({ children, ...restProps }) {
  return (
    <>
      <style jsx>{`
        a {
          margin-right: 20px;
          color: #00a395;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
      <Link {...restProps}>{children}</Link>
    </>
  );
}

export default function Header() {
  return (
    <>
      <header className="header">
        <Flex justify="space-around" w="calc(100% - 40px)" mx="auto">
          <HeaderLink href="/">
            <a>Rodrigo Villalba</a>
          </HeaderLink>
          <Flex as="nav" justify="space-between">
            <HeaderLink href="/blog">
              <a>Blog</a>
            </HeaderLink>
            <HeaderLink href="/about">
              <a>About</a>
            </HeaderLink>
          </Flex>
        </Flex>
      </header>
      <style jsx>{`
        header {
          width: 100%;
          height: 100px;
          border-bottom: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        header a {
          font-weight: bold;
          font-size: 1.3rem;
          margin-right: 20px;
          color: #00a395;
          text-decoration: none;
        }
        header a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
