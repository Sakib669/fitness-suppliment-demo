"use client";

import React from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-200">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10 aspect-video">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>

        <video
          autoPlay
          controls
          loop
          className="w-full h-full object-cover"
          poster="/images/banner/gym-athlete.jpg"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  );
};
