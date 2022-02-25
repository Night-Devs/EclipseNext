import { Layout } from "../components/layout";
import useToken from "../hooks/useToken";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Link from "next/link";

const Auth: NextPage = () => {
  const router = useRouter();

  const code = new URLSearchParams(router.asPath).get("/auth?code");

  const res = useToken(code || "");
  const token = res.error ? "" : res.data?.accessToken;

  return (
    <Layout>
      <main>
        <h4>
          {token ? (
            <>Successfully authenticated! Welcome to Eclipse 😉</>
          ) : (
            <>
              Ooops, something went wrong while we tried to authorize you,
              please go to <Link href="/">main page</Link> and try again later
            </>
          )}
        </h4>
      </main>
    </Layout>
  );
};

export default Auth;
