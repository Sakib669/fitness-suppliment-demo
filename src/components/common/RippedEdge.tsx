import React from "react";

interface RippedEdgeProps {
  position: "top" | "bottom";
  fillColor?: string;
  className?: string;
  variant?: 1 | 2 | 3;
}

export const RippedEdge: React.FC<RippedEdgeProps> = ({
  position,
  fillColor = "#00843D",
  className = "",
  variant = 1,
}) => {
  // Different organic rip paths for variety
  const path1 =
    "M0,35 Q35,8 70,30 T140,15 T210,38 T280,10 T350,32 T420,18 T490,40 T560,12 T630,34 T700,16 T770,36 T840,14 T910,38 T980,18 T1050,35 T1120,12 T1190,32 T1260,15 T1330,36 T1400,20 T1440,28 L1440,50 L0,50 Z";

  const path2 =
    "M0,28 Q45,12 90,36 T180,14 T270,32 T360,8 T450,38 T540,16 T630,30 T720,12 T810,40 T900,18 T990,34 T1080,15 T1170,36 T1260,10 T1350,30 T1440,18 L1440,50 L0,50 Z";

  const path3 =
    "M0,32 Q30,16 65,34 T130,10 T195,38 T260,18 T325,32 T390,8 T455,36 T520,14 T585,32 T650,18 T715,40 T780,12 T845,34 T910,16 T975,38 T1040,14 T1105,32 T1170,18 T1235,36 T1300,12 T1365,30 T1440,22 L1440,50 L0,50 Z";

  const selectedPath = variant === 2 ? path2 : variant === 3 ? path3 : path1;

  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${
        position === "top" ? "rotate-180 -mb-1" : "-mt-1"
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 50"
        preserveAspectRatio="none"
        className="w-full h-7 sm:h-9 md:h-12 block"
        style={{ color: fillColor }}
      >
        <path d={selectedPath} fill="currentColor" />
      </svg>
    </div>
  );
};
