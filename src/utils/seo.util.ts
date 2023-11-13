import { Metadata } from "next";
const SITE_TITLE = "ReNext - Web3 IGO/IDO Token Launchpad";
const SITE_DESCRIPTION =
  "ReNext is a Crypto token launching platform, It’s Included Live IGO/IEO/IDO/INO Project, Staking, Firming Pools, IGO game Landing";

export function buildMetadata(title?: string, description?: string): Metadata {
  return {
    metadataBase: new URL("https://renext.xyz"),
    title: title ? `${title} | ${SITE_TITLE}` : SITE_TITLE,
    description: description || SITE_DESCRIPTION,
  };
}
