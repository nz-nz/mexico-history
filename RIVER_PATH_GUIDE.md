# River Path Visualization Guide

This guide explains how to mark full river lengths on the map for the Water Bodies game.

## Current Implementation

The map game uses **Leaflet Polylines** to display river paths. River data is defined in `constants.ts` with coordinates that trace the river's course.

### Data Structure

```typescript
export interface RiverPath {
  coordinates: [number, number][]; // Array of [lat, lng] points along the river
  width?: number; // Visual width for rendering (default: 2)
}

export interface WaterBodyLocation extends MapLocation {
  riverPath?: RiverPath;
  // ... other water body properties
}
```

### Example: Río Bravo

```typescript
{
  id: 'rio_bravo',
  name: 'Río Bravo',
  riverPath: {
    coordinates: [
      [31.78, -106.63], // El Paso area
      [29.37, -100.90], // Middle section
      [26.07, -98.30],  // Lower valley
      [25.96, -97.15]   // Mouth at Gulf
    ],
    width: 3
  }
}
```

## Methods for Marking River Paths

### 1. **Manual Coordinate Collection** (Current Method)
- Use Google Maps or OpenStreetMap to identify key points along the river
- Right-click on each point to copy latitude/longitude
- Add coordinates to the `riverPath.coordinates` array
- **Pros**: Precise control, lightweight data
- **Cons**: Time-consuming for long rivers

### 2. **Interactive Drawing Tool** (Recommended Enhancement)
Create an admin mode where you can:
- Click on the map to add waypoints along the river
- Edit/delete existing waypoints
- Export the coordinate array to clipboard
- Save to JSON file

**Implementation idea:**
```typescript
// Add to MapGame.tsx
const [editMode, setEditMode] = useState(false);
const [riverWaypoints, setRiverWaypoints] = useState<[number, number][]>([]);

// In MapContainer, add click handler when in edit mode
useMapEvents({
  click: (e) => {
    if (editMode) {
      setRiverWaypoints(prev => [...prev, [e.latlng.lat, e.latlng.lng]]);
    }
  }
});
```

### 3. **GeoJSON Import** (Advanced)
- Download river data from OpenStreetMap using Overpass API
- Convert GeoJSON to coordinate arrays
- Simplify paths using algorithms like Douglas-Peucker

**Example Overpass Query:**
```
[out:json];
way["waterway"="river"]["name"="Río Bravo"];
out geom;
```

### 4. **Trace from Satellite Imagery**
- Overlay satellite/terrain tiles on the map
- Manually trace the river course with a drawing tool
- Extract coordinates from the drawn path

## Rendering Options

### Current: Polyline (Lines)
```tsx
<Polyline
  positions={coordinates}
  pathOptions={{
    color: '#0ea5e9',
    weight: 2,
    opacity: 0.7
  }}
/>
```

### Alternative: Polygon (River with Width)
For a more realistic river representation with variable width:

```tsx
<Polygon
  positions={generateRiverPolygon(coordinates, widthInKm)}
  pathOptions={{
    fillColor: '#0ea5e9',
    fillOpacity: 0.4,
    color: '#0369a1',
    weight: 1
  }}
/>
```

### Advanced: Canvas Layer
For complex river networks with many tributaries, use a custom Canvas layer for better performance.

## Best Practices

1. **Point Density**: 
   - Use 5-10 points for short rivers
   - Use 10-20 points for long rivers like Río Bravo
   - Add more points at bends/curves

2. **Accuracy vs. Performance**:
   - Don't overdo it - 20-30 points max per river
   - Simplify straight sections to 2 points
   - Focus detail on recognizable features

3. **Visual Hierarchy**:
   - Major rivers: `width: 3`
   - Regular rivers: `width: 2`
   - Tributaries: `width: 1`

4. **Color Coding**:
   - Active rivers: Blue (`#0ea5e9`)
   - Border rivers: Purple (`#a855f7`)
   - Historical/dry rivers: Gray (`#9ca3af`)

## Recommended Workflow

1. **Research**: Use Google Maps satellite view to see actual river course
2. **Mark Key Points**: Identify source, major bends, confluences, and mouth
3. **Add Coordinates**: Click on map or copy from Google Maps
4. **Test**: Verify the path looks correct on the game map
5. **Adjust**: Add/remove points as needed for accuracy

## Future Enhancements

- [ ] Admin/edit mode for drawing rivers directly on the map
- [ ] Import from GeoJSON or KML files
- [ ] Animated flow direction indicators
- [ ] Variable width based on river flow data
- [ ] Tributary support (branching paths)
- [ ] Seasonal variation display (wet/dry seasons)

## Tools & Resources

- **Google Maps**: [maps.google.com](https://maps.google.com)
- **OpenStreetMap**: [openstreetmap.org](https://www.openstreetmap.org)
- **Overpass Turbo**: [overpass-turbo.eu](https://overpass-turbo.eu)
- **GeoJSON.io**: [geojson.io](http://geojson.io) - Draw and export paths
- **Leaflet Draw**: Plugin for interactive drawing

## Example: Adding a New River

```typescript
// In constants.ts, add to MAP_WATER_BODIES:
{
  id: 'rio_example',
  name: 'Río Example',
  region: 'Estado Example',
  lat: 20.0,  // Approximate center for marker
  lng: -100.0,
  tags: ['Major River'],
  description: 'Important river in central Mexico.',
  riverPath: {
    coordinates: [
      [20.5, -100.2],  // Source
      [20.3, -100.1],  // Middle
      [20.0, -99.9],   // Lower
      [19.8, -99.8]    // Mouth
    ],
    width: 2
  }
}
```

The path will automatically render when the water body is found in the game!
