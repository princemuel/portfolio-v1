import { Heading, Section as MainContent } from "components/atoms";
import { CTASection, Project } from "components/organisms";

type Props = {};

const ProjectPageTemplate = (props: Props) => {
  return (
    <MainContent
      as="main"
      id="main-content"
      aria-label="Single Project Page Content"
    >
      <Heading>Project Detail</Heading>
      <Project />
      <CTASection />
    </MainContent>
  );
};

export { ProjectPageTemplate };
