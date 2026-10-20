import Link from "next/link";

type Season = {
  /** 0-based month the banner shows in (static pages revalidate daily). */
  month: number;
  lastDay: number;
  href: string;
  face: string;
  title: string;
  blurb: string;
};

const SEASONS: Season[] = [
  {
    month: 9,
    lastDay: 31,
    href: "/halloween-kaomoji/",
    face: "👻(◕ᴗ◕)🎃",
    title: "Halloween kaomoji are here",
    blurb: "350+ ghosts, pumpkins, bats, zombies, and devils — copy a spooky face in one tap.",
  },
  {
    month: 10,
    lastDay: 27,
    href: "/thanksgiving-kaomoji/",
    face: "🦃(◕ᴗ◕)🥧",
    title: "Thanksgiving kaomoji",
    blurb: "Turkeys, pumpkin pie, fall leaves, and thankful faces for the holiday.",
  },
  {
    month: 11,
    lastDay: 25,
    href: "/christmas-kaomoji/",
    face: "🎄(◕ᴗ◕)🎅",
    title: "Christmas kaomoji",
    blurb: "Festive faces, snow, and gifts for holiday messages.",
  },
];

/** In-season holiday, if any (shared by the hub banner and header strip). */
export function currentSeason(now = new Date()): Season | undefined {
  return SEASONS.find(
    (s) => s.month === now.getMonth() && now.getDate() <= s.lastDay,
  );
}

/** Time-boxed internal link to the in-season page; renders nothing off-season. */
export function SeasonalBanner({ now = new Date() }: { now?: Date }) {
  const season = currentSeason(now);
  if (!season) return null;

  return (
    <Link href={season.href} className="seasonal-banner">
      <span className="seasonal-banner-face" aria-hidden="true">
        {season.face}
      </span>
      <span className="flex flex-col">
        <span className="type-h3">{season.title}</span>
        <span className="type-meta">{season.blurb}</span>
      </span>
      <span className="seasonal-banner-cta" aria-hidden="true">
        Open →
      </span>
    </Link>
  );
}
