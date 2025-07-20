// src/data/dmcaPolicy.js
import React from "react";

const dmcaPolicy = [
  {
    title: "Digital Millennium Copyright Act Notice",
    content: (
      <>
        AniOcean respects the intellectual property of others. If you believe that your copyrighted
        work has been used in a way that constitutes copyright infringement, you may submit a DMCA
        Takedown Notice.
      </>
    ),
  },
  {
    title: "How to File a Takedown Notice",
    content: (
      <>
        Please provide the following details: <br />
        • Your full name and contact information <br />
        • The URL(s) of the infringing content <br />
        • A description of the copyrighted material <br /><br />
        A statement that: <br />
        • You have a good faith belief that the content is not authorized by the copyright owner. <br />
        • The information in your notice is accurate. <br />
        • You are authorized to act on behalf of the copyright owner. <br /><br />
        Send DMCA notices to: 📧 <span className="text-white">dmca@aniocean.com</span>
      </>
    ),
  },
  {
    title: "Counter Notifications",
    content: (
      <>
        If you believe a takedown request was filed in error, you may file a counter-notice including: <br />
        • Your contact info <br />
        • The URL of removed content <br />
        • A statement under penalty of perjury that the content was removed by mistake or misidentification
      </>
    ),
  },
  {
    title: "Repeat Infringers",
    content: (
      <>
        For any legal or copyright-related concerns, contact: 📧{" "}
        <span className="text-white">legal@aniocean.com</span>
      </>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <>
        For questions or support, email us at{" "}
        <span className="text-white">support@aniocean.com</span>
      </>
    ),
  },
];

export default dmcaPolicy;
