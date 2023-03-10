import Document, { Html, Head, Main, NextScript } from "next/document";
import { ReactNotifications } from "react-notifications-component";
// import clsx from "clsx";
// import { useTheme } from "../context/theme-context";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <ReactNotifications />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
