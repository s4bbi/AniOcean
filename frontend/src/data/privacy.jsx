// src/data/privacyPolicy.js
import React from "react";

const privacyPolicy = [
  {
    title: "Information We Collect",
    content: (
      <>
        <span className="font-semibold">a. Information You Provide</span> <br />
        • Account Info: Name, username, email address, password. <br />
        • Profile Info: Avatar, preferences, favorites (if applicable). <br />
        • Contact Requests: Any messages or feedback you submit. <br /><br />
        <span className="font-semibold">b. Information We Collect Automatically</span> <br />
        • Usage Data: Pages visited, time spent, clicks, scroll behavior. <br />
        • Device Data: Browser type, operating system, IP address. <br />
        • Cookies: We use cookies to enhance your experience (e.g., keep you logged in, remember preferences).
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    content: (
      <>
        • Create and manage your account. <br />
        • Provide access to anime content and recommendations. <br />
        • Improve our platform and personalize your experience. <br />
        • Send notifications (only if you opt-in). <br />
        • Respond to support or contact requests. <br />
        • Detect and prevent fraud or abuse.
      </>
    ),
  },
  {
    title: "Sharing of Information",
    content: (
      <>
        We do not sell your personal data. <br />
        We may share your data: <br />
        • With service providers (e.g., analytics, hosting) who help us run the platform. <br />
        • When required by law, legal process, or to protect our rights.
      </>
    ),
  },
  {
    title: "Cookies and Tracking Technologies",
    content: (
      <>
        AniOcean uses cookies to: <br />
        • Keep you logged in <br />
        • Store your theme preferences <br />
        • Analyze site performance (via tools like Google Analytics) <br /><br />
        You can manage or disable cookies in your browser settings.
      </>
    ),
  },
  {
    title: "Data Security",
    content: (
      <>
        We take reasonable steps to protect your information through: <br />
        • HTTPS encryption <br />
        • Secure password hashing <br />
        • Regular backups and access controls <br /><br />
        However, no method of online transmission is 100% secure.
      </>
    ),
  },
  {
    title: "Your Privacy Rights",
    content: (
      <>
        Depending on your location, you may: <br />
        • Access or correct your personal info <br />
        • Request deletion of your data <br />
        • Opt out of marketing emails <br /><br />
        You can contact us at: <span className="text-ocean">privacy@animeocean.com</span>
      </>
    ),
  },
  {
    title: "Children’s Privacy",
    content:
      "AniOcean is not intended for users under 13 years of age. We do not knowingly collect data from children. If you are a parent and believe your child has used our service, contact us immediately.",
  },
  {
    title: "Changes to this Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be posted here with a new effective date. If changes are significant, we may notify you.",
  },
  {
    title: "Contact Us",
    content:
      "For questions or support, email us at support@aniocean.com",
  },
];

export default privacyPolicy;
