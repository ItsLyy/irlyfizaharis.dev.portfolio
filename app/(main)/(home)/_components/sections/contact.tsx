import CardMediaSocial from "@/app/(main)/_components/general/card-media-social"
import { EnvelopeSimple, LinkedinLogo, GithubLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr"
import { forwardRef } from 'react';

const ContactSection = forwardRef(function ContactSection(props, ref) {
  return (
    <section ref={ref} id="contact" className="min-h-full w-full space-y-8 p-4 pr-18 snap-start md:pt-24 md:pr-24">
      <div>
        <h1 className="text-lg">Let's Connect</h1>
        <p className="text-zinc-400">
          I’m currently looking for new opportunities, my inbox is always open.
        </p>
      </div>
      <div className="flex gap-2">
        <CardMediaSocial icon={EnvelopeSimple} />
        <CardMediaSocial icon={LinkedinLogo} />
        <CardMediaSocial icon={InstagramLogo} />
        <CardMediaSocial icon={GithubLogo} />
      </div>
      <div>
        <form>
          <div className="flex gap-2 mb-4 w-full flex-col *:w-full">
            <div className="flex gap-2 flex-col">
              <label htmlFor="user-name">Name</label>
              <input name="user-name" id="user-name" type="text" className="rounded-md border-1 px-4 py-2 border-zinc-600 focus:outline-0 focus:border-zinc-500" placeholder="e.g Irly Fizaharis" />
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="user-email">Email</label>
              <input name="user-email" id="user-email" type="text" className="rounded-md border-1 px-4 py-2 border-zinc-600 focus:outline-0 focus:border-zinc-500" placeholder="e.g irly.fizaharis.dev@gmail.com" />
            </div>
          </div>
          <div className="flex gap-2 flex-col">
            <label htmlFor="user-message">Message</label>
            <textarea name="user-message" id="user-message" type="text" className="rounded-md border-1 px-4 py-2 border-zinc-600 min-h-20 max-h-36 focus:outline-0 focus:border-zinc-500" />
          </div>
          <div className="flex justify-end mt-8">
            <button type="submit" className="bg-zinc-200 rounded-md px-3 py-2 text-zinc-800 cursor-pointer">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
})

export default ContactSection;

