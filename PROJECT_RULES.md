# PROJECT RULES - Christhelp Studio Website

> **IMPORTANT**: This file is the permanent reference for the project.
> Always check it before making decisions or changes.

---

## 🧠 PROJECT GOAL

Build a luxury, modern, scroll-animated photography website that:

- Looks premium and established
- Uses smooth scroll + cinematic motion
- Shows immersive portfolio
- Converts visitors to WhatsApp enquiries
- Works perfectly on mobile + desktop
- Deploys on Netlify
- Is structured for future expansion

This is version 1 but must be coded like a future large product.

---

## 🏢 BUSINESS INFO

| Field | Value |
|-------|-------|
| **Studio** | Christhelp Studio |
| **Tagline** | Capturing moments that last forever |
| **Phone & WhatsApp** | 08060451925 |
| **Facebook** | https://www.facebook.com/profile.php?id=637712266097835 |
| **Location** | CFXH+H72, Tsaunin Kura 800104, Kaduna, Nigeria |

---

## 🎨 DESIGN DIRECTION

Site must feel:
- Premium
- Cinematic
- Elegant
- Professional
- Modern

User must think: *"This studio looks expensive and serious."*

**Avoid:**
- Cheap template feel
- Default styling
- Bright childish colors

---

## 🎨 COLOR SYSTEM (MANDATORY)

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0b0b0b` | Main background |
| Surface | `#111111` | Cards, sections |
| Primary Orange | `#ff7a00` | Accents, CTAs |
| Hover Orange | `#cc6200` | Hover states |
| Text | `#f5f5f5` | Primary text |
| Muted Text | `#888888` | Secondary text |

> Orange must be elegant, not loud.

---

## 🧱 TECH STACK

**Core:**
- React
- TypeScript
- Tailwind CSS
- shadcn/ui structure

**Dependencies:**
- framer-motion
- lenis (smooth scroll)
- three
- @react-three/fiber
- @react-three/drei
- lucide-react

**Project Structure:**
```
/components/ui
/components/sections
/hooks
/lib
/public/images
/public/images/portfolio
/public/images/hero
```

---

## 🖼️ IMAGE STORAGE RULES

> ⚠️ Images stored locally for now. DO NOT use Cloudinary yet.

**Folders:**
- `/public/images/portfolio` - Portfolio gallery images
- `/public/images/hero` - Hero section images

**Requirements:**
- Build gallery to read images from `/public/images/portfolio`
- Use hero images from `/public/images/hero`
- Use optimized loading
- Use responsive sizing
- Avoid huge file rendering

**Future preparation:**
- Structure code so Cloudinary can easily replace local images later
- Create helper file: `/lib/image-loader.ts`

---

## 🖥️ WEBSITE STRUCTURE

**Sections (single scroll page):**
1. Hero
2. Portfolio (3D gallery)
3. Services
4. Testimonials
5. Booking
6. Contact
7. Footer

**Additional:**
- Sticky navbar
- Floating WhatsApp button always visible

---

## ✨ SCROLL & ANIMATION RULES

**Use:**
- Smooth scrolling
- Parallax motion
- Fade-ins
- Reveal animations
- Luxury timing

**Avoid:**
- Fast cheap animations
- Janky motion

Everything smooth and premium.

---

## 🖼️ PORTFOLIO SECTION (CRITICAL)

**Component:** `/components/ui/3d-gallery-photography.tsx`

**Dependencies:**
- three
- @react-three/fiber
- @react-three/drei

**Load images from:** `/public/images/portfolio`

### SPEED RULES (MANDATORY)

**Desktop:**
```
speed={0.35}
visibleCount={12}
```

**Mobile:**
```
speed={0.20}
visibleCount={8}
```

If still fast, inside gallery code change:
```
0.3 * delta → 0.1 * delta
```

Must feel slow, cinematic and premium.

---

## 📸 SERVICES SECTION

Services to show:
- Studio portraits
- Passport photos
- Baby photography
- Graduation shoots
- Family photos

Use luxury card layout with hover effects.

---

## ⭐ TESTIMONIALS

- Luxury card layout
- Placeholders should look real
- Auto-scroll slowly

---

## 📅 BOOKING FORM

**Fields:**
- Name
- Phone
- Shoot type
- Preferred date
- Message

**On submit:**
- Open WhatsApp with prefilled message
- Number: `2348060451925`
- Show confirmation: "Opening WhatsApp…"

---

## 📍 CONTACT SECTION

**Show:**
- Clickable phone
- WhatsApp
- Facebook
- Google map embed
- Address text
- Get directions button

---

## 📱 MOBILE RULES (STRICT)

Must feel premium on mobile:
- Smooth performance
- Optimized gallery
- No lag
- Proper spacing
- Floating WhatsApp button
- Mobile-first design always

---

## 🚀 PERFORMANCE RULES

**Must:**
- Load fast
- Use optimized images
- Avoid large initial bundle
- Lazy load where possible
- Smooth 60fps scroll
- No unnecessary libraries

---

## 🧠 SCALABILITY RULES

**Prepare for V2:**
- Admin dashboard
- Image upload
- Client gallery
- Payments
- Blog

Keep modular code.

---

## ❌ HARD RULES

**DO NOT:**
- Use ugly default styling
- Ignore mobile optimization
- Use random colors
- Overcomplicate backend
- Break performance
- Build like a beginner template

---

## 🧾 WORKFLOW RULES

**Before coding:**
1. Create `/PROJECT_RULES.md` ✅
2. Paste this prompt inside ✅
3. Always reference it

**During coding:**
- Follow structure strictly
- Keep code clean
- Optimize performance
- Test mobile + desktop
- Keep scalable

---

## 🏁 FINAL OUTPUT REQUIRED

A premium photography website that:
- Looks expensive
- Scrolls smoothly
- Has immersive portfolio
- Converts to WhatsApp
- Works on all devices
- Ready for Netlify deploy
