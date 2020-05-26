import Layout from "../components/Layout";
import { Heading, Text } from "@chakra-ui/core";
const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <Heading fontSize="xl" className="title">
          Who is Rodrigo Villalba and what does he do anyways?
        </Heading>

        <Text mt={4}>
          A software developer from Paraguay. Specializing on web development ,
          React and JavaScript ecosystems.
        </Text>
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
