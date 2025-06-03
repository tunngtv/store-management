// import { HelmetProvider, Helmet } from "react-helmet-async";
import { Head } from "@inertiajs/react";

const PageMeta = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
    </Head>
);

export const AppWrapper = ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
);

export default PageMeta;
