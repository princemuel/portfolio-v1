import { Section as MainContent } from 'components/atoms';
import { CTASection } from 'components/organisms';
import Link from 'next/link';

type Props = {};

const HomepageTemplate = (props: Props) => {
  return (
    <MainContent as="main" id="main-content" aria-label="Home Page Content">
      {/* HERO */}

      {/* ABOUT => Media Object */}
      {/* IMG */}
      {/* HEADING */}
      {/* TEXT */}
      <Link href={`/products/['id']`} as={''} passHref>
        <a className="btn btn-secondary">View Project</a>
      </Link>
      {/* ABOUT */}

      <CTASection />
    </MainContent>
  );
};

export { HomepageTemplate };
