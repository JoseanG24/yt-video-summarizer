"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const MainPage = () => {
  const [videoLink, setVideoLink] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = () => {
    setSummary("This is a summary of the video based on AI analysis...");
  };

  return (
    <div className="relative flex min-h-screen bg-gray-900 text-white p-8">
      {/* Video Link Input */}
      <div className="w-1/2 flex flex-col items-center justify-center p-6 border-r border-gray-700">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-4"
        >
          Paste Your Video Link
        </motion.h2>
        <motion.input
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          type="text"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-red-500 focus:border-red-500"
          placeholder="Enter video URL..."
        />
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={handleSummarize}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
        >
          Summarize Video
        </motion.button>
      </div>

      {/* Video Summary Display */}
      <div className="w-1/2 flex flex-col items-center justify-center p-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bo ld mb-4"
        >
          Video Summary
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-gray-400 text-center"
        >
          {summary || "The summary will appear here once processed."}
        </motion.p>
      </div>
    </div>
  );
};

export default MainPage;
