export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 364 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Velocity B"
    >
      <circle cx="50" cy="50" r="40" fill="#0A1543" />
      <text
        x="34"
        y="50"
        fontFamily="'Space Grotesk',sans-serif"
        fontWeight="700"
        fontSize="30"
        fill="#FFFFFF"
        textAnchor="middle"
        dominantBaseline="central"
        transform="rotate(-90 34 50)"
      >
        V
      </text>
      <text
        x="51"
        y="65"
        fontFamily="'Space Grotesk',sans-serif"
        fontWeight="700"
        fontSize="42"
        fill="#FFFFFF"
      >
        B
      </text>
      <text
        x="102"
        y="65"
        fontFamily="'Space Grotesk',sans-serif"
        fontWeight="600"
        fontSize="42"
        fill="#0A1543"
      >
        Velocity B
      </text>
    </svg>
  );
}

export function LogoMark({ className = "h-32 w-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Velocity B"
    >
      <circle cx="50" cy="50" r="40" fill="#0A1543" />
      <text
        x="34"
        y="50"
        fontFamily="'Space Grotesk',sans-serif"
        fontWeight="700"
        fontSize="30"
        fill="#FFFFFF"
        textAnchor="middle"
        dominantBaseline="central"
        transform="rotate(-90 34 50)"
      >
        V
      </text>
      <text
        x="51"
        y="65"
        fontFamily="'Space Grotesk',sans-serif"
        fontWeight="700"
        fontSize="42"
        fill="#FFFFFF"
      >
        B
      </text>
    </svg>
  );
}
