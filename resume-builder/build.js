// =============================================================================
// CONTENT — replaced by Claude for each tailored resume
// =============================================================================

const content = {
  name: "ALEX CHEN",
  contact: {
    before: "alex.chen@gmail.com  |  ",
    linkText: "linkedin.com/in/alex-chen",
    linkUrl: "https://www.linkedin.com/in/alex-chen",
    after: "  |  San Francisco, CA",
  },
  profile: [
    { text: "Senior PM and ex-founder with 8 years in product. Drove " },
    { text: "trial-to-paid conversion from 18% to 34%", bold: true },
    { text: " at Intercom, adding $18M+ in ARR by identifying the account owner as the missing buyer persona. Built a B2B SaaS product from zero to " },
    { text: "$180K ARR", bold: true },
    { text: " with a 3-person team before winding down to join Intercom." },
  ],
  experience: [
    {
      type: "single",
      company: "Notion,",
      role: " Senior Product Manager",
      date: "Jan 2022 – Apr 2025  |  San Francisco, CA",
      spacingBefore: 160,
      bullets: [
        [
          { text: "Led the enterprise collaboration product, redesigning " },
          { text: "workspace governance for organizations with 500+ users", bold: true },
          { text: " — reducing time-to-activation by 40% and increasing enterprise NPS by 12 points." },
        ],
        [
          { text: "Built Notion's first " },
          { text: "admin-controlled AI feature rollout framework", bold: true },
          { text: ", enabling IT admins to gate AI access by team and use case — adopted by 60% of enterprise accounts within 3 months of launch." },
        ],
        [
          { text: "Drove bottoms-up PLG motion into enterprise: designed the upgrade path from free team adoption to centralized enterprise procurement, " },
          { text: "converting 15% of self-serve organizations into enterprise contracts", bold: true },
          { text: "." },
        ],
        [
          { text: "Shipped workspace unification feature consolidating multi-workspace sprawl into a single governed environment — the " },
          { text: "most-requested enterprise feature in Notion's history", bold: true },
          { text: " at time of launch." },
        ],
      ]
    },
    {
      type: "single",
      company: "Intercom,",
      role: " PM II — SMB Growth",
      date: "Mar 2019 – Dec 2021  |  San Francisco, CA",
      spacingBefore: 80,
      bullets: [
        [
          { text: "Increased trial-to-paid conversion from " },
          { text: "18% to 34%, adding 280K+ seats and $18M+ in ARR", bold: true },
          { text: ", by identifying the account owner as the missing buyer persona and redesigning the conversion experience around them." },
        ],
        [
          { text: "Rejected an inherited roadmap after running 3 experiments that proved it would miss the growth OKR; conducted discovery to find that " },
          { text: "82% of trial drop-off happened at the point where an admin needed to act", bold: true },
          { text: "." },
        ],
        [
          { text: "Shipped admin trial management hub: unified trial visibility, usage signals, and one-click upgrade into a single surface — reducing time-to-conversion from " },
          { text: "5 steps across 4 surfaces to one decision in under 60 seconds", bold: true },
          { text: "." },
        ],
        [
          { text: "Piloted with a 2-week prototype across 40K accounts " },
          { text: "(18% to 28% lift)", bold: true },
          { text: ", used A/B results to fund the full redesign." },
        ],
      ]
    },
    {
      type: "single",
      company: "FreelanceOS,",
      role: " Co-founder",
      date: "Jun 2017 – Jan 2019  |  Waterloo, ON",
      spacingBefore: 80,
      bullets: [
        [
          { text: "Built FreelanceOS, a B2B SaaS platform for freelancers to manage contracts, invoicing, and client communication — reached " },
          { text: "$180K ARR with a 3-person team", bold: true },
          { text: " before winding down to join Intercom." },
        ],
        [
          { text: "Designed and shipped the full product: contract templates, automated payment reminders, and client portal — from " },
          { text: "zero to paying customers in 11 weeks", bold: true },
          { text: "." },
        ],
        [
          { text: "Grew to " },
          { text: "800+ paying freelancers", bold: true },
          { text: " through content SEO and referral loops with no paid acquisition." },
        ],
      ]
    },
  ],
  education: {
    institution: "University of Waterloo,",
    degree: " B.A.Sc. Systems Design Engineering",
    date: "2017  |  Waterloo, ON",
    bullets: [
      [{ text: "Dean's List; Velocity Garage startup incubator alumni" }]
    ]
  },
};

// =============================================================================
// RENDERER — do not modify
// =============================================================================

const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  HeadingLevel, LevelFormat, BorderStyle,
  Table, TableRow, TableCell, WidthType, VerticalAlign,
  ExternalHyperlink, UnderlineType
} = require('docx');
const fs = require('fs');
const path = require('path');

const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder, insideHorizontal: noBorder, insideVertical: noBorder };

function runs(segments) {
  return segments.map(s => new TextRun({ font: "Arial", size: 22, ...s }));
}

function jobHeader(leftChildren, rightText, spacingBefore = 80, leftWidth = 6000) {
  const rightWidth = 11088 - leftWidth;
  return new Table({
    width: { size: 11088, type: WidthType.DXA },
    columnWidths: [leftWidth, rightWidth],
    borders: noBorders,
    rows: [new TableRow({
      children: [
        new TableCell({
          borders: noBorders, width: { size: leftWidth, type: WidthType.DXA },
          margins: { top: 0, bottom: 0, left: 0, right: 0 },
          children: [new Paragraph({ spacing: { before: spacingBefore, after: 40 }, children: leftChildren })]
        }),
        new TableCell({
          borders: noBorders, width: { size: rightWidth, type: WidthType.DXA },
          margins: { top: 0, bottom: 0, left: 0, right: 0 },
          verticalAlign: VerticalAlign.CENTER,
          children: [new Paragraph({
            alignment: AlignmentType.RIGHT,
            spacing: { before: spacingBefore, after: 40 },
            children: [new TextRun({ text: rightText, italics: true, font: "Arial", size: 22 })]
          })]
        }),
      ]
    })]
  });
}

function roleHeader(title, date) {
  const leftWidth = 6000, rightWidth = 5088;
  return new Table({
    width: { size: 11088, type: WidthType.DXA },
    columnWidths: [leftWidth, rightWidth],
    borders: noBorders,
    rows: [new TableRow({
      children: [
        new TableCell({
          borders: noBorders, width: { size: leftWidth, type: WidthType.DXA },
          margins: { top: 0, bottom: 0, left: 0, right: 0 },
          children: [new Paragraph({
            spacing: { before: 60, after: 40 },
            children: [new TextRun({ text: title, italics: true, font: "Arial", size: 22 })]
          })]
        }),
        new TableCell({
          borders: noBorders, width: { size: rightWidth, type: WidthType.DXA },
          margins: { top: 0, bottom: 0, left: 0, right: 0 },
          verticalAlign: VerticalAlign.CENTER,
          children: [new Paragraph({
            alignment: AlignmentType.RIGHT,
            spacing: { before: 60, after: 40 },
            children: [new TextRun({ text: date, italics: true, font: "Arial", size: 22 })]
          })]
        }),
      ]
    })]
  });
}

function bullet(segments, spacingAfter = 40) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: spacingAfter },
    children: runs(segments)
  });
}

function renderBullets(bullets, lastSpacing = 120) {
  return bullets.map((b, i) =>
    bullet(b, i === bullets.length - 1 ? lastSpacing : 40)
  );
}

function renderExperience(entry) {
  if (entry.type === "single") {
    return [
      jobHeader([
        new TextRun({ text: entry.company, bold: true, font: "Arial", size: 22 }),
        new TextRun({ text: entry.role, italics: true, font: "Arial", size: 22 }),
      ], entry.date, entry.spacingBefore || 80),
      ...renderBullets(entry.bullets),
    ];
  } else {
    const children = [
      jobHeader([
        new TextRun({ text: entry.company, bold: true, font: "Arial", size: 22 }),
      ], entry.date, 80),
    ];
    entry.roles.forEach((role, i) => {
      children.push(roleHeader(role.title, role.date));
      children.push(...renderBullets(role.bullets, i === entry.roles.length - 1 ? 120 : 80));
    });
    return children;
  }
}

const children = [
  new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 60 },
    children: [new TextRun({ text: content.name, bold: true, size: 40, font: "Arial" })]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER, spacing: { after: 200 },
    children: [
      new TextRun({ text: content.contact.before, font: "Arial", size: 20 }),
      new ExternalHyperlink({
        link: content.contact.linkUrl,
        children: [new TextRun({ text: content.contact.linkText, font: "Arial", size: 20, color: "0563C1", underline: { type: UnderlineType.SINGLE } })],
      }),
      new TextRun({ text: content.contact.after, font: "Arial", size: 20 }),
    ]
  }),
  new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("PROFILE")] }),
  new Paragraph({ spacing: { after: 160 }, children: runs(content.profile) }),
  new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("PROFESSIONAL EXPERIENCE")] }),
  ...content.experience.flatMap(renderExperience),
  new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("EDUCATION")] }),
  jobHeader([
    new TextRun({ text: content.education.institution, bold: true, font: "Arial", size: 22 }),
    new TextRun({ text: content.education.degree, italics: true, font: "Arial", size: 22 }),
  ], content.education.date, 80, 8000),
  ...renderBullets(content.education.bullets, 40),
];

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [{
      id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
      run: { size: 28, bold: true, font: "Arial", color: "000000" },
      paragraph: {
        spacing: { before: 240, after: 60 }, outlineLevel: 0,
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000", space: 4 } }
      }
    }]
  },
  numbering: {
    config: [{
      reference: "bullets",
      levels: [{
        level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 360, hanging: 360 } }, run: { font: "Arial" } }
      }]
    }]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 576, right: 576, bottom: 576, left: 576 }
      }
    },
    children
  }]
});

const outDir = process.env.OUT_DIR || '.';
const ts = new Date().toISOString().slice(0, 16).replace('T', '_').replace(':', '');
const outPath = path.join(outDir, `Alex_Chen_Resume_${ts}.docx`);

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outPath, buffer);
  console.log(`Saved: ${outPath}`);
});
