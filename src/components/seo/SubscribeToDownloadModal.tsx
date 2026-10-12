import React, { useState } from "react";
import { Youtube, CheckCircle2, Download, Lock, ExternalLink, X, Sparkles } from "lucide-react";
import CyanButton from "@/components/CyanButton";

interface SubscribeToDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  downloadUrl: string;
  downloadLabel?: string;
  channelUrl: string;
  channelName?: string;
  toolName?: string;
}

export default function SubscribeToDownloadModal({
  isOpen,
  onClose,
  downloadUrl,
  downloadLabel = "DIGI LABS Setup (.exe 253MB)",
  channelUrl,
  channelName = "DigiFormation Official",
  toolName = "DIGI LABS",
}: SubscribeToDownloadModalProps) {
  const [hasVisitedChannel, setHasVisitedChannel] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  if (!isOpen) return null;

  const handleSubscribeClick = () => {
    // Open the YouTube channel with ?sub_confirmation=1 trigger in a new tab
    const subscribeLink = channelUrl.includes("?") 
      ? `${channelUrl}&sub_confirmation=1` 
      : `${channelUrl}?sub_confirmation=1`;
    window.open(subscribeLink, "_blank", "noopener,noreferrer");
    setHasVisitedChannel(true);
  };

  const handleConfirmSubscribe = () => {
    setIsUnlocked(true);
    // Automatically trigger the file download
    window.location.href = downloadUrl;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-red-500/30 bg-[#0B0A12] p-6 sm:p-8 shadow-[0_0_60px_rgba(239,68,68,0.25)] text-center">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-zinc-400 hover:bg-white/10 hover:text-white transition"
        >
          <X size={18} />
        </button>

        {/* Header Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/10 border border-red-500/30 text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
          <Youtube size={32} />
        </div>

        {/* Title & Tagline */}
        <h3 className="mt-5 font-display text-xl sm:text-2xl font-bold text-white">
          Subscribe to Unlock Download
        </h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-zinc-300">
          {toolName} is 100% free forever! To support our open-source projects, please subscribe to our YouTube channel to unlock the download.
        </p>

        {/* Step Indicator */}
        <div className="mt-6 space-y-3 text-left">
          {/* Step 1: Subscribe */}
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                1
              </span>
              <div>
                <p className="font-display text-xs font-bold text-white">Subscribe on YouTube</p>
                <p className="text-[11px] text-zinc-400">{channelName}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleSubscribeClick}
              className="inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-1.5 font-mono text-xs font-bold text-white shadow-md hover:bg-red-500 transition"
            >
              <span>Subscribe</span>
              <ExternalLink size={12} />
            </button>
          </div>

          {/* Step 2: Unlock Download */}
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
            <div className="flex items-center gap-3">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white transition ${
                  hasVisitedChannel ? "bg-emerald-600" : "bg-zinc-700"
                }`}
              >
                2
              </span>
              <div>
                <p className="font-display text-xs font-bold text-white">Download Ready</p>
                <p className="text-[11px] text-zinc-400">{downloadLabel}</p>
              </div>
            </div>
            {isUnlocked ? (
              <span className="flex items-center gap-1 font-mono text-xs font-bold text-emerald-400">
                <CheckCircle2 size={14} /> Unlocked
              </span>
            ) : (
              <Lock size={15} className="text-zinc-500" />
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          {!isUnlocked ? (
            <button
              type="button"
              disabled={!hasVisitedChannel}
              onClick={handleConfirmSubscribe}
              className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 font-mono text-sm font-bold transition shadow-lg ${
                hasVisitedChannel
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 hover:brightness-110 shadow-[0_0_30px_rgba(16,185,129,0.3)] cursor-pointer"
                  : "bg-white/10 text-zinc-500 cursor-not-allowed border border-white/5"
              }`}
            >
              <CheckCircle2 size={16} />
              <span>{hasVisitedChannel ? "I Subscribed — Start Download" : "Subscribe Above First"}</span>
            </button>
          ) : (
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 font-mono text-sm font-bold text-slate-950 hover:bg-emerald-400 transition"
            >
              <Download size={16} />
              <span>Download Starting (Click if not started)</span>
            </a>
          )}
        </div>

        <p className="mt-4 text-[11px] text-zinc-500">
          Strictly No Resale • 100% Free For Personal &amp; Agency Systems
        </p>
      </div>
    </div>
  );
}
