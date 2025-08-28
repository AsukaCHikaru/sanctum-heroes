#!/bin/bash

# Source and destination directories
SOURCE_DIR="archive"
DEST_DIR="archive_utf8"

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: Source directory '$SOURCE_DIR' does not exist."
    exit 1
fi

# Create destination directory if it doesn't exist
if [ ! -d "$DEST_DIR" ]; then
    echo "Creating destination directory: $DEST_DIR"
    mkdir -p "$DEST_DIR"
fi

# Counter for processed files
success_count=0
error_count=0
total_count=0

# Process each .htm file
echo "Starting conversion from big5 to utf8..."
echo "========================================="

# Create a temporary file to store results
temp_log=$(mktemp)

# Find all .htm files in the archive directory
find "$SOURCE_DIR" -name "*.htm" | while IFS= read -r file; do
    ((total_count++))
    
    # Get the relative path from the source directory
    relative_path="${file#$SOURCE_DIR/}"
    
    # Construct the destination file path
    dest_file="$DEST_DIR/$relative_path"
    
    # Create the destination directory structure
    dest_dir=$(dirname "$dest_file")
    mkdir -p "$dest_dir"
    
    # Try to detect file encoding
    detected_encoding=$(file -b --mime-encoding "$file" 2>/dev/null)
    
    echo -n "Converting: $file -> $dest_file ... "
    
    # Try different encoding options
    conversion_success=false
    
    # First try big5
    if iconv -f big5 -t utf8 "$file" > "$dest_file" 2>/dev/null; then
        echo "OK (from big5)"
        ((success_count++))
        conversion_success=true
    # Then try cp950 (another variant of big5)
    elif iconv -f cp950 -t utf8 "$file" > "$dest_file" 2>/dev/null; then
        echo "OK (from cp950)"
        ((success_count++))
        conversion_success=true
    # Try gb18030 (which includes big5)
    elif iconv -f gb18030 -t utf8 "$file" > "$dest_file" 2>/dev/null; then
        echo "OK (from gb18030)"
        ((success_count++))
        conversion_success=true
    # Try the detected encoding if it's not unknown
    elif [ "$detected_encoding" != "unknown-8bit" ] && [ "$detected_encoding" != "binary" ] && iconv -f "$detected_encoding" -t utf8 "$file" > "$dest_file" 2>/dev/null; then
        echo "OK (from $detected_encoding)"
        ((success_count++))
        conversion_success=true
    # If all else fails, try to copy as-is if it's already utf-8 or ascii
    elif [ "$detected_encoding" = "utf-8" ] || [ "$detected_encoding" = "us-ascii" ]; then
        cp "$file" "$dest_file"
        echo "OK (already $detected_encoding, copied as-is)"
        ((success_count++))
        conversion_success=true
    else
        echo "ERROR"
        echo "  Failed to convert: $file (detected as: $detected_encoding)"
        ((error_count++))
        
        # Try to get more details about the error
        error_msg=$(iconv -f big5 -t utf8 "$file" 2>&1)
        echo "  Error details: $error_msg"
    fi
    
    # Save results to temp file
    echo "$total_count $success_count $error_count" > "$temp_log"
done

# Fix charset declarations in HTML files
echo ""
echo "Updating charset declarations in HTML files..."
find "$DEST_DIR" -name "*.htm" | while IFS= read -r file; do
    # Update charset from big5 to utf-8 in meta tags
    sed -i '' 's/charset=big5/charset=utf-8/gi' "$file" 2>/dev/null
    # Also update any other common big5 charset variations
    sed -i '' 's/charset=cp950/charset=utf-8/gi' "$file" 2>/dev/null
    sed -i '' 's/charset=gb18030/charset=utf-8/gi' "$file" 2>/dev/null
done

# Read final counts from temp file
if [ -f "$temp_log" ]; then
    read total_count success_count error_count < "$temp_log"
    rm "$temp_log"
fi

echo "========================================="
echo "Conversion completed!"
echo "Total files found: $total_count"
echo "Successfully converted: $success_count"
if [ $error_count -gt 0 ]; then
    echo "Errors encountered: $error_count"
fi
echo "Converted files saved to: $DEST_DIR/"
