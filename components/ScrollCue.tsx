"use client";

export default function ScrollCue({
  variant = "bottom", // "bottom" | "side"
  label = "Faire défiler",
}: {
  variant?: "bottom" | "side";
  label?: string;
}) {
  if (variant === "side") {
    return (
      <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 select-none">
        <div className="flex flex-col items-center gap-2 text-[11px] tracking-wide text-neutral-500">
          <span className="-rotate-90">{label}</span>
          <div className="w-px h-20 bg-neutral-300/50 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-10 bg-neutral-900/70 animate-[scrollGlow_1.4s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    );
  }

  // variant = "bottom"
  return (
    <div className="pointer-events-none absolute bottom-6 inset-x-0 flex justify-center z-40 select-none">
      <div className="flex flex-col items-center gap-2 text-[11px] tracking-wide text-neutral-300">
        <span>{label}</span>
        <div className="h-8 w-px bg-neutral-500/60 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-neutral-50/0 via-neutral-50/80 to-neutral-50/0 animate-[scrollGlow_1.6s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
