import { ProjectPageTemplate } from "components";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferNextPropsType,
  NextPageWithLayout,
} from "types";

type Props = {} & InferNextPropsType<typeof getStaticProps>;

const ProjectDetail: NextPageWithLayout<Props> = (props) => {
  return <ProjectPageTemplate />;
};

export default ProjectDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // Passed to the page component as props
  return { props: {} };
};
