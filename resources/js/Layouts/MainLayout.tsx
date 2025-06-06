import { Head } from "@inertiajs/react";
import { ReactNode } from "react";
import AppLayout from "./AppLayout";

type Props = {
    title: string;
    children: ReactNode;
};

export const MainLayout: React.FC<Props> = ({ title, children }) => {
    return (
        <>
            <Head title={title} />
            <AppLayout />
        </>
    );
};
