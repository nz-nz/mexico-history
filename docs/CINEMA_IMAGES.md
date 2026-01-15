# Mexican Cinema Poster Images - Upload Guide

This document provides stable source URLs for Mexican cinema history images that need to be manually downloaded and uploaded to GCS.

## GCS Bucket

Upload images to: `gs://ai-chat-assets-0942035858/assets/cinema/`

Public URL pattern: `https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/<filename>`

## Upload Command

```bash
gcloud storage cp <local_file> gs://ai-chat-assets-0942035858/assets/cinema/<filename>
```

---

## Images Status

### ✅ Already Uploaded

| Movie | Year | GCS URL |
|-------|------|---------|
| Macario | 1960 | `https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/macario_1960.jpg` |

### ⏳ Needs Manual Upload

**Instructions**: Open the link → Right Click the image → "Save Image As" to your local folder → Upload to GCS.

---

### 1. El Presidente de la República (1896)
- **Context**: First movie filmed in Mexico
- **Source**: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:El_presidente_de_la_rep%C3%BAblica_paseando_a_caballo_en_el_bosque_de_Chapultepec_(1896).webm)
- **Note**: This is a video - use a thumbnail/frame capture
- **Suggested filename**: `el_presidente_1896.jpg`

### 2. Santa (1932)
- **Context**: First Mexican sound film
- **Source**: [Wikipedia File Page](https://en.wikipedia.org/wiki/File:Santa_1932_poster.jpg) or search "Santa 1932 Mexican film poster"
- **Suggested filename**: `santa_1932.jpg`

### 3. ¡Vámonos con Pancho Villa! (1936)
- **Context**: Start of the Golden Age
- **Source**: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:V%C3%A1monos_con_Pancho_Villa_(poster).jpg)
- **Suggested filename**: `vamonos_pancho_villa_1936.jpg`

### 4. ¡Así se quiere en Jalisco! (1942)
- **Context**: First Mexican film in color
- **Source**: [IMDb Image Gallery](https://www.imdb.com/title/tt0034475/mediaviewer/rm1377821696/)
- **Fallback**: Search "Asi se quiere en Jalisco poster" - look for man in sombrero and woman in red dress
- **Suggested filename**: `asi_se_quiere_jalisco_1942.jpg`

### 5. Pepe El Toro (1953)
- **Context**: Iconic Pedro Infante role
- **Source**: [IMDb Image Gallery](https://www.imdb.com/title/tt0046177/mediaviewer/rm1279584769/)
- **Suggested filename**: `pepe_el_toro_1953.jpg`

### 6. Birdman (2014)
- **Context**: Directed by Alejandro González Iñárritu, 4 Academy Awards
- **Source**: [Wikipedia File Page](https://en.wikipedia.org/wiki/File:Birdman_poster.jpg)
- **Suggested filename**: `birdman_2014.jpg`

### 7. Roma (2018)
- **Context**: Directed by Alfonso Cuarón, 3 Academy Awards
- **Source**: [Wikipedia File Page](https://en.wikipedia.org/wiki/File:Roma_2018_poster.png)
- **Suggested filename**: `roma_2018.png`

---

## Adding Images to Knowledge Base

After uploading an image, add the `imageUrl` property to the corresponding entry in `data/categories/pinturaCine.ts`:

```typescript
{
  id: 'PIN_HIT_002',
  // ... other properties ...
  imageUrl: 'https://storage.googleapis.com/ai-chat-assets-0942035858/assets/cinema/santa_1932.jpg',
},
```

### Entry IDs for Each Movie

| Movie | Entry ID | Subcategory |
|-------|----------|-------------|
| El Presidente (1896) | PIN_HIT_001 | Hitos del Cine |
| Santa (1932) | PIN_HIT_002 | Hitos del Cine |
| Vámonos con Pancho Villa (1936) | PIN_HIT_003 | Hitos del Cine |
| Así se quiere en Jalisco (1942) | PIN_HIT_004 | Hitos del Cine |
| Macario (1960) | PIN_HIT_005 | Hitos del Cine |
| Pepe El Toro (1953) | PIN_HIT_006 | Hitos del Cine |
| Birdman (2014) | PIN_CON_009 | Cine Contemporáneo |
| Roma (2018) | PIN_CON_010 | Cine Contemporáneo |
