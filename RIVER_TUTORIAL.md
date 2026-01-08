# Quick Tutorial: Adding River Paths

## Step-by-Step Example: Río Grijalva

### Step 1: Find the River on Google Maps
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for "Río Grijalva, Mexico"
3. Switch to Satellite view for better visibility

### Step 2: Identify Key Points
Trace the river from source to mouth and mark these points:
- **Source/Upper section** (mountains)
- **Major bends** 
- **Cities along the river**
- **Confluence with tributaries**
- **Mouth** (where it enters sea/lake)

### Step 3: Get Coordinates
For each point:
1. Right-click on that location
2. Click the coordinates that appear (e.g., "17.5423, -92.8234")
3. They'll be copied to clipboard
4. Paste into a text file

### Step 4: Format as Array
Convert to TypeScript format:

```typescript
riverPath: {
  coordinates: [
    [17.54, -93.04],  // Upper Grijalva (Chiapas highlands)
    [17.25, -92.80],  // Middle section
    [17.83, -92.63],  // Chiapa de Corzo area
    [18.01, -92.93],  // Near Villahermosa
    [18.59, -92.48]   // Mouth (Tabasco coast)
  ],
  width: 2
}
```

### Step 5: Add to constants.ts

Find the river in `MAP_WATER_BODIES` and add the `riverPath`:

```typescript
{
  id: 'rio_grijalva',
  name: 'Río Grijalva',
  region: 'Chiapas - Tabasco',
  lat: 17.5,
  lng: -92.5,
  tags: ['Major River', 'South'],
  description: 'Río importante del sureste de México.',
  riverPath: {    // ← ADD THIS
    coordinates: [
      [17.54, -93.04],
      [17.25, -92.80],
      [17.83, -92.63],
      [18.01, -92.93],
      [18.59, -92.48]
    ],
    width: 2
  }
}
```

### Step 6: Test
1. Run the app: `npm run dev`
2. Play the Water Bodies game
3. Find "Río Grijalva"
4. Blue line should appear showing the full river!

## Pro Tips

### How Many Points?
- **Short rivers** (< 200 km): 3-5 points
- **Medium rivers** (200-500 km): 5-10 points  
- **Long rivers** (> 500 km): 10-20 points
- **Río Bravo** is ~3000 km, only uses 4 points!

### Precision
- 2 decimal places: ~1 km precision ✅ Good enough
- 4 decimal places: ~10 m precision (overkill for this)
- Example: `[17.54, -92.80]` vs `[17.5423, -92.8034]`

### Width Guidelines
```typescript
width: 1  // Small rivers, tributaries
width: 2  // Standard rivers (default)
width: 3  // Major rivers (Bravo, Lerma, Balsas)
```

## Quick Reference: Rivers Still Needing Paths

Rivers without paths yet (you can add them!):
- ⬜ Río Sonora
- ⬜ Río Conchos  
- ⬜ Río Nazas
- ⬜ Río Papaloapan
- ⬜ Río Grijalva
- ⬜ Río Usumacinta
- ⬜ Río Suchiate
- ⬜ Río Hondo

Already have paths:
- ✅ Río Bravo
- ✅ Río Colorado
- ✅ Río Lerma
- ✅ Río Balsas

## Alternative: Use geojson.io

1. Go to [geojson.io](http://geojson.io)
2. Draw a line along the river
3. Copy the coordinates from the JSON output
4. Reformat as TypeScript array

**Example GeoJSON output:**
```json
{
  "type": "LineString",
  "coordinates": [
    [-92.80, 17.54],  // Note: [lng, lat] in GeoJSON
    [-92.63, 17.83],
    [-92.48, 18.59]
  ]
}
```

**Convert to our format** (swap to [lat, lng]):
```typescript
coordinates: [
  [17.54, -92.80],
  [17.83, -92.63],
  [18.59, -92.48]
]
```

## Common Issues

### River doesn't show
- Check that `riverPath` is inside the correct water body object
- Verify you're using `[lat, lng]` not `[lng, lat]`
- Make sure the river ID exists in game

### Path looks weird
- Too few points on curvy sections - add more
- Coordinates might be swapped (lat/lng vs lng/lat)

### Performance issues
- If you add 100+ points, the map may lag
- Simplify: keep only major bends and endpoints

---

**That's it!** Start with one river, test it, then add more. Each river takes ~2-5 minutes to trace and add.
