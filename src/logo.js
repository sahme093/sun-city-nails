// Logo mark: a rising sun whose rays are almond-shaped nails.
// Returns the inner markup for a 64×64 viewBox so the same drawing is used in the
// header/footer (src/components/Logo.jsx) and the browser-tab icon (vite.config.js).

// One almond nail pointing up, drawn relative to the sun's center.
const NAIL = 'M-3 -16.5C-3.4 -21 -1.6 -25.5 0 -28.5C1.6 -25.5 3.4 -21 3 -16.5C1.2 -15.2 -1.2 -15.2 -3 -16.5Z';
const SHINE = 'M-1.1 -18.6L-1.3 -22.8';
const SPARKLE = 'M0 -4Q0.6 -0.6 4 0Q0.6 0.6 0 4Q-0.6 0.6 -4 0Q-0.6 -0.6 0 -4Z';

export function logoMark({ sun, rays, line }) {
  const nails = [-60, -30, 0, 30, 60]
    .map(
      (deg) =>
        `<g transform="rotate(${deg})"><path d="${NAIL}" fill="${rays}"/>` +
        `<path d="${SHINE}" stroke="#fff" stroke-opacity=".7" stroke-width="1.1" stroke-linecap="round"/></g>`,
    )
    .join('');
  return (
    `<g transform="translate(32 42)">${nails}<path d="M-12 0A12 12 0 0 1 12 0Z" fill="${sun}"/></g>` +
    `<path d="M8 46H56M17 51.5H47" stroke="${line}" stroke-width="2.5" stroke-linecap="round"/>` +
    `<path d="${SPARKLE}" transform="translate(53 13) scale(1.1)" fill="${sun}"/>`
  );
}
