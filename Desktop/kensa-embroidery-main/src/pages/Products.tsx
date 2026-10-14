import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { whatsappLink, categoryLinks } from '../data/site';
import { Icon } from '../components/Icon';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { CTA } from '../components/CTA';
import { Img } from '../components/Img';

export function Products() {
  const tags = useMemo(() => ['All', ...Array.from(new Set(categoryLinks.map((c) => c.tag)))], []);
  const [active, setActive] = useState('All');

  const visible = active === 'All' ? categoryLinks : categoryLinks.filter((c) => c.tag === active);

  return (
    <>
      <PageHero
        crumb="Products"
        eyebrow="Our catalogues"
        title="Apparel, workwear and gifts we can brand for you"
        copy="You can supply the garments, or use our preferred ranges. Either way, branding happens in-house and every unit is checked before it reaches you."
      >
        <div className="btn-row" style={{ marginTop: '1.75rem' }}>
          <Link to="/contact" className="btn btn--light btn--lg">
            Request a catalogue
            <Icon name="arrowRight" />
          </Link>
          <a
            className="btn btn--onDark btn--lg"
            href={whatsappLink('Hi Kensa, please send me your product catalogue and pricing.')}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="whatsapp" />
            Ask on WhatsApp
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="Focused catalogues"
              title="Browse by category"
              copy="A snapshot of what we brand most often. If you need something that is not listed here, ask us."
            />
          </Reveal>

          <div className="filter" role="tablist" aria-label="Filter catalogues">
            {tags.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={active === t}
                className={active === t ? 'is-active' : undefined}
                onClick={() => setActive(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid grid--3">
            {visible.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <article className="card cat-card">
                  <div className="card__media">
                    <span className="badge card__tag">{c.tag}</span>
                    <a href={c.url} target="_blank" rel="noreferrer">
                      <Img src={c.image} alt={c.imageAlt} sizes="(max-width: 760px) 100vw, 33vw" />
                    </a>
                  </div>
                  <div className="card__body">
                    <h3>{c.title}</h3>
                    <p>{c.copy}</p>
                    <div className="card__foot">
                      <a className="link-arrow" href={c.url} target="_blank" rel="noreferrer">
                        View this supplier
                        <Icon name="arrowRight" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <div className="split">
            <Reveal>
              <span className="eyebrow">Branding options</span>
              <h2>One order, the right method for each item</h2>
              <p>
                Caps embroidered. Sports kit sublimated. Event T-shirts DTF printed. Because we do all of it under one
                roof, you do not have to split your order across suppliers.
              </p>
            </Reveal>

            <Reveal className="grid" delay={80}>
              <div className="grid grid--2">
                <div className="feature">
                  <span className="ico-tile">
                    <Icon name="users" />
                  </span>
                  <h3>Staff and teams</h3>
                  <p>Uniform rollouts with consistent placement across every size and style.</p>
                </div>
                <div className="feature">
                  <span className="ico-tile">
                    <Icon name="gifts" />
                  </span>
                  <h3>Client gifting</h3>
                  <p>Branded items your clients actually keep and use every day.</p>
                </div>
                <div className="feature">
                  <span className="ico-tile">
                    <Icon name="display" />
                  </span>
                  <h3>Events & activations</h3>
                  <p>Gazebos, banners and flags that make your stand impossible to miss.</p>
                </div>
                <div className="feature">
                  <span className="ico-tile">
                    <Icon name="truck" />
                  </span>
                  <h3>Distributors</h3>
                  <p>Reliable white-label branding capacity for workwear suppliers and resellers.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="Need volumes and pricing for a specific item?"
        copy="Send us the item, the quantity and your deadline. We will confirm availability, branding method and a delivered price."
        primaryLabel="Request pricing"
      />
    </>
  );
}
