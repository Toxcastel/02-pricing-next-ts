import Link from "next/link";
import { useRouter } from "next/router";

interface linkProps {
    text: string;
    href: string;
}

const style = {
    color: "#0070f3",
    textDecoration: "underline",
};

export const ActiveLink = ({ text, href }: linkProps) => {
    const { asPath } = useRouter();
    return (
        <Link href={href} style={asPath === href ? style : {}}>
            {text}
        </Link>
    );
};
