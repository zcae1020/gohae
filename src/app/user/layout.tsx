import BottomNav from "@/component/BottomNav";
import { navigationData } from "@/constant/nav";

import type { Metadata } from "next";

import style from "./page.module.scss";

export const metadata: Metadata = {
    title: "고해",
    description: "고민을 해결해",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={style.layout_body}>
                {children}
                <BottomNav navigationData={navigationData} />
            </body>
        </html>
    );
}
