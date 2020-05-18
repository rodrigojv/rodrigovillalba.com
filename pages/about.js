import Layout from "../components/Layout";

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">
          Who is Rodrigo Villalba and what does he do anyways?
        </h1>

        <p>
          A software developer from Paraguay. Focusing now on web development
          and React but has also worked fullstack.
        </p>
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
