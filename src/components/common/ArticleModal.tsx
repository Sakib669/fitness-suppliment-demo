"use client";

import React from "react";
import Image from "next/image";
import { X, Calendar, User, Eye, Clock } from "lucide-react";
import { BlogPost } from "@/data/blog";

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12 flex justify-center items-center animate-in fade-in duration-200">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 shadow-md transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-full h-64 sm:h-80 relative">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-3 text-xs font-semibold mb-2 text-emerald-300">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {post.monthYear}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" /> {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>
            <h2 className="font-black text-xl sm:text-2xl text-white leading-tight">
              {post.title}
            </h2>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold text-forest-700 bg-forest-50 px-3 py-1 rounded-full border border-forest-100"
              >
                #{tag}
              </span>
            ))}
          </div>

          <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-normal">
            {post.excerpt}
          </p>

          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            {post.content}
          </p>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" /> {post.views} athletes read this
            </span>
            <button
              onClick={onClose}
              className="bg-slate-900 hover:bg-forest-600 text-white font-bold px-4 py-2 rounded-xl transition-colors"
            >
              Back to Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
