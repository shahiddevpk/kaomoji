import Link from "@/components/link";
import { TrustView } from "@/components/layout/trust-view";
import { isAdSenseEnabled } from "@/lib/ads";
import { pageMetadata } from "@/lib/seo";
import { getPage } from "@/lib/site";

const page = getPage("/privacy");

export const metadata = pageMetadata(page);

/** Date the advertising sections below were written (shown once ads are on). */
const ADS_POLICY_EFFECTIVE = "October 20, 2026";

export default function PrivacyPage() {
  const ads = isAdSenseEnabled();

  return (
    <TrustView page={page}>
      <p className="type-meta text-muted">
        Effective {ads ? ADS_POLICY_EFFECTIVE : "September 25, 2026"}.
      </p>
      <h2 className="text-base font-semibold">What this site stores</h2>
      {ads ? (
        <p>
          Paste Kaomoji does not ask you to create an account. All pages can be browsed
          without signing in. Search requests are processed on the server. The site
          does not embed analytics. It shows ads served by Google AdSense, which uses cookies
          and similar identifiers as described in the advertising section below.
        </p>
      ) : (
        <p>
          Paste Kaomoji does not ask you to create an account. All pages can be browsed
          without signing in. Search requests are processed on the server. The site does
          not embed analytics or advertising, does not use a cookie banner for tracking, and does
          not set marketing cookies.
        </p>
      )}
      <h2 className="text-base font-semibold">Copying a face</h2>
      <p>
        One-tap copy stays in the browser and stores a short recently-copied list in
        localStorage on your device. It does not send the face to a server. The same applies to
        faces you build with the{" "}
        <Link href="/kaomoji-generator/" className="link-in-prose">
          kaomoji generator
        </Link>
        .
      </p>
      <p>
        You can clear the recently-copied list at any time by clearing site data for
        pastekaomoji.com in your browser settings. Private or incognito windows usually discard it
        when you close them. Nothing in that list is linked to your name or email address.
      </p>
      {ads ? (
        <>
          <h2 className="text-base font-semibold">Advertising</h2>
          <p>
            Paste Kaomoji uses Google AdSense to show ads. Third-party vendors, including
            Google, use cookies to serve ads based on your prior visits to this website or
            other websites. Google&apos;s use of advertising cookies enables it and its partners
            to serve ads to you based on your visit to this site and/or other sites on the
            internet. Google and its partners may also read and place cookies, or use web
            beacons and IP addresses, to measure and deliver ads. Ads on this site are served under AdSense publisher ID
            pub-1493183147218727, and that ID is also listed in our ads.txt file.
          </p>
          <p>
            You can opt out of personalized advertising in{" "}
            <a href="https://adssettings.google.com/" className="link-in-prose">
              Google Ads Settings
            </a>
            , or opt out of some third-party vendors&apos; use of cookies at{" "}
            <a href="https://www.aboutads.info/choices/" className="link-in-prose">
              aboutads.info
            </a>
            . Read{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="link-in-prose"
            >
              how Google uses information from sites or apps that use its services
            </a>
            .
          </p>
          <h2 className="text-base font-semibold">
            Consent in the EEA, UK, and Switzerland
          </h2>
          <p>
            Visitors in the European Economic Area, the United Kingdom, or Switzerland see a
            Google-certified consent message before personalized ads load. You can accept,
            refuse, or manage personalized advertising and related cookies there. Non-personalized
            ads may still appear if you refuse, subject to your choices and applicable law.
          </p>
          <h2 className="text-base font-semibold">United States privacy choices</h2>
          <p>
            Visitors in U.S. states with privacy laws may see a Google-certified message with a
            link to opt out of the sale or sharing of personal information used for personalized
            advertising. You can also limit personalized ads in{" "}
            <a href="https://adssettings.google.com/" className="link-in-prose">
              Google Ads Settings
            </a>
            . We do not sell personal information for money; ad partners may use cookies and
            similar technologies as described in the advertising section above.
          </p>
          <h2 className="text-base font-semibold">Children</h2>
          <p>
            Paste Kaomoji is a general-audience site and is not directed at children under 13.
            We do not knowingly collect personal information from children.
          </p>
        </>
      ) : null}
      <h2 className="text-base font-semibold">Email</h2>
      <p>
        If you write to{" "}
        <a href="mailto:hello@pastekaomoji.com" className="link-in-prose">
          hello@pastekaomoji.com
        </a>{" "}
        (listed on the{" "}
        <Link href="/contact/" className="link-in-prose">
          contact page
        </Link>
        ), the message is used to answer you. It is not added to a marketing list.
      </p>
      <h2 className="text-base font-semibold">Your choices</h2>
      <p>
        You can browse every page without signing in, and you can block or delete cookies in your
        browser at any time. Blocking cookies does not stop the copy buttons from working, although
        ads may become less relevant. If you want us to delete an email you sent, ask in a reply
        and we will remove it from our inbox.
      </p>
      <h2 className="text-base font-semibold">Hosting</h2>
      <p>
        The site is hosted on Vercel, which may log ordinary request data such as IP address
        and user agent for security and operations.
        {ads
          ? " Apart from the Google advertising described above, we do not add trackers on top of that hosting layer."
          : " We do not add extra trackers on top of that hosting layer."}
      </p>
      <h2 className="text-base font-semibold">Changes to this policy</h2>
      <p>
        If the way the site handles data changes, for example if a new feature or ad setting is
        added, we will update this page and the effective date at the top. Please check back from
        time to time.
      </p>
      <p>
        The rules for using the site are in the{" "}
        <Link href="/terms/" className="link-in-prose">
          terms of use
        </Link>
        , and who runs it is on the{" "}
        <Link href="/about/" className="link-in-prose">
          about page
        </Link>
        .
      </p>
    </TrustView>
  );
}
