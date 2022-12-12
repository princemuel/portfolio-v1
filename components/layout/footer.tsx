import { links } from 'common';
import { Logo, NavLink, SocialLink } from 'components/atoms';

const Footer = () => {
  return (
    <footer className='h-container mt-40 bg-zinc-800 w-full-shadow'>
      <section className="relative py-32 text-white/75 before:content-[''] before:absolute before:top-0 before:left-2/4 before:w-40 before:h-2 before:bg-teal-500 before:-translate-x-2/4 before:md:left-0 before:md:translate-x-0">
        <div className='flex flex-col lg:flex-row items-center md:items-start lg:justify-between gap-12 mb-12 text-center md:text-left'>
          <Logo className='text-white' />

          <nav>
            <ul
              role={'list'}
              className='flex flex-col md:flex-row items-center gap-14'
              aria-label='Secondary Navigation'
            >
              {links?.navigation?.map((link) => (
                <li key={link.text} className='text-white hover:text-teal-500'>
                  <NavLink activeClassName='' href={link.url}>
                    <a>{link.text}</a>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='grid md:grid-areas-ipad lg:grid-areas-desktop md:grid-cols-2 justify-items-center md:justify-items-start gap-12 mt-12 body-200 text-center md:text-left'>
          <p className='md:grid-in-info max-w-[60ch]'>
            Hi there! Thanks for sticking with me till this point. If
            you&apos;re looking for a fast, perfomant, user-friendly and
            accessible website to represent your product or business, a
            consultation or you just want to say hi👋, please feel free to reach
            out. I will do my best to respond. 😊 The quickest way to reach me
            is via email.
          </p>

          <p className='md:grid-in-copy'>
            Copyright &copy; {new Date().getFullYear()} Prince Muel. All Rights
            Reserved
          </p>

          <ul
            role={'list'}
            className='md:grid-in-social flex items-center gap-4 md:justify-self-end lg:self-end'
            aria-label='Social Links'
          >
            {links?.social?.map((link) => (
              <SocialLink
                key={link?.alt}
                {...link}
                classes='text-white hover:text-teal-500'
              />
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export { Footer };
