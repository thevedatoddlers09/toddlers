'use client';

const COLUMN_SHAPES = [
  ['aspect-[4/5]', 'aspect-square', 'aspect-[3/4]', 'aspect-[5/4]', 'aspect-[4/5]'],
  ['aspect-square', 'aspect-[3/4]', 'aspect-[4/5]', 'aspect-square', 'aspect-[5/4]'],
  ['aspect-[3/4]', 'aspect-[5/4]', 'aspect-square', 'aspect-[4/5]', 'aspect-[3/4]'],
  ['aspect-[5/4]', 'aspect-[4/5]', 'aspect-square', 'aspect-[3/4]', 'aspect-[4/5]'],
];

function SkeletonCard({ aspect }) {
  return (
    <div
      className={`gallery-skeleton-card mb-2.5 w-full overflow-hidden rounded-xl ring-1 ring-veda-border/50 sm:mb-3.5 sm:rounded-2xl lg:mb-4 ${aspect}`}
    >
      <div className="gallery-skeleton-shimmer h-full w-full" />
    </div>
  );
}

export default function GallerySkeleton({ columns = 2 }) {
  const cols = COLUMN_SHAPES.slice(0, columns);

  return (
    <div
      className="grid gap-2.5 sm:gap-3.5 lg:gap-4"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      aria-hidden="true"
      aria-busy="true"
    >
      {cols.map((shapes, colIndex) => (
        <div
          key={colIndex}
          className="gallery-skeleton-col flex min-w-0 flex-col"
          style={{ animationDelay: `${colIndex * 160}ms` }}
        >
          {shapes.map((aspect, i) => (
            <SkeletonCard key={`${colIndex}-${i}`} aspect={aspect} />
          ))}
        </div>
      ))}
    </div>
  );
}
