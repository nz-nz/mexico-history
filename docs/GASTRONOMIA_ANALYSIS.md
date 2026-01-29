# Gastronomia.ts Image Analysis Summary

## Problem Discovery

✅ **All 46 images in gastronomia.ts are broken** (404 errors from GCS)

```
https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/*.jpg
```

## Image Breakdown by Category

### Platos Típicos (8 dishes)
1. **Mole** - Classic complex sauce
2. **Chiles en Nogada** - Stuffed peppers
3. **Tacos** - Tortilla-based
4. **Tamales** - Corn dough wrapped
5. **Pozole** - Corn broth
6. **Birria** - Meat stew
7. **Garnachas** - Fried dough snacks
8. **Pambazo** - Sauce-soaked sandwich

### Platos Regionales (13 dishes)
9. **Cochinita Pibil** - Yucatecan pork
10. **Tlayudas** - Oaxacan giant tortilla
11. **Machaca** - Northern dried meat
12. **Cabrito** - Roasted goat
13. **Papadzules** - Yucatecan egg tortillas
14. **Huevos Motuleños** - Yucatecan eggs
15. **Salbutes** - Fried yucatecan tortillas
16. **Torta Ahogada** - Jaliscan drowned sandwich
17. **Pescado Zarandeado** - Grilled marinated fish
18. **Pan de Muerto** - Day of Dead bread (region: CDMX)
19. **Guajolote** - Prehispanic turkey
20. **[2 more regional dishes]**

### Bebidas (7 drinks)
21. **Tequila** - Blue agave spirit
22. **Mezcal** - Agave spirit (Oaxaca)
23. **Pulque** - Fermented agave (prehispanic)
24. **Champurrado** - Chocolate drink
25. **Agua de Jamaica** - Hibiscus drink
26. **Tejuino** - Fermented corn drink
27. **[1 more beverage]**

### Ingredientes (10 ingredients)
28. **Maíz** - Corn (staple)
29. **Chile** - Peppers (staple)
30. **Cacao** - Chocolate
31. **Frijol** - Beans (staple)
32. **Nopal** - Cactus
33. **Aguacate** - Avocado
34. **Jitomate** - Tomato
35. **Vainilla** - Vanilla
36. **Calabaza** - Squash
37. **Miel y Aguamiel** - Honey/agave nectar

### Dulces (3 sweets)
38. **Cajeta** - Goat milk caramel
39. **Churros** - Fried pastry
40. **Conchas** - Sweet shell bread

## Snapex Extraction Results

Ran proof-of-concept extractions for 4 signature dishes:

| Dish | Search Query | Detections | Best Confidence | Status |
|------|-------------|-----------|-----------------|--------|
| **Mole** | `mole+poblano+recipe+image` | 27 | 0.528 | ✓ Ready |
| **Tacos** | `tacos+mexicanos+recipe` | 58 | High variation | ✓ Ready |
| **Tequila** | `tequila+bottle+glass` | 49 | High variation | ✓ Ready |
| **Chiles en Nogada** | `chiles+en+nogada` | 42 | Multiple options | ✓ Ready |

**Selection Criteria Applied:**
- Confidence threshold: > 0.3 (0.25 minimum)
- Bounds: Avoid full-page (~1270x700), prefer 100-300px range
- Label match: "mole sauce", "tacos", etc.

**Sample Winners:**
```
Mole:
  - Region 001: confidence=0.528 ✓ (BEST)
  - Region 002: confidence=0.441
  - Region 007: confidence=0.357

Tacos:
  - Multiple high-confidence regions available

Tequila:
  - 49 regions extracted, filtering for bottles/drinks

Chiles en Nogada:
  - 42 regions, good variety of presentation styles
```

## Implementation Plan

📋 **Full plan saved to:** `docs/plans/2026-01-29-gastronomia-image-fix.md`

**Phases:**
1. **Extract Phase** (38 tasks) - One snapex extraction + GCS upload per dish
2. **Update Phase** (3 tasks) - Batch update all URLs in gastronomia.ts
3. **Test Phase** (1 task) - Verify images display in browser
4. **Verification** (1 task) - Final checks and cleanup

**Total estimated effort:** 4-6 hours
**Status:** Ready for `executing-plans` skill

## Quick Reference: All 46 Dishes

```typescript
// Current broken URLs:
https://storage.googleapis.com/ai-chat-assets-0942035858/gastronomia/{id}.jpg

// Where {id} = one of:
mole, chiles_en_nogada, tacos, tamales, pozole, birria, garnachas, pambazo,
guajolote, cochinita_pibil, tlayudas, machaca, cabrito, papadzules,
huevos_motulenos, salbutes, torta_ahogada, pescado_zarandeado, pan_de_muerto,
tequila, mezcal, pulque, champurrado, agua_jamaica, tejuino,
maiz, chile, cacao, frijol, nopal, aguacate, jitomate, vainilla, calabaza,
aguamiel, cajeta, churros, conchas, [+ 8 more not yet named]
```

## Next Steps

**Option 1: Subagent-Driven (This Session)**
- Fresh subagent per task (1-2 at a time)
- Review between batches
- Fastest iteration for issues

**Option 2: Parallel Session (Separate)**
- Open new terminal with plan file
- Use `executing-plans` skill
- Batch execution with checkpoints

**Recommended:** Subagent-Driven for this complex image extraction work (allows real-time selection of best images)
