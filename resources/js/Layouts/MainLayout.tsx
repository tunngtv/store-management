import { Head } from "@inertiajs/react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Fragment, ReactNode } from "react";

type Props = {
    title: string;
    children: ReactNode;
};

export const MainLayout: React.FC<Props> = ({ title, children }) => {
    return (
        <Fragment>
            <Head title={title} />
            <CssBaseline />
            {children}
        </Fragment>
    );
};
