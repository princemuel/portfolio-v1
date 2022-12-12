import { links } from 'common';
import { Logo, NavLink, SocialLink } from 'components/atoms';

const Footer = () => {
  return (
    <footer className="mt-40 bg-zinc-800 w-full-shadow h-container">
      <section className="relative py-32 text-white/75 before:absolute before:top-0 before:left-2/4 before:h-2 before:w-40 before:-translate-x-2/4 before:bg-teal-500 before:content-[''] before:md:left-0 before:md:translate-x-0">
        <div className="mb-12 flex flex-col items-center gap-12 text-center md:items-start md:text-left lg:flex-row lg:justify-between">
          <Logo className="text-white" />

          <nav>
            <ul
              role={'list'}
              className="flex flex-col items-center gap-14 md:flex-row"
              aria-label="Secondary Navigation"
            >
              {links?.navigation?.map((link) => (
                <li key={link.text} className="text-white hover:text-teal-500">
                  <NavLink activeClassName="" href={link.url}>
                    <a>{link.text}</a>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="body-200 mt-12 grid justify-items-center gap-12 text-center md:grid-cols-2 md:justify-items-start md:text-left md:grid-areas-ipad lg:grid-areas-desktop">
          <p className="max-w-[60ch] md:grid-in-info">
            Hi there! Thanks for sticking with me till this point. If
            you&apos;re looking for a fast, perfomant, user-friendly and
            accessible website to represent your product or business, a
            consultation or you just want to say hi👋, please feel free to reach
            out. I will do my best to respond. 😊 The quickest way to reach me
            is via email.
          </p>

          <p className="md:grid-in-copy">
            Copyright &copy; {new Date().getFullYear()} Prince Muel. All Rights
            Reserved
          </p>

          <ul
            role={'list'}
            className="flex items-center gap-4 md:justify-self-end md:grid-in-social lg:self-end"
            aria-label="Social Links"
          >
            {links?.social?.map((link) => (
              <SocialLink
                key={link?.alt}
                {...link}
                classes="text-white hover:text-teal-500"
              />
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export { Footer };
