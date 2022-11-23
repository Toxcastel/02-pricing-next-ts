import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

const ContactPage = () => {
    return (
        <MainLayout>
            <h1>Contact</h1>
            <h1 className="title">
                Go to <Link href="/">Home</Link>
            </h1>

            <p className="description">
                Get started by editing <code className="code">pages/contact.tsx</code>
            </p>
        </MainLayout>
    );
};

export default ContactPage;
