import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";

const Login = ({ providers }) => {
    return (
        <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
            <Head>
                <title>juanvarela-spotify</title>
                <link rel="icon" type="image/png" href="/favicon-16x16.png" />
            </Head>
            <img className="w-52 mb-5" src="/images/logo.png" alt="Logo" />

            { Object.values(providers).map((provider) => (
                <div key={ provider.name }>
                    <button
                        className="bg-[#18D860] text-white p-5 rounded-full"
                        onClick={ () => signIn(provider.id, { callbackUrl: "/" }) }
                    >Login with { provider.name }</button>
                </div>
            )) }
        </div>
    );
}

export default Login;

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}