"use client";

import dynamic from "next/dynamic";

type RoutePageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const RoutePage = dynamic<RoutePageProps>(
  () => import("./route-page.client").then((module) => module.RoutePage),
  {
    ssr: false,
    loading: () => null,
  }
);

export { RoutePage };