import { Link } from 'react-router-dom';
import { faqs, processSteps, services } from '../data/site';
import { Icon, type IconName } from '../components/Icon';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { CTA } from '../components/CTA';
import { Accordion } from '../components/Accordion';
import { Img } from '../components/Img';

export function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Our services"
        title="A complete branding department, without the overhead"
        copy="From embroidery and DTF printing to sublimation, screen printing and promotional branding — every method is handled on our own production floor."
      >
        <div className="btn-row" style={{ marginTop: '1.75rem' }}>
          <Link to="/contact" className="btn btn--light btn--lg">
            Get a quote
            <Icon name="arrowRight" />
          </Link>
          <a href="#embroidery" className="btn btn--onDark btn--lg">
            Jump to a service
          </a>
        </div>
      </PageHero>

      <section className="section section--tight">
        <div className="container">
          <div className="pill-list">
            {services.map((s) => (
              <a key={s.slug} className="pill" href={`#${s.slug}`}>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {services.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              className={`service-row${i % 2 === 1 ? ' service-row--flip' : ''}`}
              style={{ scrollMarginTop: '110px' }}
            >
              <div className="split">
                <Reveal>
                  {s.image ? (
                    <div className="service-row__media">
                      <Img src={s.image} alt={s.imageAlt ?? s.title} sizes="(max-width: 760px) 100vw, 50vw" />
                    </div>
                  ) : (
                    <div className="method">
                      <span className="ico-tile">
                        <Icon name={s.icon as IconName} />
                      </span>
                      <h3 style={{ marginBottom: '0.4rem' }}>What you get</h3>
                      <ul className="card__list" style={{ marginBottom: 0 }}>
                        {s.bullets.map((b) => (
                          <li key={b}>
                            <Icon name="check" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Reveal>

                <Reveal delay={80}>
                  <div className="service-row__no">Service {String(i + 1).padStart(2, '0')}</div>
                  <h2>{s.title}</h2>
                  <p className="card__tagline" style={{ fontSize: '1.02rem' }}>
                    {s.tagline}
                  </p>
                  <p className="lede">{s.summary}</p>
                  <ul className="card__list">
                    {s.bullets.map((b) => (
                      <li key={b}>
                        <Icon name="check" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="btn-row">
                    <Link to="/contact" className="btn btn--primary">
                      Get a quote
                      <Icon name="arrowRight" />
                    </Link>
                    <Link to="/products" className="btn btn--ghost">
                      See our products
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <Reveal>
            <SectionHead
              center
              eyebrow="Our process"
              title="What working with us looks like"
              copy="Four clear steps, with a real person answering your questions at every one of them."
            />
          </Reveal>
          <div className="grid grid--4">
            {processSteps.map((s, i) => (
              <Reveal key={s.step} className="feature" delay={i * 80}>
                <span className="step__num" style={{ marginBottom: '1rem' }}>
                  {s.step}
                </span>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead
              center
              eyebrow="Good to know"
              title="Frequently asked questions"
              copy="Common questions about ordering branded uniforms, workwear and promotional items from Kensa."
            />
          </Reveal>
          <div className="container--narrow" style={{ marginInline: 'auto' }}>
            <Reveal>
              <Accordion items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="Tell us what your team needs to wear"
        copy="Send your logo, garment and quantity. We will recommend the best method for the fabric, the budget and the deadline — then quote it clearly."
        primaryLabel="Request a quote"
      />
    </>
  );
}
