import { Heading, Section, Text } from "components/atoms";
import { Fragment } from "react";

type Props = {};

const Project = (props: Props) => {
  return (
    <Fragment>
      <Section className="mt-20 h-container" aria-label="">
        <figure></figure>
      </Section>

      <Section as="article" className="mt-40 h-container" aria-label="">
        <div className="flex flex-col items-start gap-12 border-y border-zinc-800/10 py-24 sm:py-10">
          <Heading>Manage</Heading>

          <Text className="body-100">
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </Text>

          <div>
            <Text className="flex gap-2 font-sans text-400 font-bold leading-500 text-teal-500">
              <span>Interaction Design</span>
              <span>/</span>
              <span>Front End Development</span>
            </Text>

            <Text className="flex gap-2 font-sans text-400 font-bold leading-500 text-teal-500">
              <span>HTML</span>
              <span>/</span>
              <span>CSS</span>
              <span>/</span>
              <span>JS</span>
            </Text>
          </div>

          <a
            href="https://www.github.com/princemuel"
            className="btn btn-secondary"
          >
            Visit Website
          </a>
        </div>
      </Section>

      <Section className="h-container" aria-label="">
        <figure></figure>
      </Section>
    </Fragment>
  );
};

export { Project };
