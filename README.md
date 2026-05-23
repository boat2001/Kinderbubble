# Kinder Bubble International School

**Kinder Bubble International School (KBIS)** is an international school in **Accra, Ghana**, on Spintex Road (Community 18). We welcome families with children from **six months through ten years** — from creche to primary — in one caring campus community.

We follow a **Cambridge-inspired pathway** with **English and French** in the learning day, so children grow with strong academics and real bilingual exposure. Classrooms and campus life balance **structured learning** with **indoor and outdoor play**, because young learners do their best work when they feel safe, known, and free to explore.

**Programmes by stage:** creche (6 months–2 years), nursery (2–3), kindergarten (3–4), reception (4), and primary (5–10).

We keep **health, safety, and vetted staff** at the centre of how we operate, and we offer **rolling admissions** and campus conversations year-round so new families can find the right fit without waiting for a single intake window.

### Visit or reach us

| | |
| --- | --- |
| **Address** | 21 Quince Street, Community 18 · Spintex Road, Accra, Ghana |
| **Phone** | +233 24 493 8605 |
| **Email** | info@kbubble.edu.gh |
| **Hours** | 6:00 a.m. – 6:00 p.m., open year-round |
| **Principal** | Ms. Delphina Naa Lomoley Lomotey |

Official school presence: [kbubble.edu.gh](https://kbubble.edu.gh)

---

## About this website repository

This repo powers the **kbubble.edu.gh** web experience: a React (Vite) front end and a small Node/Express API for forms and optional Supabase-backed content. It is maintained for the school’s communications and admissions teams.

**Developers:** Node 18+, then `npm install`, `npm run frontend:build`, and `npm run dev`. Supabase-backed forms require running `db/schema.sql` in Supabase and setting `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` in `.env`. Email notifications use Resend: set `RESEND_API_KEY`, `MAIL_FROM`, and `ADMIN_EMAIL`. Key content lives in `client/src/content/schoolData.js` and `client/src/content/`; styling overrides in `client/src/assets/kinderbubble.css`. See `package.json` scripts for `frontend:dev`, `frontend:build`, and `start`.
