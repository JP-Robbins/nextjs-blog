import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layouts';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                <Link rel="icon" href="/nextjs-blog/public/favicon.ico" />

            </Head>
            <h3><Link href="/">Return Home</Link></h3>
            <h1>First Post</h1>
        </Layout>
    )
}