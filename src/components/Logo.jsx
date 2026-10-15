import salon from '../salon.config.js';
import { logoMark } from '../logo.js';

const markup = logoMark({ sun: salon.theme.sun, rays: salon.theme.accent, line: '#fdf5f3' });

export default function Logo() {
  return (
    <>
      <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true" dangerouslySetInnerHTML={{ __html: markup }} />
      <span>{salon.name}</span>
    </>
  );
}
