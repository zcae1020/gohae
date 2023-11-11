"use client";

import React from "react";

import { Restore } from "@mui/icons-material";
import BottomNav from "@/component/BottomNav/BottomNav";

const navigationData = [
  {
    label: "마이 페이지",
    icon: <Restore />,
    link: "/dashboard",
  },
  {
    label: "편지함",
    icon: <Restore />,
    link: "/letterbox",
  },
  {
    label: "편지쓰기",
    icon: <Restore />,
    link: "/write",
  },
  {
    label: "상점",
    icon: <Restore />,
    link: "/store",
  },
  {
    label: "더보기",
    icon: <Restore />,
    link: "/more",
  },
];

// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <BottomNav navigationData={navigationData} />
      </body>
    </html>
  );
}
