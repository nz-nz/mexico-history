# Snapex Image Extraction Examples

## Completed Extractions (Proof of Concept)

### 1. Mole Extraction Results

**Command:**
```bash
snapex "https://www.google.com/search?q=mole+poblano+recipe+image&tbm=isch" \
  --grounded-dino \
  --dino-prompt "mole. sauce. dish" \
  --output ./tmp/mole-search \
  --wait 2000
```

**Results:**
- Total detections: **27**
- Regions with confidence > 0.3: **7**
- Best region: `001-mole sauce.png` (confidence: **0.528**)

**Top Candidates (High Confidence):**
```
{
  "file": "regions/001-mole sauce.png",
  "confidence": 0.5280354022979736,
  "label": "mole sauce"
}
{
  "file": "regions/002-mole sauce.png",
  "confidence": 0.44147682189941406,
  "label": "mole sauce"
}
{
  "file": "regions/003-mole sauce.png",
  "confidence": 0.3192968964576721,
  "label": "mole sauce"
}
{
  "file": "regions/004-mole sauce.png",
  "confidence": 0.32047224044799805,
  "label": "mole sauce"
}
{
  "file": "regions/007-mole sauce.png",
  "confidence": 0.35795173048973083,
  "label": "mole sauce"
}
```

**Action:** Select region 001 (highest confidence 0.528)

---

### 2. Tacos Extraction Results

**Command:**
```bash
snapex "https://www.google.com/search?q=tacos+mexicanos+recipe&tbm=isch" \
  --grounded-dino \
  --dino-prompt "tacos. taco. food" \
  --output ./tmp/tacos-search \
  --wait 2000
```

**Results:**
- Total detections: **58**
- High variation in confidence scores
- Multiple viable candidates

**Status:** ✓ Ready - Multiple high-quality options available

---

### 3. Tequila Extraction Results

**Command:**
```bash
snapex "https://www.google.com/search?q=tequila+bottle+glass&tbm=isch" \
  --grounded-dino \
  --dino-prompt "tequila. bottle. drink" \
  --output ./tmp/tequila-search \
  --wait 2000
```

**Results:**
- Total detections: **49**
- Good mix of bottle/glass presentations
- Ready for selection

**Status:** ✓ Ready

---

### 4. Chiles en Nogada Extraction Results

**Command:**
```bash
snapex "https://www.google.com/search?q=chiles+en+nogada&tbm=isch" \
  --grounded-dino \
  --dino-prompt "chile. stuffed. pepper" \
  --output ./tmp/chiles-nogada-search \
  --wait 2000
```

**Results:**
- Total detections: **42**
- Good representation of different plating styles
- Multiple angles available

**Status:** ✓ Ready

---

## Image Selection Workflow

### Step 1: Evaluate Metadata

For each extraction, analyze the metadata.json:

```bash
cat "$EXTRACTION_DIR/metadata.json" | jq '.regions[] | select(.confidence > 0.3) | {file, confidence, bounds, label}'
```

**Key Metrics:**
- `confidence`: Detection confidence (higher is better)
- `bounds`: [x, y, width, height] - image dimensions
  - Good: 100-300px range
  - Avoid: Full-page ~1270x700px
- `label`: Object classification

### Step 2: Select Best Region

**Criteria (in priority order):**
1. Confidence > 0.35 (minimum 0.25)
2. Bounds width/height 100-300px (reasonable image size)
3. Label matches dish type
4. No overlapping text/watermarks (visual inspection)

### Step 3: Convert PNG → JPG

```bash
sips -s format jpeg "source.png" --out "output.jpg"
```

**File Size Reduction:**
- PNG: ~200-400KB
- JPG: ~50-150KB (30-40% reduction)

### Step 4: Upload to GCS

```bash
gsutil cp output.jpg gs://ai-chat-assets-0942035858/gastronomia/filename.jpg
```

### Step 5: Verify Accessibility

```bash
curl -I "https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/filename.jpg"
```

Expected: `HTTP/2 200`

---

## Detection Prompt Strategies

### General Approach
Each dish has a custom DINO prompt optimized for detection:

| Dish Type | Prompt | Confidence Expected |
|-----------|--------|-------------------|
| **Mole** | `mole. sauce. dish` | 0.35-0.53 |
| **Tacos** | `tacos. taco. food` | 0.30-0.55 |
| **Tequila** | `tequila. bottle. drink` | 0.25-0.50 |
| **Chiles en Nogada** | `chile. stuffed. pepper` | 0.30-0.45 |

### Prompt Design Rules
1. Use primary object terms (mole, taco, bottle)
2. Add category/context (sauce, food, drink)
3. Optional: regional/style indicators (oaxaca, mexican)
4. Separate with dots (Grounding DINO format)

---

## Quality Assurance Checklist

Before uploading each image:

- [ ] Confidence score recorded (>0.25)
- [ ] Bounds dimensions reasonable (100-300px)
- [ ] PNG → JPG conversion successful
- [ ] File size < 300KB
- [ ] Upload to GCS successful
- [ ] URL returns 200 OK via curl
- [ ] No 403/404 errors
- [ ] Visual spot-check (image relevant to dish)

---

## Temporary Files Management

All extractions saved to:
```
tmp/mole-search/2026-01-29T05-21-56-371-www-google-com/
tmp/tacos-search/2026-01-29T05-22-27-929-www-google-com/
tmp/tequila-search/2026-01-29T05-22-51-860-www-google-com/
tmp/chiles-nogada-search/2026-01-29T05-23-18-207-www-google-com/
```

**Cleanup after completion:**
```bash
rm -rf tmp/*-search
rm -rf tmp/*-extraction
rm -rf tmp/gastronomia-images
```

---

## Common Snapex Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| No detections | Prompt too specific | Lower threshold to 0.10, broaden prompt |
| All full-page regions | Prompt too generic | Use specific dish name in prompt |
| 403 Forbidden errors | Site blocking access | Try different source (archive.org) |
| Blank regions | JS-heavy page | Increase `--wait` to 3000ms |
| Low confidence < 0.20 | Poor match | Try different search query |

---

## Snapex Performance Notes

**Extraction Speed:**
- Initial page capture: ~2-3 seconds
- Grounding DINO detection: ~5-10 seconds
- Region extraction: ~5-10 seconds
- **Total per dish: ~15-25 seconds**

**Estimated Timeline:**
- 46 dishes × 20 seconds = ~15 minutes extraction time
- Plus manual selection/upload: ~30-60 minutes
- **Total project: ~1-2 hours for full batch**

---

## Success Metrics

✅ **All 46 images sourced** from web search
✅ **Each with confidence score** > 0.25
✅ **Converted to JPG** format
✅ **Uploaded to GCS** successfully
✅ **All URLs returning 200 OK**
✅ **gastronomia.ts updated** with new URLs
✅ **Images display correctly** in ExploreMode

---

## Reference: Snapex Command Template

```bash
snapex "SEARCH_URL" \
  --grounded-dino \
  --dino-prompt "PROMPT_TERMS" \
  --output ./tmp/OUTPUT_FOLDER \
  --wait 2000
```

Where:
- `SEARCH_URL`: Google Images search or similar
- `PROMPT_TERMS`: Space-separated object labels
- `OUTPUT_FOLDER`: Destination directory
- `--wait 2000`: Milliseconds for JS to load (increase for slow sites)

**Optional flags:**
- `--sam`: Add segmentation masks (slower, more precise)
- `--threshold 0.15`: Lower = more detections
- `--deep`: Use Claude API for detailed labeling
