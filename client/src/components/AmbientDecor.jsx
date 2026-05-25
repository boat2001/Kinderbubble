import { useMemo } from 'react';

const PAGE_BUBBLES = 14;
const HERO_BUBBLES = 18;
const PAGE_SHAPES = 6;
const HERO_SHAPES = 8;

/** Maps route key to playful / abstract / neutral ambient style. */
export function getAmbientVariant(pageKey) {
  if (pageKey === 'index') return 'playful';
  if (/student-life|students-life|news|event|gallery/i.test(pageKey)) return 'playful';
  if (/admission|parents|academics|privacy|terms|policies/i.test(pageKey)) return 'abstract';
  return 'neutral';
}

export default function AmbientDecor({ variant = 'playful', mode = 'page' }) {
  const bubbleCount = mode === 'hero' ? HERO_BUBBLES : PAGE_BUBBLES;
  const shapeCount = mode === 'hero' ? HERO_SHAPES : PAGE_SHAPES;

  const bubbles = useMemo(() => Array.from({ length: bubbleCount }, (_, i) => i), [bubbleCount]);
  const shapes = useMemo(() => Array.from({ length: shapeCount }, (_, i) => i), [shapeCount]);

  return (
    <div
      className={`kb-ambient kb-ambient--${variant} kb-ambient--${mode}`}
      aria-hidden="true"
    >
      {bubbles.map((i) => (
        <span key={`b${i}`} className={`kb-ambient-bubble kb-ambient-bubble--${(i % 12) + 1}`} />
      ))}
      {shapes.map((i) => (
        <span key={`s${i}`} className={`kb-ambient-shape kb-ambient-shape--${(i % 6) + 1}`} />
      ))}
    </div>
  );
}
