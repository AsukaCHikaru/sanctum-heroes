#!/bin/bash

# Convert all GIF files in archive/ to JPEG using ffmpeg
# Usage: ./convert_archive_gifs.sh

ARCHIVE_DIR="archive"

# Check if archive directory exists
if [ ! -d "$ARCHIVE_DIR" ]; then
    echo "Error: Directory $ARCHIVE_DIR does not exist"
    exit 1
fi

# Check if ffmpeg is available
if ! command -v ffmpeg &> /dev/null; then
    echo "Error: ffmpeg is not installed or not in PATH"
    exit 1
fi

echo "Converting GIF files to JPEG in $ARCHIVE_DIR..."

# Find and convert all GIF files recursively
gif_count=0
converted_count=0
skipped_count=0

while IFS= read -r -d '' gif_file; do
    gif_count=$((gif_count + 1))
    
    # Get filename without extension and directory
    dir=$(dirname "$gif_file")
    basename=$(basename "$gif_file" .gif)
    output_file="${dir}/${basename}.jpg"
    
    # Skip if JPEG already exists
    if [ -f "$output_file" ]; then
        echo "Skipping: $(basename "$gif_file") -> ${basename}.jpg (already exists)"
        skipped_count=$((skipped_count + 1))
        continue
    fi
    
    echo "Converting: $gif_file -> $output_file"
    
    # Convert GIF to JPEG using ffmpeg
    if ffmpeg -i "$gif_file" -vf "select=eq(n\,0)" -q:v 2 -frames:v 1 -update 1 "$output_file" -y > /dev/null 2>&1; then
        echo "  ✓ Successfully converted"
        converted_count=$((converted_count + 1))
    else
        echo "  ✗ Failed to convert"
    fi
done < <(find "$ARCHIVE_DIR" -name "*.gif" -type f -print0)

echo ""
echo "Conversion complete!"
echo "Total GIF files found: $gif_count"
echo "Successfully converted: $converted_count"
echo "Skipped (already exists): $skipped_count"