import Layout from "../components/Layout";
import { Heading, Text, Link, Box, Stack } from "@chakra-ui/core";

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <Box w="100%" maxW="960px" mx="auto">
          <Stack spacing={3}>
            <Heading>
              Who is Rodrigo Villalba and what does he do anyways?
            </Heading>
            <Text>
              A software developer from Paraguay. Specializing on web
              development, React and JavaScript ecosystems.
            </Text>
            <Heading mt={4} as="h2" size="lg">
              So, tell me more about this guy
            </Heading>
            <Text>
              Rodrigo is a software engineer currently working at{" "}
              <Link href="https://wwww.sodep.com.py" isExternal>
                Sodep
              </Link>{" "}
              as a Software Developer. He graduated from Católica University in
              Asunción and has a Computer Science degree, which for him is only
              a fancy label that allows him to trick people into believing that
              he actually knows what he is doing.
            </Text>
            <Heading as="h3" size="lg">
              Technical interests
            </Heading>
            <Text>
              Rodrigo has a lot of technical interests, his main focus being
              React, Node, GraphQL and the JavaScript ecosystem.
            </Text>
            <Text>
              He considers himself proficient at technical writing, teaching and
              mentoring, and also likes writing blog posts where he talks about
              himself in third person.
            </Text>
            <Text>
              Code quality is also a special interest of him, and anything that
              is related to that subject, like applying refactoring techniques,
              thinking about design principles, and solving complex architecture
              problems.
            </Text>
            <Heading as="h2" size="lg">
              Non-technical interests
            </Heading>
            <Text>
              When he is not being technical, Rodrigo enjoys spending time
              running, meditating and reading. His favorite type of books are
              the mind expanding ones and memoirs.
            </Text>
            <Text>
              He also loves playing the guitar and watching movies and TV shows.
            </Text>
            <Text>
              That is it for now, if you want to get in touch with Rodrigo, the
              best way to reach out to him is via{" "}
              <Link isExternal href="https://twitter.com/rodrigoj_el">
                Twitter
              </Link>{" "}
            </Text>
            <Text>Cheers! ❤️</Text>
          </Stack>
        </Box>
      </Layout>
    </>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
