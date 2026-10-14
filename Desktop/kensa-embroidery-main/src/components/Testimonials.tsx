import { useCallback, useEffect, useRef, useState } from 'react';
import { testimonials } from '../data/site';
import { Icon } from './Icon';

const TESTIMONIALS_URL = 'https://share.google/IOTc1dPQypW0hai3V';

const initials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [paused]);

  return (
    <div
      className="slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div className="slider__viewport">
        <div className="slider__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {testimonials.map((t, i) => (
            <div
              className="slider__slide"
              key={t.name}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${testimonials.length}`}
              aria-hidden={i !== index}
            >
              <div className="quote">
                <span className="quote__mark" aria-hidden="true">
                  &ldquo;
                </span>
                <div className="quote__stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Icon key={s} name="star" fill="currentColor" stroke="none" />
                  ))}
                </div>
                <p>{t.quote}</p>
                <div className="quote__person">
                  <span className="avatar" aria-hidden="true">
                    {initials(t.name)}
                  </span>
                  <span>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </span>
                </div>
                <a
                  className="link-arrow"
                  href={TESTIMONIALS_URL}
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginTop: '1.2rem', display: 'inline-flex' }}
                >
                  Read More
                  <Icon name="arrowRight" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider__controls">
        <button type="button" className="slider__btn" aria-label="Previous testimonial" onClick={() => go(index - 1)}>
          <Icon name="chevronLeft" />
        </button>
        <div className="dots">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              className={i === index ? 'is-active' : undefined}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button type="button" className="slider__btn" aria-label="Next testimonial" onClick={() => go(index + 1)}>
          <Icon name="chevronRight" />
        </button>
      </div>
    </div>
  );
}
