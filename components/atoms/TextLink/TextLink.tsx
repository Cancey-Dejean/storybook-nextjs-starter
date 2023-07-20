import Link from "next/link";

import classNames from "classnames";

interface TextLinkProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Link Name
   */
  label: string;
  /**
   * Link Destination
   */
  url: string;
}

/**
 * Primary UI component for user interaction
 */
export const TextLink = ({
  primary = false,
  label = "Link",
  url = "/",
  ...props
}: TextLinkProps) => {
  return (
    <Link
      href={url}
      className={classNames(primary ? "text-blue-500" : "text-gray-500")}
      {...props}
    >
      {label}
    </Link>
  );
};
