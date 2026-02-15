"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  achievements,
  Achievement,
  AchievementCategory,
} from "../data/achievements";

const categoryConfig: Record<
  AchievementCategory,
  { label: string; accent: string; tag: string }
> = {
  hackathon: {
    label: "Hackathon",
    accent: "text-amber-500 dark:text-amber-400",
    tag: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800",
  },
  academic: {
    label: "Academic",
    accent: "text-blue-500 dark:text-blue-400",
    tag: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800",
  },
  athletic: {
    label: "Athletic",
    accent: "text-emerald-500 dark:text-emerald-400",
    tag: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800",
  },
  certification: {
    label: "Certification",
    accent: "text-violet-500 dark:text-violet-400",
    tag: "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-800",
  },
  publication: {
    label: "Publication",
    accent: "text-rose-500 dark:text-rose-400",
    tag: "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800",
  },
};

// ─── Featured (hero) card ───────────────────────────────────────────────────
const FeaturedCard = ({ a }: { a: Achievement }) => {
  const cfg = categoryConfig[a.category];
  return (
    <motion.div
      className="relative col-span-1 md:col-span-2 bg-blue-950 dark:bg-gray-950 rounded-3xl overflow-hidden p-8 md:p-12 flex flex-col justify-between min-h-[320px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Background texture number */}
      <span className="absolute -right-4 -top-6 text-[160px] font-black text-white/5 select-none leading-none pointer-events-none">
        №1
      </span>

      <div className="flex flex-col gap-6 relative z-10">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-white/40">
            Featured Achievement
          </span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
            {cfg.label}
          </span>
        </div>

        <div>
          <p className={`text-5xl md:text-7xl font-black ${cfg.accent} mb-3`}>
            {a.highlight}
          </p>
          <h3 className="text-white text-xl md:text-2xl font-bold leading-snug">
            {a.title}
          </h3>
        </div>

        <p className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed">
          {a.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-8 relative z-10">
        <span className="text-white/30 text-xs font-medium">
          {a.organization} · {a.date}
        </span>
        {a.url && (
          <Link
            href={a.url}
            target="_blank"
            className="flex items-center gap-1 text-xs text-white/50 hover:text-white transition-colors"
          >
            View <ExternalLink className="h-3 w-3" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

// ─── Small editorial card ───────────────────────────────────────────────────
const SmallCard = ({ a, index }: { a: Achievement; index: number }) => {
  const cfg = categoryConfig[a.category];
  return (
    <motion.div
      className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg dark:hover:shadow-gray-900 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
    >
      <div className="flex items-start justify-between gap-2">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cfg.tag}`}
        >
          {cfg.label}
        </span>
        <span className={`text-2xl font-black ${cfg.accent} leading-none`}>
          {a.highlight}
        </span>
      </div>

      <div>
        <h3 className="text-gray-900 dark:text-white font-semibold text-sm leading-snug mb-1">
          {a.title}
        </h3>
        <p className="text-gray-400 dark:text-gray-500 text-xs">
          {a.organization} · {a.date}
        </p>
      </div>

      <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed flex-1">
        {a.description}
      </p>

      {a.url && (
        <Link
          href={a.url}
          target="_blank"
          className={`flex items-center gap-1 text-xs font-medium ${cfg.accent} hover:underline w-fit`}
        >
          View <ExternalLink className="h-3 w-3" />
        </Link>
      )}
    </motion.div>
  );
};

// ─── Section ────────────────────────────────────────────────────────────────
export const AchievementsSection = () => {
  const featured = achievements.find((a) => a.featured)!;
  const rest = achievements.filter((a) => !a.featured);

  return (
    <motion.section
      className="min-h-screen bg-white dark:bg-gray-800 py-20 flex flex-col justify-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto px-6">
        {/* Editorial header */}
        <motion.div
          className="max-w-6xl mx-auto mb-14 flex flex-col md:flex-row md:items-end gap-4 md:gap-0 justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500 mb-2">
              — Selected Highlights
            </p>
            <h2 className="about-title text-4xl md:text-5xl font-bold">
              Achievements
            </h2>
          </div>
          <p className="text-gray-400 dark:text-gray-500 text-sm max-w-xs text-right hidden md:block">
            Competitions, research, certifications & beyond
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {/* Featured card spans 2 cols */}
          <FeaturedCard a={featured} />

          {/* First small card fills col 3 */}
          <SmallCard a={rest[0]} index={0} />

          {/* Remaining small cards fill next row */}
          {rest.slice(1).map((a, i) => (
            <SmallCard key={a.id} a={a} index={i + 1} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
