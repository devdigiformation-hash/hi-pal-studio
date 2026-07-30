interface IconProps {
  size?: number;
  className?: string;
}

export function WindowsIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 88 88"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M0 12.4 35.7 7.5v34.4H0zM40 6.9 87.9 0v41.6H40zM35.7 46.1v34.5L0 75.6V46.1zM87.9 46.1V88L40 81.1V46.1z" />
    </svg>
  );
}

export function AppleIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M16.4 12.7c0-2.6 2.1-3.9 2.2-4-1.2-1.8-3.1-2-3.8-2-1.6-.2-3.1.9-3.9.9s-2.1-.9-3.4-.9c-1.8 0-3.4 1-4.3 2.6-1.8 3.2-.5 7.9 1.3 10.5.9 1.3 1.9 2.7 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.4.8 2.3-1.3 3.1-2.6c1-1.5 1.4-2.9 1.4-3-.1 0-2.6-1-2.6-4.1zM13.9 4.6c.7-.9 1.2-2.1 1.1-3.3-1 0-2.3.7-3.1 1.6-.6.8-1.2 2-1.1 3.2 1.2.1 2.4-.6 3.1-1.5z" />
    </svg>
  );
}
