import { links } from 'common';
import {
  Heading,
  Section as MainContent,
  Section,
  SocialLink,
  Text,
} from 'components/atoms';

type Props = {};

const ContactPageTemplate = (props: Props) => {
  return (
    <MainContent as='main' id='main-content' aria-label='Contact Page Content'>
      <Section className='h-container mt-20 py-12 border-y border-primary-300/20 | flex flex-col lg:flex-row gap-8'>
        <Heading className='flex-1'>Get in Touch</Heading>
        <div className='flex-1'>
          <Text className='body-200'>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </Text>

          <ul
            role={'list'}
            className='md:grid-in-social flex items-center gap-4 md:justify-self-end lg:self-end mt-10'
            aria-label='Social Links'
          >
            {links?.social?.map((link) => (
              <SocialLink
                key={link?.alt}
                {...link}
                classes='hover:text-primary-100'
              />
            ))}
          </ul>
        </div>
      </Section>

      <Section className='h-container mt-20 | flex flex-col lg:flex-row gap-8'>
        <Heading className='flex-1'>Contact Me</Heading>
        <form className='flex-1 text-[1.3rem] leading-500 space-y-12 > * + *'>
          <div className='space-y-4 > * + *'>
            <label className='block font-bold' htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              className='w-full py-4 px-6 bg-primary-300/20'
              id='name'
              placeholder='Jane Appleseed'
            />
          </div>

          <div className='space-y-4 > * + *'>
            <label className='block font-bold' htmlFor='email'>
              Email Address
            </label>
            <input
              type='email'
              className='w-full py-4 px-6 bg-primary-300/20'
              id='email'
              placeholder='email@example.com'
            />
          </div>

          <div className='space-y-4 > * + *'>
            <label className='block font-bold' htmlFor='message'>
              Message
            </label>
            <textarea
              name=''
              className='w-full min-h-[15rem] py-4 px-6 bg-primary-300/20'
              id='message'
              placeholder='How can I help'
            ></textarea>
          </div>

          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </Section>
    </MainContent>
  );
};

export { ContactPageTemplate };
