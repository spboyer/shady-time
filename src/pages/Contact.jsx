import SocialLinks from '../components/SocialLinks';

const podcastSocial = {
  twitter: 'https://twitter.com/shadytime',
  instagram: 'https://instagram.com/shadytime',
  linkedin: 'https://linkedin.com/company/shadytime',
  youtube: 'https://youtube.com/@shadytime',
  tiktok: 'https://tiktok.com/@shadytime',
};

export default function Contact() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-black mb-8">Get in Touch</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Social links */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold text-black mb-4">Follow Us</h2>
          <p className="text-medium-grey mb-6">
            Stay up to date with new episodes, behind-the-scenes content, and community discussions.
          </p>
          <SocialLinks social={podcastSocial} />
        </section>

        {/* Contact form */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold text-black mb-4">Send a Message</h2>
          <form
            action="mailto:hello@shadytime.com"
            method="POST"
            encType="text/plain"
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-soft-grey rounded-lg px-4 py-2.5 min-h-[44px] text-black focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-soft-grey rounded-lg px-4 py-2.5 min-h-[44px] text-black focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full border border-soft-grey rounded-lg px-4 py-2.5 text-black focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent resize-y"
              />
            </div>
            <button
              type="submit"
              className="bg-orange text-white font-semibold px-6 py-2.5 min-h-[44px] rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
