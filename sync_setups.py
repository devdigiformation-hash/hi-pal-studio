import os
import shutil
import uuid
import json
from datetime import datetime

digi_collection = r"C:\Users\user\Documents\Default Project\Digi-Collection"
final_builds = os.path.join(digi_collection, "00-DIGIFORMATION-FINAL-BUILDS")

items_to_sync = [
    # 1. Kdenlive
    {
        "slug": "kdenlive",
        "source_file": os.path.join(final_builds, "Kdenlive-Setup.exe"),
        "filename": "Kdenlive-Setup.exe",
        "asset_json": "kdenlive-setup.exe.asset.json",
    },
    # 2. Shotcut
    {
        "slug": "shotcut",
        "source_file": os.path.join(final_builds, "Shotcut-Setup.exe"),
        "filename": "Shotcut-Setup.exe",
        "asset_json": "shotcut-setup.exe.asset.json",
    },
    # 3. Audacity
    {
        "slug": "audacity",
        "source_file": os.path.join(final_builds, "Audacity-Setup.exe"),
        "filename": "Audacity-Setup.exe",
        "asset_json": "audacity-setup.exe.asset.json",
    },
    # 4. FaceFusion Studio EXE & ZIP
    {
        "slug": "facefusion-exe",
        "source_file": os.path.join(final_builds, "FaceFusion-Studio.exe"),
        "filename": "FaceFusion-Studio.exe",
        "asset_json": "facefusion-studio.exe.asset.json",
    },
    {
        "slug": "facefusion-zip",
        "source_file": os.path.join(digi_collection, "34-Digi-FaceFusion-AI", "facefusion-master.zip"),
        "filename": "facefusion-master.zip",
        "asset_json": "facefusion-master.zip.asset.json",
    },
    # 5. Deep Live Cam Studio EXE & ZIP
    {
        "slug": "deep-live-cam-exe",
        "source_file": os.path.join(final_builds, "Deep-Live-Cam-Studio.exe"),
        "filename": "Deep-Live-Cam-Studio.exe",
        "asset_json": "deep-live-cam-studio.exe.asset.json",
    },
    {
        "slug": "deep-live-cam-zip",
        "source_file": os.path.join(digi_collection, "35-Digi-Deep-Live-Cam", "deep-live-cam-main.zip"),
        "filename": "deep-live-cam-main.zip",
        "asset_json": "deep-live-cam-main.zip.asset.json",
    },
    # 6. OpenCut Studio EXE & ZIP
    {
        "slug": "opencut-exe",
        "source_file": os.path.join(final_builds, "OpenCut-Studio.exe"),
        "filename": "OpenCut-Studio.exe",
        "asset_json": "opencut-studio.exe.asset.json",
    },
    {
        "slug": "opencut-zip",
        "source_file": os.path.join(digi_collection, "36-Digi-OpenCut-Social", "opencut-main.zip"),
        "filename": "opencut-main.zip",
        "asset_json": "opencut-main.zip.asset.json",
    },
]

for t in items_to_sync:
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
        "created_at": datetime.now().strftime("%Y-%m-%dT%H:%M:%SZ"),
    }

    asset_json_path = os.path.join("src", "assets", t["asset_json"])
    with open(asset_json_path, "w", encoding="utf-8") as f:
        json.dump(asset_meta, f, indent=2)

    print(f"Processed {t['slug']}: size={size} bytes -> {asset_json_path} (URL: {asset_meta['url']})")
