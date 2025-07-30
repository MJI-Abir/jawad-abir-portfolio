"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import React, { useState } from "react";

interface DownloadCVButtonProps {
  cvFileName: string;
}

const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({
  cvFileName = "cv_md_jawad_ul_islam_2.pdf",
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);

      // Create a relative path to the CV in the public folder
      const cvPath = `/${cvFileName}`;

      // Create a link element
      const link = document.createElement("a");
      link.href = cvPath;
      link.download = cvFileName;
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Clean up
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading CV:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`mt-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition duration-300 flex items-center justify-center`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDownloading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Downloading...
        </>
      ) : (
        <>
          Download Resume
          <Download className="ml-2 h-5 w-5" />
        </>
      )}
    </motion.button>
  );
};

export default DownloadCVButton;
