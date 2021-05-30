function areaAndSurface(width, height, depth) {
  const surfaceArea = 2 * (width * height + height * depth + width * depth);
  const volume = width * height * depth;
  let areaVolumeArray = [surfaceArea, volume];
  return areaVolumeArray;
}

module.exports = areaAndSurface