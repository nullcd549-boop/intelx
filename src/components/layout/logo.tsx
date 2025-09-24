// This is a placeholder logo with a design inspired by the prompt.
// Using an SVG component is more flexible in React than managing multiple image files.
const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      aria-label="IntelX Secure Logo"
      {...props}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#grad1)" strokeWidth="12">
        <path d="M100 20 L40 60 L40 140 L100 180 L160 140 L160 60 Z" />
        <path d="M100 20 L100 100" />
        <path d="M40 60 L100 100" />
        <path d="M160 60 L100 100" />
        <circle cx="100" cy="100" r="10" fill="hsl(var(--accent))" stroke="none" />
      </g>
    </svg>
  );
};

export default Logo;
