import { Heading, Section } from 'components/atoms';
import Link from 'next/link';

const CTASection = () => {
  return (
    <Section
      className="mt-20 flex flex-col items-center gap-12 py-20 text-center h-container sm:flex-row sm:text-left"
      aria-labelledby="cta-section"
    >
      <Heading id="cta-section" className="sm:flex-auto">
        Interested in doing a project together?
      </Heading>

      <hr className="sm:h-[1px] sm:w-2/5 sm:flex-initial sm:bg-zinc-800/20 md:flex-auto lg:w-full" />

      <Link href={`/contact`} passHref>
        <a className="btn btn-secondary sm:flex-none">Contact Me</a>
      </Link>
    </Section>
  );
};

export { CTASection };
