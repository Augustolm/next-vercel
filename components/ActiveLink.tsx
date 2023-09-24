import { useRouter } from "next/router";
import Link from "next/link";
import { CSSProperties, FC } from "react";

interface ActiveLinkProps {
  text: string;
  href: string;
}

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink: FC<ActiveLinkProps> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link legacyBehavior href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
