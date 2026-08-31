import os
import shutil
import uuid
import json
from datetime import datetime

digi_collection = r"C:\Users\user\Documents\Default Project\Digi-Collection"

ready_tools = [
    {
        "slug": "kdenlive",
        "source_file": os.path.join(digi_collection, "31-Digi-Kdenlive-Video", "Kdenlive-Setup.exe"),
        "filename": "Kdenlive-Setup.exe",
        "asset_json": "kdenlive-setup.exe.asset.json",
        "route_file": "src/routes/open-source.kdenlive.tsx",
    },
    {
        "slug": "shotcut",
        "source_file": os.path.join(digi_collection, "32-Digi-Shotcut-Studio", "Shotcut-Setup.exe"),
        "filename": "Shotcut-Setup.exe",
        "asset_json": "shotcut-setup.exe.asset.json",
        "route_file": "src/routes/open-source.shotcut.tsx",
    },
    {
        "slug": "facefusion",
        "source_file": os.path.join(digi_collection, "34-Digi-FaceFusion-AI", "facefusion-master.zip"),
        "filename": "facefusion-master.zip",
        "asset_json": "facefusion-master.zip.asset.json",
        "route_file": "src/routes/open-source.facefusion.tsx",
    },
]

for t in ready_tools:
    src_path = t["source_file"]
    if not os.path.exists(src_path):
        print("Not found:", src_path)
        continue
    size = os.path.getsize(src_path)
    if size == 0:
        print("File is 0 bytes (in progress):", src_path)
        continue

    asset_id = str(uuid.uuid4())
    public_dest_dir = os.path.join("public", "__l5e", "assets-v1", asset_id)
    os.makedirs(public_dest_dir, exist_ok=True)
    public_dest_file = os.path.join(public_dest_dir, t["filename"])
    shutil.copy2(src_path, public_dest_file)

    src_assets_file = os.path.join("src", "assets", t["filename"])
    shutil.copy2(src_path, src_assets_file)

    asset_meta = {
        "version": 1,
        "asset_id": asset_id,
        "project_id": "588214df-1d5e-4126-93c8-5d249b243a65",
        "url": f"/__l5e/assets-v1/{asset_id}/{t['filename']}",
        "r2_key": f"a/v1/588214df-1d5e-4126-93c8-5d249b243a65/{asset_id}/{t['filename']}",
        "original_filename": t["filename"],
        "size": size,
        "content_type": "application/octet-stream",
        "created_at": datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ"),
    }

    asset_json_path = os.path.join("src", "assets", t["asset_json"])
    with open(asset_json_path, "w", encoding="utf-8") as f:
        json.dump(asset_meta, f, indent=2)

    print(f"Processed {t['slug']}: size={size} bytes -> {asset_json_path} (URL: {asset_meta['url']})")
