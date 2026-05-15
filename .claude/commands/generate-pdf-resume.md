# Resume Render Skill

Convert an approved `resume.md` into a formatted `.docx` and save it to the job folder.

## When to use
When the user has reviewed and approved `resume.md` in the job folder and asks to generate the `.docx`.

## Inputs
- Confirmation that the draft is ready
- The target company and role (to name/find the job folder)

---

## Process

### 1. Read the draft
Read the draft file in full using the Read tool. This is mandatory — never rely on memory or a prior version of the file. The user may have made manual edits since the last render, and the file on disk is always the source of truth. The content object in build.js must be derived entirely from what is read in this step.

### 2. Parse into content object
Convert the markdown into the `content` object schema used by `build.js`:

- **Profile:** Convert the profile paragraph into an array of segments. Text wrapped in `**double asterisks**` becomes `{ text: "phrase", bold: true }`. Plain text becomes `{ text: "plain text" }`.
- **Single-company entries**: Parse as `type: "single"` with `company`, `role`, `date`, and `bullets`.
- **Multi-role entries**: Parse as `type: "multi"` with `company`, `date`, and a `roles` array — each role has `title`, `date`, and `bullets`.
- **Bullets:** Each bullet is an array of segments, splitting on `**bold**` markers the same way as the profile.

### 3. Identify or create the job folder
Save the `.docx` into `jobs/[company-slug]-[role-slug]-[YYYY-MM-DD]/`. Create the folder if it doesn't exist.

### 4. Render
- Replace the `content` object in `resume-builder/build.js` with the parsed content
- Update the output path to point to the job folder (keep the timestamp in the filename)
- Run: `node resume-builder/build.js`

### 5. Convert to PDF and clean up
Run LibreOffice headless to convert the generated `.docx` to PDF in the same folder, then delete the `.docx`:
```
soffice --headless --convert-to pdf --outdir <job-folder> <file.docx> && rm <file.docx>
```

### 6. Share the file
- Provide a `computer://` link to the generated `.pdf`
- Confirm the folder it was saved to

---

## Formatting rules (baked into build.js — do not modify without deliberate intent)

- **Font**: Arial throughout, 11pt body, 20pt name header
- **Page**: US Letter (8.5×11), 0.6 inch margins
- **Section headers**: Bold, 14pt, with bottom border underline
- **Single-company entries**: Company name bold + comma, role title italic, on one line. Date/location right-aligned via borderless two-column table.
- **Multi-role entries**: Company name bold on its own header line with total date range. Each role as an italic sub-entry with date right-aligned. Bullets sit under each role.
- **Bullets**: `LevelFormat.BULLET` — never Unicode bullet characters. Bold phrases rendered as mixed `TextRun` segments.
- **Column widths**: Default left 6000 / right 4512 DXA. Education uses left 8000. Widen right column if date text overflows.
- **Filename**: Always timestamped to avoid preview caching issues.
