import { Section as MainContent } from "components/atoms";
import { CTASection, Projects } from "components/organisms";

type Props = {};

const ProjectsPageTemplate = (props: Props) => {
  return (
    <MainContent as="main" id="main-content" aria-label="Projects Page Content">
      <Projects />
      <CTASection />
    </MainContent>
  );
};

export { ProjectsPageTemplate };
