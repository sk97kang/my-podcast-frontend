import React from "react";
import { Helmet } from "react-helmet-async";

interface ILayoutProps {
  className?: string;
  title: string;
}

export const Layout: React.FC<ILayoutProps> = ({
  children,
  className,
  title,
}) => {
  return (
    <main className={`container h-screen ${className}`}>
      <Helmet>
        <title>{title} | My Podcast</title>
      </Helmet>
      {children}
    </main>
  );
};
