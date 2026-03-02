'use client';

import UploadIcon from "@/components/UploadIcon";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UploadForm() {
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  async function upload(ev) {
    const files = ev.target.files;

    if (!files || files.length === 0) return;

    const file = files[0];

    // Optional: basic file validation
    if (!file.type.startsWith("video/")) {
      alert("Please upload a valid video file.");
      return;
    }

    try {
      setIsUploading(true);

      const res = await axios.postForm("/api/upload", {
        file,
      });

      const newName = res.data.newName;
      router.push("/" + newName);

    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <>
      {isUploading && (
        <div className="bg-black/80 text-white fixed inset-0 flex items-center">
          <div className="w-full text-center">
            <h2 className="text-3xl mb-4">Uploading...</h2>
            <h3>Please wait</h3>
          </div>
        </div>
      )}

      <label
        className="rounded-full py-3 px-5 inline-flex gap-2 cursor-pointer"
        style={{
          background: "#0d1127",
          border: "2px solid #5978F3ca",
          opacity: isUploading ? 0.6 : 1,
          pointerEvents: isUploading ? "none" : "auto",
        }}
      >
        <UploadIcon />
        <span>{isUploading ? "Uploading..." : "Choose File"}</span>

        <input
          onChange={upload}
          type="file"
          accept="video/*"
          className="hidden"
        />
      </label>
    </>
  );
}