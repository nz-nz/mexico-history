# Gastronomia Images Fix Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix all 46 broken image URLs in gastronomia.ts by extracting proper high-quality images from web sources using snapex-image-extraction skill and uploading to GCS.

**Architecture:** Use snapex CLI with Grounding DINO object detection to extract images from Google Images search results for each dish, select the best candidate by confidence score and image size, convert PNG to JPG, upload to Google Cloud Storage, and update all imageUrl references in gastronomia.ts.

**Tech Stack:** snapex (Grounding DINO + SAM), sips (image conversion), gsutil (GCS upload), jq (JSON parsing)

---

## Problem Statement

**Current State:**
- All 46 dishes in gastronomia.ts have broken Google Cloud Storage image URLs (returning 404)
- URLs reference: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/{dish-name}.jpg`
- Bucket path: `gs://ai-chat-assets-0942035858/gastronomia/`

**Discovery Results:**
- Used snapex to extract images for sample dishes:
  - **Mole**: 27 detections, 7 with confidence > 0.3 (best: 0.528)
  - **Tacos**: 58 detections, high variation
  - **Tequila**: 49 detections
  - **Chiles en Nogada**: 42 detections

**Image Organization:**
- 46 total dishes across 5 categories: platos_tipicos (8), platos_regionales (13), bebidas (7), ingredientes (10), dulces (3)
- Note: Pan de Muerto is listed under platos_regionales but is a dulce

---

## Implementation Strategy

### Phase 1: Extract & Select Images (For Each Dish)

**Workflow:**
1. Run snapex for each dish with Google Images search
2. Parse metadata.json to find best candidates (confidence > 0.25)
3. Evaluate bounds (good: 100-300px, avoid full-page ~1270x700)
4. Convert best PNG to JPG
5. Upload to GCS
6. Verify with curl
7. Record new URL

### Phase 2: Batch Update gastronomia.ts

**Workflow:**
1. Collect all 46 new image URLs
2. Update imageUrl in each GastronomyProfile entry
3. Verify file compiles (tsc)
4. Commit changes

---

## Detailed Implementation Tasks

### Task 1: Extract Mole Image

**Files:**
- Source: https://www.google.com/search?q=mole+poblano+recipe+image&tbm=isch
- Extract to: `tmp/gastronomia-images/mole.jpg`
- Destination: `gs://ai-chat-assets-0942035858/gastronomia/mole.jpg`

**Step 1: Run snapex to detect mole images**

```bash
cd /Users/nikolaizhukovets/Desktop/ai/mexico-history

snapex "https://www.google.com/search?q=mole+poblano+recipe+image&tbm=isch" \
  --grounded-dino \
  --dino-prompt "mole. sauce. dish" \
  --output ./tmp/mole-extraction \
  --wait 2000
```

Expected output: `Found X regions. Output: tmp/mole-extraction/2026-*/`

**Step 2: Parse metadata and select best image (confidence > 0.35)**

```bash
MOLE_DIR=$(ls -dt tmp/mole-extraction/2026-* | head -1)
cat "$MOLE_DIR/metadata.json" | jq '.regions[] | select(.confidence > 0.35) | {file, confidence}' | head -5
```

Expected: Show 3-5 regions with confidence 0.35-0.53

**Step 3: Select the highest confidence region (001-mole sauce.png expected)**

```bash
BEST_REGION="regions/001-mole sauce.png"
```

**Step 4: Copy and convert PNG to JPG**

```bash
mkdir -p tmp/gastronomia-images
sips -s format jpeg "$MOLE_DIR/$BEST_REGION" --out tmp/gastronomia-images/mole.jpg
```

Expected: `tmp/gastronomia-images/mole.jpg` created (~50-200KB)

**Step 5: Upload to GCS**

```bash
gsutil cp tmp/gastronomia-images/mole.jpg gs://ai-chat-assets-0942035858/gastronomia/mole.jpg
```

Expected: `Copying file://...`

**Step 6: Verify URL accessibility**

```bash
curl -I "https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/mole.jpg"
```

Expected: `200 OK` response

**Step 7: Record new URL**

```
https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/mole.jpg
```

---

### Task 2: Extract Chiles en Nogada Image

**Files:**
- Source: https://www.google.com/search?q=chiles+en+nogada&tbm=isch
- Extract to: `tmp/gastronomia-images/chiles_en_nogada.jpg`
- Destination: `gs://ai-chat-assets-0942035858/gastronomia/chiles_en_nogada.jpg`

**Step 1: Run snapex**

```bash
snapex "https://www.google.com/search?q=chiles+en+nogada&tbm=isch" \
  --grounded-dino \
  --dino-prompt "chile. stuffed. pepper" \
  --output ./tmp/chiles-nogada-extraction \
  --wait 2000
```

**Step 2: Find best region (confidence > 0.35)**

```bash
CHILES_DIR=$(ls -dt tmp/chiles-nogada-extraction/2026-* | head -1)
cat "$CHILES_DIR/metadata.json" | jq '.regions[] | select(.confidence > 0.35)'
```

**Step 3-7: Convert, upload, verify, record URL**

Same process as mole. Final URL:
```
https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/chiles_en_nogada.jpg
```

---

### Task 3: Extract Tacos Image

**Similar process:**
- Prompt: `"tacos. taco. food"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/tacos.jpg`

---

### Task 4: Extract Tamales Image

**Similar process:**
- Prompt: `"tamales. food. dish"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/tamales.jpg`

---

### Task 5: Extract Pozole Image

**Similar process:**
- Prompt: `"pozole. soup. broth"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/pozole.jpg`

---

### Task 6: Extract Birria Image

**Similar process:**
- Prompt: `"birria. meat. stew"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/birria.jpg`

---

### Task 7: Extract Garnachas Image

**Similar process:**
- Prompt: `"garnachas. sopes. gorditas"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/garnachas.jpg`

---

### Task 8: Extract Pambazo Image

**Similar process:**
- Prompt: `"pambazo. sandwich. torta"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/pambazo.jpg`

---

### Task 9: Extract Guajolote Image

**Similar process:**
- Prompt: `"guajolote. turkey. bird"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/guajolote.jpg`

---

### Task 10: Extract Cochinita Pibil Image

**Similar process:**
- Prompt: `"cochinita. pork. meat"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/cochinita_pibil.jpg`

---

### Task 11: Extract Tlayudas Image

**Similar process:**
- Prompt: `"tlayudas. tortilla. oaxaca"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/tlayudas.jpg`

---

### Task 12: Extract Machaca Image

**Similar process:**
- Prompt: `"machaca. shredded. meat"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/machaca.jpg`

---

### Task 13: Extract Cabrito Image

**Similar process:**
- Prompt: `"cabrito. roasted. goat"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/cabrito.jpg`

---

### Task 14: Extract Papadzules Image

**Similar process:**
- Prompt: `"papadzules. tortillas. sauce"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/papadzules.jpg`

---

### Task 15: Extract Huevos Motuleños Image

**Similar process:**
- Prompt: `"huevos. eggs. breakfast"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/huevos_motulenos.jpg`

---

### Task 16: Extract Salbutes Image

**Similar process:**
- Prompt: `"salbutes. fried. tortillas"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/salbutes.jpg`

---

### Task 17: Extract Torta Ahogada Image

**Similar process:**
- Prompt: `"torta. sandwich. jalisco"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/torta_ahogada.jpg`

---

### Task 18: Extract Pescado Zarandeado Image

**Similar process:**
- Prompt: `"pescado. grilled. fish"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/pescado_zarandeado.jpg`

---

### Task 19: Extract Pan de Muerto Image

**Similar process:**
- Prompt: `"pan. bread. dulce. muertos"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/pan_de_muerto.jpg`

---

### Task 20: Extract Tequila Image

**Similar process:**
- Prompt: `"tequila. bottle. drink"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/tequila.jpg`

---

### Task 21: Extract Mezcal Image

**Similar process:**
- Prompt: `"mezcal. bottle. drink"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/mezcal.jpg`

---

### Task 22: Extract Pulque Image

**Similar process:**
- Prompt: `"pulque. drink. beverage"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/pulque.jpg`

---

### Task 23: Extract Champurrado Image

**Similar process:**
- Prompt: `"champurrado. chocolate. drink"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/champurrado.jpg`

---

### Task 24: Extract Agua de Jamaica Image

**Similar process:**
- Prompt: `"agua. jamaica. flower. drink"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/agua_jamaica.jpg`

---

### Task 25: Extract Tejuino Image

**Similar process:**
- Prompt: `"tejuino. drink. beverage"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/tejuino.jpg`

---

### Task 26: Extract Maíz Image

**Similar process:**
- Prompt: `"maiz. corn. kernels"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/maiz.jpg`

---

### Task 27: Extract Chile Image

**Similar process:**
- Prompt: `"chile. pepper. spicy"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/chile.jpg`

---

### Task 28: Extract Cacao Image

**Similar process:**
- Prompt: `"cacao. cocoa. beans"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/cacao.jpg`

---

### Task 29: Extract Frijol Image

**Similar process:**
- Prompt: `"frijol. beans. legume"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/frijol.jpg`

---

### Task 30: Extract Nopal Image

**Similar process:**
- Prompt: `"nopal. cactus. plant"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/nopal.jpg`

---

### Task 31: Extract Aguacate Image

**Similar process:**
- Prompt: `"aguacate. avocado. fruit"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/aguacate.jpg`

---

### Task 32: Extract Jitomate Image

**Similar process:**
- Prompt: `"jitomate. tomato. fruit"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/jitomate.jpg`

---

### Task 33: Extract Vainilla Image

**Similar process:**
- Prompt: `"vainilla. vanilla. pods"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/vainilla.jpg`

---

### Task 34: Extract Calabaza Image

**Similar process:**
- Prompt: `"calabaza. squash. pumpkin"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/calabaza.jpg`

---

### Task 35: Extract Miel y Aguamiel Image

**Similar process:**
- Prompt: `"miel. honey. liquid"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/aguamiel.jpg`

---

### Task 36: Extract Cajeta Image

**Similar process:**
- Prompt: `"cajeta. dulce. leche"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/cajeta.jpg`

---

### Task 37: Extract Churros Image

**Similar process:**
- Prompt: `"churros. fried. pastry"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/churros.jpg`

---

### Task 38: Extract Conchas Image

**Similar process:**
- Prompt: `"conchas. bread. dulce"`
- Final URL: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/conchas.jpg`

---

### Task 39: Compile and Verify TypeScript

**Files:**
- Modify: [data/gastronomia.ts](data/gastronomia.ts)

**Step 1: Run TypeScript compiler to verify syntax**

```bash
cd /Users/nikolaizhukovets/Desktop/ai/mexico-history
npx tsc --noEmit
```

Expected: No errors, compilation succeeds

**Step 2: Run quick test to import file**

```bash
node -e "import('./data/gastronomia.ts').then(() => console.log('✓ File imports successfully'))"
```

Expected: `✓ File imports successfully`

---

### Task 40: Update All Image URLs in gastronomia.ts

**Files:**
- Modify: [data/gastronomia.ts](data/gastronomia.ts)

**Reference:** Use the new URLs collected from Tasks 1-38. This is a BATCH operation.

**Step 1: Create mapping of old → new URLs**

Old URL pattern: `https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/{dish-name}.jpg`
New URLs: (collected from each extraction task above)

**Example mappings:**
```
OLD: https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/mole.jpg
NEW: https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/mole.jpg

OLD: https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/chiles_en_nogada.jpg
NEW: https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/chiles_en_nogada.jpg
```

**Step 2: Batch replace all 46 imageUrl entries**

Use multi_replace_string_in_file tool to update all 46 entries in one operation.

For each entry, find the old imageUrl and replace with new:

Example for first 3 entries:

```typescript
// ENTRY 1: GAS_MOLE
OLD:
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/mole.jpg',
NEW:
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/mole.jpg',

// ENTRY 2: GAS_CHILES_NOGADA
OLD:
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/chiles_en_nogada.jpg',
NEW:
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/chiles_en_nogada.jpg',

// ENTRY 3: GAS_TACOS
OLD:
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/tacos.jpg',
NEW:
    imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/tacos.jpg',
```

Continue for all 46 entries...

**Step 3: Verify file compiles**

```bash
npx tsc --noEmit
```

Expected: No errors

**Step 4: Commit changes**

```bash
git add data/gastronomia.ts
git commit -m "fix: update all 46 broken gastronomia image URLs with working GCS links"
```

---

### Task 41: Test Images Display Correctly

**Files:**
- Test: Start dev server and navigate to ExploreMode (Gastronomía section)

**Step 1: Start dev server**

```bash
npm run dev
```

Expected: Server running at http://localhost:3000

**Step 2: Open in browser and navigate to Explore > Gastronomía**

**Step 3: Verify all images load**

- No 404 errors in console
- All 46 images display correctly
- Responsive layout preserved

**Step 4: Stop server**

```bash
^C
```

---

### Task 42: Final Verification and Cleanup

**Step 1: Check all 46 URLs are accessible**

```bash
# Create quick test for all URLs
node << 'EOF'
const urls = [
  'https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/mole.jpg',
  'https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/chiles_en_nogada.jpg',
  // ... all 46 URLs
];

// Quick sample check
urls.slice(0, 5).forEach(url => {
  fetch(url, { method: 'HEAD' })
    .then(r => console.log(`✓ ${url.split('/').pop()}: ${r.status}`))
    .catch(e => console.log(`✗ ${url}: ${e.message}`));
});
EOF
```

Expected: All return 200 OK

**Step 2: Clean up temporary extraction directories**

```bash
rm -rf tmp/mole-search tmp/tacos-search tmp/tequila-search tmp/chiles-nogada-search
rm -rf tmp/*-extraction
rm -rf tmp/gastronomia-images
```

**Step 3: Final commit**

```bash
git status  # Should be clean
bd sync
git push
```

---

## Summary

- **Total Dishes**: 46
- **Total Tasks**: 42
- **Extract Phase**: 38 tasks (one per dish + 1 batch verification)
- **Update Phase**: 3 tasks (compile → batch update → verify)
- **Test Phase**: 1 task (browser test)

**Estimated Time**: ~4-6 hours (most time spent in snapex extraction + GCS upload)

**Critical Success Criteria:**
1. All 46 image URLs are valid (200 OK)
2. Images display correctly in ExploreMode
3. gastronomia.ts compiles with no errors
4. All changes committed to git

---

## Notes

- **Snapex Extraction**: Already completed for mole, tacos, tequila, chiles-nogada as proof of concept
- **GCS Path**: All images upload to `gs://ai-chat-assets-0942035858/gastronomia/`
- **File Naming**: Use snake_case matching current imageUrl filenames (e.g., `chiles_en_nogada.jpg`)
- **Image Format**: Convert PNG → JPG to reduce file size
- **Confidence Threshold**: Select regions with confidence > 0.3 (minimum > 0.25)
