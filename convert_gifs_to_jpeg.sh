#!/bin/bash

# Convert all GIF files in src/assets/hero/ to JPEG using ffmpeg
# Usage: ./convert_gifs_to_jpeg.sh

HERO_DIR="src/assets/hero"

# Check if hero directory exists
if [ ! -d "$HERO_DIR" ]; then
    echo "Error: Directory $HERO_DIR does not exist"
    exit 1
fi

# Check if ffmpeg is available
if ! command -v ffmpeg &> /dev/null; then
    echo "Error: ffmpeg is not installed or not in PATH"
    exit 1
fi

echo "Converting GIF files to JPEG in $HERO_DIR..."

# Find and convert all GIF files
gif_count=0
converted_count=0

for gif_file in "$HERO_DIR"/*.gif; do
    # Check if any GIF files exist
    if [ ! -f "$gif_file" ]; then
        echo "No GIF files found in $HERO_DIR"
        exit 0
    fi
    
    gif_count=$((gif_count + 1))
    
    # Get filename without extension
    basename=$(basename "$gif_file" .gif)
    output_file="$HERO_DIR/${basename}.jpg"
    
    echo "Converting: $(basename "$gif_file") -> ${basename}.jpg"
    
    # Convert GIF to JPEG using ffmpeg
    if ffmpeg -i "$gif_file" -vf "select=eq(n\,0)" -q:v 2 -frames:v 1 -update 1 "$output_file" -y > /dev/null 2>&1; then
        echo "  ✓ Successfully converted"
        converted_count=$((converted_count + 1))
    else
        echo "  ✗ Failed to convert"
    fi
done

echo ""
echo "Conversion complete!"
echo "Total GIF files found: $gif_count"
echo "Successfully converted: $converted_count"