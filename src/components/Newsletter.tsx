import { FiMail, FiArrowUpRight } from 'react-icons/fi'
import { profile } from '../data/profile'
import { AnimatedOnScroll } from './ui/AnimatedOnScroll'

export function Newsletter() {
  return (
    <section id="newsletter" className="pb-8">
      <div className="container-page">
        <AnimatedOnScroll>
          <div className="card grid gap-6 p-6 sm:p-8 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 font-mono text-sm text-accent">
                <FiMail /> Newsletter
              </div>
              <h2 className="mt-3 text-2xl font-bold text-white">
                I'm learning to add AI to real systems, in public.
              </h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                One build a week: Spring Boot + Next.js + AI, with working code and honest notes on
                what broke.
              </p>
            </div>

            <div className="lg:col-span-2">
              {profile.newsletterEmbedUrl ? (
                <iframe
                  src={profile.newsletterEmbedUrl}
                  title="Subscribe to the newsletter"
                  data-test-id="beehiiv-embed"
                  height="52"
                  frameBorder="0"
                  scrolling="no"
                  loading="lazy"
                  className="w-full rounded-lg bg-transparent"
                />
              ) : (
                <a
                  href={profile.newsletterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-accent/50 px-6 py-3 font-semibold text-accent transition-all hover:bg-accent/10 hover:shadow-glow"
                >
                  Subscribe <FiArrowUpRight />
                </a>
              )}
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  )
}
