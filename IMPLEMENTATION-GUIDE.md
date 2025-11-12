# 🚀 LOGO IMPLEMENTATION GUIDE
## Modern Çizgi Mimarlık Website - 15 Logo Update

---

## 📥 FILES TO DOWNLOAD

You should have 2 files downloaded:

1. **page.tsx** → Goes to: `app/page.tsx` (Homepage)
2. **hakkimizda-page.tsx** → Rename to `page.tsx` and place in: `app/hakkimizda/page.tsx` (About page)

---

## 📂 STEP 1: Organize Logo Files

### Create Directory Structure

In your project, make sure this directory exists:
```
/public/images/references/
```

### Copy & Rename Logos

Copy these 15 files from `/mnt/project/` to `/public/images/references/` with NEW names:

| OLD Filename (from /mnt/project) | NEW Filename | Destination |
|----------------------------------|--------------|-------------|
| `Eraco_logonew.png` | `eraco.png` | `/public/images/references/` |
| `download_3.png` | `fsn.png` | `/public/images/references/` |
| `GLORE_LOGO.png` | `glore.png` | `/public/images/references/` |
| `Kilim_Mobilya.jpg` | `kilim.jpg` | `/public/images/references/` |
| `pngtransparentbenettonhdlogothumbnail.png` | `benetton.png` | `/public/images/references/` |
| `gizacarpetlogo.png` | `giza.png` | `/public/images/references/` |
| `logo.png` ⚠️ (Star logo) | `star.png` | `/public/images/references/` |
| `OzaktacLogo.png` | `ozaktac.png` | `/public/images/references/` |
| `pierrecardinlogo.png` | `pierrecardin.png` | `/public/images/references/` |
| `download.png` ⚠️ (Kron logo) | `kron.png` | `/public/images/references/` |
| `logo2.png` | `orma.png` | `/public/images/references/` |
| `karebantlogo1.png` | `kareban.png` | `/public/images/references/` |
| `company_logo.jpg` | `arcoirisa.jpg` | `/public/images/references/` |
| `channels4_profile.jpg` | `dvt.jpg` | `/public/images/references/` |

**From your uploads folder:**
| `oneclickprofitlogo.png` | `oneclickprofit.png` | `/public/images/references/` |

⚠️ **IMPORTANT:** Be careful with `logo.png` and `download.png` as there are multiple files with these names. Make sure you grab the correct ones:
- `logo.png` = Star Alüminyum (red & blue logo)
- `download.png` = Kron (just red "KRON" text, no motorcycle)

---

## 📝 STEP 2: Replace Page Files

### Homepage
1. **Backup current file** (optional but recommended):
   ```
   app/page.tsx → app/page.tsx.backup
   ```

2. **Replace with new file**:
   - Take the downloaded `page.tsx`
   - Place it at: `app/page.tsx`

### About Page
1. **Backup current file** (optional):
   ```
   app/hakkimizda/page.tsx → app/hakkimizda/page.tsx.backup
   ```

2. **Replace with new file**:
   - Take the downloaded `hakkimizda-page.tsx`
   - **RENAME it to:** `page.tsx`
   - Place it at: `app/hakkimizda/page.tsx`

---

## ✅ STEP 3: Test Your Changes

### 1. Check File Structure
Your project should now look like this:
```
modern-cizgi-website/
├── app/
│   ├── page.tsx                    ← NEW (Homepage)
│   └── hakkimizda/
│       └── page.tsx                ← NEW (About page)
├── public/
│   └── images/
│       └── references/
│           ├── eraco.png           ← NEW
│           ├── fsn.png             ← NEW
│           ├── glore.png           ← NEW
│           ├── kilim.jpg           ← NEW
│           ├── benetton.png        ← NEW
│           ├── giza.png            ← NEW
│           ├── star.png            ← NEW
│           ├── ozaktac.png         ← NEW
│           ├── pierrecardin.png    ← NEW
│           ├── kron.png            ← NEW
│           ├── orma.png            ← NEW
│           ├── kareban.png         ← NEW
│           ├── arcoirisa.jpg       ← NEW
│           ├── dvt.jpg             ← NEW
│           └── oneclickprofit.png  ← NEW
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Visit Pages
- Homepage: `http://localhost:3000/`
- About page: `http://localhost:3000/hakkimizda`

### 4. Check Logo Grid
Look for the **"Referanslarımız"** section on both pages and verify:
- ✅ All 15 logos display
- ✅ Grid shows **5 columns on desktop**
- ✅ Grid shows **3 columns on tablet**
- ✅ Grid shows **2 columns on mobile**
- ✅ Logos are in **color** (not grayscale)
- ✅ Hover effect shows slight scale and shadow
- ✅ All images load without errors (check browser console)

---

## 🔧 STEP 4: Optional Adjustments

### If a Logo Looks Too Small/Large:
You can adjust individual logo sizes in the code. Open `app/page.tsx` or `app/hakkimizda/page.tsx` and modify the `width` and `height` props:

```tsx
<Image
  src={client.logo}
  alt={`${client.name} logo`}
  width={140}  // ← Change this (try 120-180)
  height={70}  // ← Change this (try 60-90)
  className="object-contain"
/>
```

### If You Want Different Hover Effects:
Current hover: slight scale + shadow

To change, modify the card div class:
```tsx
className="... hover:scale-105 hover:shadow-lg"
              // ↑ change scale (105 = 5% bigger)
              // ↑ change shadow (sm/md/lg/xl/2xl)
```

---

## 🐛 TROUBLESHOOTING

### Problem: "Image not found" errors
**Solution:** 
1. Verify logo files are in `/public/images/references/`
2. Check filenames match EXACTLY (case-sensitive)
3. Restart dev server (`Ctrl+C` then `npm run dev`)

### Problem: Logos are cut off or weird sizes
**Solution:**
- Use `object-contain` class (already in code)
- Consider cropping the source images if needed
- Adjust `width`/`height` props for specific logos

### Problem: Grid layout looks wrong on mobile
**Solution:**
- Check the grid classes: `grid-cols-2 sm:grid-cols-3 md:grid-cols-5`
- Make sure Tailwind CSS is working (check `tailwind.config.ts`)

### Problem: Old logos still showing
**Solution:**
- Hard refresh browser (`Ctrl+Shift+R` or `Cmd+Shift+R`)
- Clear Next.js cache: `rm -rf .next` then `npm run dev`

---

## 📋 QUICK CHECKLIST

Before deployment, verify:

- [ ] All 15 logo files renamed and placed in `/public/images/references/`
- [ ] `app/page.tsx` replaced with new version
- [ ] `app/hakkimizda/page.tsx` replaced with new version
- [ ] Development server runs without errors
- [ ] Homepage displays all 15 logos in 5×3 grid
- [ ] About page displays all 15 logos in 5×3 grid
- [ ] Logos are in color (not grayscale)
- [ ] Mobile/tablet responsive grid works
- [ ] All images load (no broken images)
- [ ] Hover effects work (scale + shadow)

---

## 🚀 DEPLOYMENT

Once everything looks good locally:

1. **Test the build:**
   ```bash
   npm run build
   ```

2. **Fix any build errors** if they appear

3. **Deploy to production** using your normal process

---

## 📞 NEED HELP?

If something doesn't work:
1. Check the browser console for errors (F12 → Console tab)
2. Verify file paths and names match exactly
3. Make sure you're using the correct versions of the files
4. Restart the dev server

---

## ✨ CHANGES SUMMARY

### What Changed:
- Logo grid: **4 columns → 5 columns** (desktop)
- Logo count: **8 logos → 15 logos**
- Logo style: **Grayscale → Full color**
- Added: **One Click Profit** as 15th brand
- Removed: Grayscale hover effect
- Added: Scale + shadow hover effect

### Files Modified:
1. `app/page.tsx` (Homepage)
2. `app/hakkimizda/page.tsx` (About page)

### New Assets:
15 logos in `/public/images/references/`

---

**Implementation Date:** November 12, 2025
**Version:** 1.0

Good luck! 🎉
