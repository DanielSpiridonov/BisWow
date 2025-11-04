"use client";

import React, { useCallback, useEffect, useMemo, useState, useId } from "react";

type StarRatingProps = {
  max?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  size?: number; // pixel size for the star icon
  readOnly?: boolean;
  className?: string;
  label?: string;
  storageKey?: string; // if provided, persist to localStorage
};

function StarIcon({
  fraction,
  size = 24,
  color = "#7e22ce", // tailwind purple-700
  outline = "#6b7280", // gray-500
}: {
  fraction: number; // 0..1 how much of the star is filled
  size?: number;
  color?: string;
  outline?: string;
}) {
  const id = useId();
  const d =
    "M11.48 3.499a.75.75 0 0 1 1.04 0l2.54 2.53a.75.75 0 0 0 .423.214l3.54.514a.75.75 0 0 1 .416 1.279l-2.56 2.496a.75.75 0 0 0-.216.664l.604 3.525a.75.75 0 0 1-1.088.791l-3.166-1.664a.75.75 0 0 0-.698 0l-3.166 1.664a.75.75 0 0 1-1.088-.79l.605-3.526a.75.75 0 0 0-.216-.664L4.06 8.036a.75.75 0 0 1 .416-1.279l3.54-.514a.75.75 0 0 0 .423-.214l2.54-2.53Z";
  const clamped = Math.max(0, Math.min(1, fraction));
  const clipWidth = clamped * size;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        <clipPath id={`${id}-clip`}>
          <rect x="0" y="0" width={clipWidth} height={size} />
        </clipPath>
      </defs>
      {/* Base outline */}
      <path
        d={d}
        fill="none"
        stroke={outline}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Filled part */}
      <g clipPath={`url(#${id}-clip)`}>
        <path
          d={d}
          fill={color}
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default function StarRating({
  max = 5,
  defaultValue = 0,
  value,
  onChange,
  size = 24,
  readOnly = false,
  className,
  label = "Your rating",
  storageKey,
}: StarRatingProps) {
  const isControlled = typeof value === "number";
  const [internal, setInternal] = useState<number>(defaultValue);
  const [hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    if (isControlled && typeof value === "number") setInternal(value);
  }, [isControlled, value]);

  // Load persisted value for uncontrolled usage
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isControlled && storageKey) {
      const raw = window.localStorage.getItem(storageKey);
      const parsed = raw !== null ? parseFloat(raw) : NaN;
      if (!Number.isNaN(parsed)) {
        setInternal(Math.max(0, Math.min(max, parsed)));
      }
    }
  }, [isControlled, storageKey, max]);

  // Keep storage in sync for controlled usage as well
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isControlled && storageKey && typeof value === "number") {
      window.localStorage.setItem(
        storageKey,
        String(Math.max(0, Math.min(max, value)))
      );
    }
  }, [isControlled, storageKey, value, max]);

  const current = hover ?? internal;

  const setRating = useCallback(
    (v: number) => {
      if (readOnly) return;
      if (!isControlled) setInternal(v);
      onChange?.(v);
      if (typeof window !== "undefined" && storageKey) {
        window.localStorage.setItem(
          storageKey,
          String(Math.max(0, Math.min(max, v)))
        );
      }
    },
    [isControlled, onChange, readOnly, storageKey, max]
  );

  const stars = useMemo(
    () => Array.from({ length: max }, (_, i) => i + 1),
    [max]
  );

  const computeValueFromEvent = (
    e: React.MouseEvent<HTMLButtonElement>,
    n: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const half = x / rect.width <= 0.5;
    return Math.max(0, Math.min(max, half ? n - 0.5 : n));
  };

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-zinc-300">{label}</span>
        <span className="text-xs text-zinc-400">
          {current || 0}/{max}
        </span>
      </div>
      <div
        role="radiogroup"
        aria-label={label}
        className="flex gap-2 items-center"
        onMouseLeave={() => setHover(null)}
      >
        {stars.map((n) => {
          const fraction = Math.max(0, Math.min(1, (current || 0) - (n - 1)));
          return (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={Math.ceil(current || 0) === n}
              aria-label={`${
                n - 1 + (fraction >= 0.75 ? 1 : fraction >= 0.25 ? 0.5 : 0)
              } star${n > 1 ? "s" : ""}`}
              disabled={readOnly}
              className={`rounded-md p-1 hover:bg-zinc-700/50 focus:outline-none focus:ring-2 focus:ring-purple-700/60 transition-colors ${
                readOnly ? "cursor-default" : "cursor-pointer"
              }`}
              onMouseMove={(e) =>
                !readOnly && setHover(computeValueFromEvent(e, n))
              }
              onMouseEnter={(e) =>
                !readOnly && setHover(computeValueFromEvent(e, n))
              }
              onFocus={() => !readOnly && setHover(n)}
              onClick={(e) => setRating(computeValueFromEvent(e, n))}
              onKeyDown={(e) => {
                if (readOnly) return;
                if (e.key === "ArrowRight" || e.key === "ArrowUp") {
                  e.preventDefault();
                  setRating(Math.min((internal || 0) + 0.5, max));
                } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
                  e.preventDefault();
                  setRating(Math.max((internal || 0) - 0.5, 0));
                } else if (e.key === "Home") {
                  e.preventDefault();
                  setRating(0);
                } else if (e.key === "End") {
                  e.preventDefault();
                  setRating(max);
                }
              }}
            >
              <StarIcon fraction={fraction} size={size} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
