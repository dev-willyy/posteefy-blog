import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <Head>
                <title>Posteefy Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
                <div className="px-10 space-y-5">
                    <h1 className="text-6xl max-w-xl font-serif">
                        <span className="underline decoration-black decoration-4">Medium</span> is a place to write,
                        read, and connect
                    </h1>
                    <h2>It's easy and free to post your thinking on any topic and connect wih millions of people</h2>
                </div>
                <img
                    className="hidden md:inline-flex h-32 lg:h-full"
                    src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
                    alt="Hero Img"
                />
            </div>

            {/* Posts */}
        </div>
    );
};

export default Home;
