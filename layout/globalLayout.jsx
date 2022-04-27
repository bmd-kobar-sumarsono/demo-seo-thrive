import Head from "next/head";

const GlobalLayout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="robots" content="INDEX, FOLLOW, NOODP, NOYDIR" />
      </Head>
      {children}
    </>
  );
};

export default GlobalLayout;
