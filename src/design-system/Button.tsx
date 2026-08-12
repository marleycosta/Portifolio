import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type Variant = "outline" | "solid" | "soft";

const base =
  "inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

const variants: Record<Variant, string> = {
  outline:
    "border border-line/80 bg-elevated/80 text-ink hover:border-accent hover:text-accent",
  solid: "border border-ink bg-ink text-paper hover:opacity-90",
  soft: "border border-line/80 bg-elevated/80 text-mute hover:border-accent hover:text-ink",
};

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  active?: boolean;
};

type ButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    to?: undefined;
    href?: undefined;
  };

type ButtonAsLink = SharedProps &
  Omit<LinkProps, "className" | "children"> & {
    to: LinkProps["to"];
    href?: undefined;
  };

type ButtonAsAnchor = SharedProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & {
    href: string;
    to?: undefined;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const {
    children,
    className = "",
    variant = "outline",
    active = false,
    ...rest
  } = props;

  const classes = cx(
    base,
    active ? variants.solid : variants[variant],
    className,
  );

  if ("to" in rest && rest.to !== undefined) {
    const { to, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link to={to} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button type={buttonRest.type ?? "button"} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
