"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function ResumeUploader({
  onUpload,
}: {
  onUpload: (file: File) => void;
}) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles[0]) {
        onUpload(acceptedFiles[0]);
      }
    },
    [onUpload]
  );

  const { getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "application/pdf": [".pdf"],
      },
      multiple: false,
      onDrop,
    });

  return (
    <div
      {...getRootProps()}
      className="rounded-xl border border-dashed border-cyan-500 p-8 text-center cursor-pointer"
    >
      <input {...getInputProps()} />

      <p className="text-cyan-400">
        Upload Resume PDF
      </p>
    </div>
  );
}