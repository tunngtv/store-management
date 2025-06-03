import { Head } from "@inertiajs/react";
import { ReactNode } from "react";

import { ThemeProvider } from "@/context/ThemeContext";
import AppLayout from "./AppLayout";

type Props = {
    title: string;
    children: ReactNode;
};

export const MainLayout: React.FC<Props> = ({ title, children }) => {
    return (
        <ThemeProvider>
            <Head title={title} />
            <AppLayout />
        </ThemeProvider>
    );
};
