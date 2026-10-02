const artwork = {
  monmouth: {
    src: '/img/monmouth-jellyfish.png',
    alt: 'Five jellyfish drawn in ink, with one large jellyfish surrounded by four smaller ones',
    width: 1448,
    height: 1086,
  },
  'red-cell': {
    src: '/img/red-cell-systems.png',
    alt: 'Red Cell Systems mark: two round cells and two crescent cells drawn in ink',
    width: 1254,
    height: 1254,
  },
};

export function ProjectArtwork({ project }: { project: keyof typeof artwork }) {
  const image = artwork[project];

  return (
    <figure className={`project-artwork project-artwork--${project}`}>
      {/* Native image preserves the supplied PNG and its transparency. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img {...image} loading="lazy" decoding="async" />
    </figure>
  );
}
