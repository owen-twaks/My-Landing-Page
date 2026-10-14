import { Link } from 'react-router-dom';
import {
  differentiators,
  homeServices,
  industries,
  processSteps,
  site,
  whatsappLink,
} from '../data/site';
import { Icon, type IconName } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';
import { Stats } from '../components/Stats';
import { Img } from '../components/Img';

const marqueeItems = [
  'Embroidery',
  'DTF printing',
  'Sublimation',
  'Screen printing',
  'Corporate gifting',
  'Displays',
];

const ribbon = [
  'Corporate wear',
  'Workwear',
  'PPE',
  'School uniforms',
  'Sportswear',
  'Promotional apparel',
];

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__text">
            <span className="badge badge--onDark">
              <Icon name="pin" />
              Midrand-based · In-house production
            </span>
            <h1 style={{ marginTop: '1.1rem' }}>
              Reliable bulk uniforms &amp; branding, built to outfit your <span className="text-gradient">whole team</span>
            </h1>
            <p>
              We help businesses outfit 100 – 1,000+ staff with high-quality branded workwear — embroidered, printed and
              delivered on time, every time.
            </p>

            <div className="btn-row" style={{ marginTop: '1.9rem' }}>
              <Link to="/contact" className="btn btn--light btn--lg">
                Request a bulk quote
                <Icon name="arrowRight" />
              </Link>
              <Link to="/services" className="btn btn--onDark btn--lg">
                See our services
              </Link>
            </div>

            <div className="hero__meta">
              <div className="hero__metaItem">
                <Icon name="boxes" />
                <span>
                  <strong>300 – 1,000+ units</strong>
                  Bulk order capability
                </span>
              </div>
              <div className="hero__metaItem">
                <Icon name="factory" />
                <span>
                  <strong>Everything in-house</strong>
                  No outsourcing, no middlemen
                </span>
              </div>
              <div className="hero__metaItem">
                <Icon name="truck" />
                <span>
                  <strong>Nationwide delivery</strong>
                  From Midrand, Gauteng
                </span>
              </div>
            </div>
          </div>

          <Reveal className="hero__visual">
            <div className="hero__frame">
              <Img
                src="/image2/front.jpeg"
                alt="Kensa Embroidery and Printing workshop with multi-head embroidery machines on the production floor in Midrand"
                priority
                sizes="(max-width: 960px) 100vw, 45vw"
              />
            </div>
            <div className="hero__card">
              <span className="ico">
                <Icon name="shield" />
              </span>
              <span>
                <strong>Quality checked</strong>
                <span>Every batch inspected before dispatch</span>
              </span>
            </div>
          </Reveal>
        </div>

        <div className="container" style={{ paddingBottom: '2.25rem' }}>
          <div className="hero__ribbon">
            {ribbon.map((r) => (
              <span key={r}>
                <Icon name="check" />
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marqueeItems, ...marqueeItems].map((label, i) => (
            <span key={`${label}-${i}`}>{label}</span>
          ))}
        </div>
      </div>

      <section className="section section--tight">
        <div className="container">
          <Stats />
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <Reveal>
            <SectionHead
              center
              eyebrow="What we do"
              title="Our services"
              copy="Everything your team's branding needs, produced under one roof — from a single personalised item to a full staff rollout."
            />
          </Reveal>

          <div className="grid grid--3">
            {homeServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <article className="card">
                  <div className="card__media">
                    {s.image ? (
                      <Img src={s.image} alt={s.imageAlt ?? s.title} sizes="(max-width: 760px) 100vw, 33vw" />
                    ) : null}
                  </div>
                  <div className="card__body">
                    <h3>{s.title}</h3>
                    <p className="card__tagline">{s.tagline}</p>
                    <p>{s.summary}</p>
                    <div className="card__foot">
                      <Link className="link-arrow" to={`/services#${s.slug}`}>
                        Learn more
                        <Icon name="arrowRight" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="btn-row btn-row--center" style={{ marginTop: '2.25rem' }}>
            <Link to="/services" className="btn btn--primary btn--lg">
              Explore all services
              <Icon name="arrowRight" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Why teams choose Kensa"
              title="Four reasons procurement managers keep coming back"
              copy="We are set up for the accounts that need consistency, volume and deadlines that hold."
            />
          </Reveal>

          <div className="grid grid--4">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} className="feature" delay={i * 80}>
                <span className="ico-tile">
                  <Icon name={d.icon as IconName} />
                </span>
                <h3>{d.title}</h3>
                <p>{d.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Industries we outfit"
              title="Branding for how the work actually gets done"
              copy="From site crews to front-of-house teams, we brand workwear that fits the environment it works in."
            />
          </Reveal>

          <div className="grid grid--4">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 80}>
                <article className="industry">
                  <Img src={ind.image} alt={ind.imageAlt} sizes="(max-width: 760px) 100vw, 25vw" />
                  <div className="industry__body">
                    <h3>{ind.title}</h3>
                    <p>{ind.copy}</p>
                    <Link className="link-arrow" to="/contact">
                      Talk to our team
                      <Icon name="arrowRight" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <div className="split" style={{ alignItems: 'start' }}>
            <Reveal>
              <span className="eyebrow">How it works</span>
              <h2>A simple, predictable ordering process</h2>
              <p>
                No chasing, no guessing. You always know what happens next and what it will cost — and we handle the
                production detail in between.
              </p>
              <div className="btn-row" style={{ marginTop: '1.5rem' }}>
                <Link to="/contact" className="btn btn--primary">
                  Start your order
                  <Icon name="arrowRight" />
                </Link>
                <a
                  className="btn btn--ghost"
                  href={`tel:${site.phonePrimaryDial}`}
                >
                  <Icon name="phone" />
                  {site.phonePrimary}
                </a>
              </div>
            </Reveal>

            <div className="steps">
              {processSteps.map((s, i) => (
                <Reveal key={s.step} className="step" delay={i * 80}>
                  <span className="step__num">{s.step}</span>
                  <span>
                    <h3>{s.title}</h3>
                    <p>{s.copy}</p>
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow" style={{ maxWidth: '960px' }}>
          <Reveal>
            <SectionHead
              center
              eyebrow="Testimonials"
              title="What our clients say"
              copy="Feedback from customers we have branded for, as published on the Kensa website."
            />
          </Reveal>
          <Reveal>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      <div className="strip">
        <div className="container">
          <div>
            <strong>Not sure which method is right for your logo?</strong>
            <span>Send us your artwork and we will tell you straight.</span>
          </div>
          <div className="strip__list">
            <span>
              <Icon name="palette" />
              Free artwork check
            </span>
            <span>
              <Icon name="clock" />
              Free consultation & quote
            </span>
            <a className="btn btn--light" href={whatsappLink('Hi Kensa, I have a logo I would like quoted.')} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" />
              Send your logo
            </a>
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
}
