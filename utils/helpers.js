function isColorDark(color) {
  // Check for valid hex color (including # prefix)
  const validHex = /^#?([0-9A-Fa-f]{3}){1,2}$/i.test(color);
  if (!validHex) {
    throw new Error(
      "Invalid color format. Please provide a valid hex color code."
    );
  }

  // Remove # prefix if present
  const rgb = color.startsWith("#") ? color.slice(1) : color;

  // Convert hex to RGB values (0-255)
  const r = parseInt(rgb.substring(0, 2), 16);
  const g = parseInt(rgb.substring(2, 4), 16);
  const b = parseInt(rgb.substring(4, 6), 16);

  // Calculate perceived luminosity (human eye perception)
  const luminosity = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Threshold for dark/light color
  const threshold = 128; // Adjust this value based on your desired sensitivity

  return luminosity < threshold; // True if dark, False if light
}

export { isColorDark };
