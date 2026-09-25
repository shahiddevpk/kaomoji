import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  async redirects() {
    return [
      // Cry merges -> crying primary
      { source: "/cry-kaomoji", destination: "/crying-kaomoji/", permanent: true },
      { source: "/cry-kaomoji/", destination: "/crying-kaomoji/", permanent: true },
      { source: "/kaomoji-cry", destination: "/crying-kaomoji/", permanent: true },
      { source: "/kaomoji-cry/", destination: "/crying-kaomoji/", permanent: true },
      { source: "/kaomoji-crying", destination: "/crying-kaomoji/", permanent: true },
      { source: "/kaomoji-crying/", destination: "/crying-kaomoji/", permanent: true },
      // Copy-paste utility merges
      {
        source: "/copy-and-paste-kaomoji",
        destination: "/kaomoji-copy-paste/",
        permanent: true,
      },
      {
        source: "/copy-and-paste-kaomoji/",
        destination: "/kaomoji-copy-paste/",
        permanent: true,
      },
      {
        source: "/kaomoji-copy-and-paste",
        destination: "/kaomoji-copy-paste/",
        permanent: true,
      },
      {
        source: "/kaomoji-copy-and-paste/",
        destination: "/kaomoji-copy-paste/",
        permanent: true,
      },
      // Plural / alias -> hub
      { source: "/kaomojis", destination: "/", permanent: true },
      { source: "/kaomojis/", destination: "/", permanent: true },
      { source: "/kaomoji", destination: "/", permanent: true },
      { source: "/kaomoji/", destination: "/", permanent: true },
      // Common misspellings -> hub
      { source: "/kamoji", destination: "/", permanent: true },
      { source: "/kamoji/", destination: "/", permanent: true },
      { source: "/koamoji", destination: "/", permanent: true },
      { source: "/koamoji/", destination: "/", permanent: true },
      { source: "/kaoomoji", destination: "/", permanent: true },
      { source: "/kaoomoji/", destination: "/", permanent: true },
      { source: "/kaommoji", destination: "/", permanent: true },
      { source: "/kaommoji/", destination: "/", permanent: true },
      { source: "/kaamoji", destination: "/", permanent: true },
      { source: "/kaamoji/", destination: "/", permanent: true },
      { source: "/kaimoji", destination: "/", permanent: true },
      { source: "/kaimoji/", destination: "/", permanent: true },
      // Misspell gap
      { source: "/sad-kamoji", destination: "/sad-kaomoji/", permanent: true },
      { source: "/sad-kamoji/", destination: "/sad-kaomoji/", permanent: true },
      // Plural category aliases -> singular primaries (no thin pages)
      { source: "/cute-kaomojis", destination: "/cute-kaomoji/", permanent: true },
      { source: "/cute-kaomojis/", destination: "/cute-kaomoji/", permanent: true },
      { source: "/happy-kaomojis", destination: "/happy-kaomoji/", permanent: true },
      { source: "/happy-kaomojis/", destination: "/happy-kaomoji/", permanent: true },
      { source: "/cat-kaomojis", destination: "/cat-kaomoji/", permanent: true },
      { source: "/cat-kaomojis/", destination: "/cat-kaomoji/", permanent: true },
      { source: "/sad-kaomojis", destination: "/sad-kaomoji/", permanent: true },
      { source: "/sad-kaomojis/", destination: "/sad-kaomoji/", permanent: true },
      { source: "/crying-kaomojis", destination: "/crying-kaomoji/", permanent: true },
      { source: "/crying-kaomojis/", destination: "/crying-kaomoji/", permanent: true },
      // Singular / alt aliases for alt-head pages
      { source: "/japanese-emoticon", destination: "/japanese-emoticons/", permanent: true },
      { source: "/japanese-emoticon/", destination: "/japanese-emoticons/", permanent: true },
      { source: "/text-face", destination: "/text-faces/", permanent: true },
      { source: "/text-face/", destination: "/text-faces/", permanent: true },
      // Pagination: /page/1 -> bare category URL (permanent redirect)
      { source: "/cute-kaomoji/page/1", destination: "/cute-kaomoji/", permanent: true },
      { source: "/cute-kaomoji/page/1/", destination: "/cute-kaomoji/", permanent: true },
      { source: "/happy-kaomoji/page/1", destination: "/happy-kaomoji/", permanent: true },
      { source: "/happy-kaomoji/page/1/", destination: "/happy-kaomoji/", permanent: true },
      { source: "/cat-kaomoji/page/1", destination: "/cat-kaomoji/", permanent: true },
      { source: "/cat-kaomoji/page/1/", destination: "/cat-kaomoji/", permanent: true },
      { source: "/sad-kaomoji/page/1", destination: "/sad-kaomoji/", permanent: true },
      { source: "/sad-kaomoji/page/1/", destination: "/sad-kaomoji/", permanent: true },
      { source: "/crying-kaomoji/page/1", destination: "/crying-kaomoji/", permanent: true },
      { source: "/crying-kaomoji/page/1/", destination: "/crying-kaomoji/", permanent: true },
      { source: "/japanese-emoticons/page/1", destination: "/japanese-emoticons/", permanent: true },
      { source: "/japanese-emoticons/page/1/", destination: "/japanese-emoticons/", permanent: true },
      { source: "/text-faces/page/1", destination: "/text-faces/", permanent: true },
      { source: "/text-faces/page/1/", destination: "/text-faces/", permanent: true },
    ];
  },
};

export default nextConfig;