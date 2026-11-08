"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Eye } from "lucide-react";
import { BLOG_POSTS, BlogPost } from "@/data/blog";

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
  onViewAll?: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onSelectPost,
  onViewAll,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title on Left, Read More on Right */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
              LATEST NEWS & ARTICLES
            </h2>
            <div className="w-16 h-1 bg-forest-600 mt-2.5 rounded-full" />
          </div>

          <button
            onClick={onViewAll}
            className="self-start sm:self-auto bg-[#056A33] hover:bg-[#035428] text-white font-extrabold text-xs px-5 py-2.5 rounded-md transition-colors"
          >
            Read more
          </button>
        </div>

        {/* 3 Horizontal Blog Cards */}
        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="group bg-white hover:bg-slate-50/70 rounded-2xl sm:rounded-3xl border border-slate-100 p-4 sm:p-5 flex flex-col md:flex-row items-center gap-6 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              {/* Thumbnail Image */}
              <div className="w-full md:w-56 lg:w-64 h-48 md:h-36 relative rounded-xl sm:rounded-2xl overflow-hidden shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Date & Author Column */}
              <div className="flex md:flex-col items-center justify-center md:items-start shrink-0 text-center md:text-left gap-4 md:gap-1.5 md:border-r border-slate-200 md:pr-6">
                <div>
                  <span className="block font-black text-2xl sm:text-3xl text-slate-900 leading-none">
                    {post.day}
                  </span>
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    {post.monthYear}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{post.views}</span>
                  <span>•</span>
                  <span className="capitalize">{post.author.split(" ")[0]}</span>
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-1 space-y-2 text-left">
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-forest-600 transition-colors uppercase leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Green Arrow Button on the right */}
              <div className="shrink-0 self-end md:self-center">
                <div className="w-10 h-10 rounded-xl bg-[#056A33] group-hover:bg-forest-600 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
