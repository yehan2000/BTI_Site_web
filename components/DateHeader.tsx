"use client";

import { useMemo, useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

// Si tu as shadcn/ui :
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

function addDays(d: Date, days: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + days);
  return x;
}
function isSameDay(a: Date, b: Date) {
  return a.toDateString() === b.toDateString();
}

export default function DateHeader({
  value,
  onChange,
}: {
  value: Date;
  onChange: (d: Date) => void;
}) {
  const labelMain = useMemo(
    () => format(value, "EEEE d MMMM yyyy", { locale: fr }),
    [value]
  );
  const labelMonth = useMemo(
    () => format(value, "MMMM yyyy", { locale: fr }),
    [value]
  );

  return (
    <div className="intranet-card-solid px-5 py-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Left: date + popover */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
            <CalendarIcon className="h-5 w-5 text-white/80" />
          </div>

          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-white capitalize">
                {labelMain}
              </p>

              <Popover>
                <PopoverTrigger asChild>
                  <button className="chip px-2.5 py-1.5 text-[11px] font-semibold">
                    Choisir
                  </button>
                </PopoverTrigger>

                <PopoverContent
                  align="start"
                  className="w-[320px] rounded-2xl border border-white/10 bg-[#0f0f12] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
                >
                  <p className="mb-2 text-xs font-semibold text-white/80">
                    Calendrier
                  </p>

                  {/* Calendrier stylé dark */}
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                    <DayPicker
                      mode="single"
                      selected={value}
                      onSelect={(d) => d && onChange(d)}
                      weekStartsOn={1}
                      locale={fr}
                      showOutsideDays
                      modifiersClassNames={{
                        selected:
                          "bg-white text-black rounded-lg font-semibold",
                        today: "border border-white/30 rounded-lg",
                      }}
                      classNames={{
                        caption: "flex items-center justify-between px-1",
                        caption_label: "text-xs font-semibold text-white/80",
                        nav: "flex items-center gap-1",
                        nav_button:
                          "h-8 w-8 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10",
                        head_cell:
                          "text-[10px] uppercase tracking-wider text-white/35 font-semibold",
                        cell: "h-9 w-9 text-center text-sm",
                        day: "h-9 w-9 rounded-lg hover:bg-white/10 text-white/85",
                      }}
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-2">
                    <Button
                      variant="secondary"
                      className="w-full rounded-xl bg-white/5 border border-white/10 text-white/85 hover:bg-white/10"
                      onClick={() => onChange(new Date())}
                    >
                      Aujourd&apos;hui
                    </Button>

                    <Button
                      variant="secondary"
                      className="w-full rounded-xl bg-white/5 border border-white/10 text-white/85 hover:bg-white/10"
                      onClick={() => onChange(addDays(value, -1))}
                    >
                      -1 jour
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <p className="text-xs muted capitalize">{labelMonth}</p>
          </div>
        </div>

        {/* Right: nav buttons */}
        <div className="flex items-center gap-2">
          <button
            className="chip px-3 py-2 text-xs font-semibold inline-flex items-center gap-2"
            onClick={() => onChange(addDays(value, -1))}
          >
            <ChevronLeft className="h-4 w-4" />
            Jour précédent
          </button>

          <button
            className={[
              "px-3 py-2 text-xs font-semibold rounded-xl border",
              isSameDay(value, new Date())
                ? "chip chip-active"
                : "chip",
            ].join(" ")}
            onClick={() => onChange(new Date())}
          >
            Aujourd&apos;hui
          </button>

          <button
            className="chip px-3 py-2 text-xs font-semibold inline-flex items-center gap-2"
            onClick={() => onChange(addDays(value, 1))}
          >
            Jour suivant
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
