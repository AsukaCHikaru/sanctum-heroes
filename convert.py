from PIL import Image
import glob
import os

for blp_file in glob.glob("*.blp") + glob.glob("*.BLP"):
    try:
        img = Image.open(blp_file)
        if img.mode in ('RGBA', 'LA', 'P'):
            img = img.convert('RGB')
        jpg_name = os.path.splitext(blp_file)[0] + '.jpg'
        img.save(jpg_name, 'JPEG', quality=95)
        print(f"Converted: {blp_file}")
    except Exception as e:
        print(f"Error with {blp_file}: {e}")