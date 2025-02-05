import { Head } from "@inertiajs/react";
import { ReactNode } from "react";

type Props = {
    title: string;
    children: ReactNode;
};

export const MainLayout: React.FC<Props> = ({ title, children }) => {
    return (
        <div className="container mx-auto">
            <Head title={title} />
            {children}
        </div>
    );
};
