import axios from "axios";
import { useCallback, useState } from "react";
import { NextPageContext } from "next";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import Input from "@/components/Input";
import Image from "next/image";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Auth = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  // user login
  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });

      router.push("/profiles");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  // register new user

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <main className="relative h-full w-full bg-[url('/images/hero.webp')] bg-center bg-fixed bg-cover text-2xl ">
      <section className="bg-blue-900 w-full h-full lg:bg-opacity-30 ">
        <div className="px-12 py-5">
          <Image
            src="Blockbuster_logo.svg"
            alt="Logo"
            width={120}
            height={120}
            priority={true}
          />
        </div>
        {/* Login Form */}
        <div className="flex justify-center">
          <div className="bg-blue-900 bg-opacity-90 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md w-full">
            <h2 className="text-white text-3xl mb-8 font-semibold">
              {variant === "login" ? "Sign In" : "Sign up"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  type="text"
                  label="Username"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                />
              )}
              <Input
                id="email"
                type="email"
                label="Email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                id="password"
                label="Password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>

            <button
              onClick={variant === "login" ? login : register}
              className="bg-yellow-600 py-4 text-white rounded-md  w-full mt-6 hover:bg-yellow-500 text-base"
            >
              {variant === "login" ? "Login" : "Sign up"}
            </button>

            <div className="flex flex-row items-center  mt-6 justify-evenly ">
              <button
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={32} />
              </button>
              <button
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FaGithub size={32} />
              </button>
            </div>

            <div className="text-neutral-400 mt-12 text-base">
              {variant === "login"
                ? "New to Blockbuster"
                : "Already have an account?"}{" "}
              <span
                className="text-white hover:underline cursor-pointer "
                onClick={toggleVariant}
              >
                {variant === "login" ? "Sign up now" : "Login"}
              </span>
              .
              <div className="my-2 text-sm">
                {` This page is protected by Google reCAPTCHA to ensure you're not a bot.`}{" "}
                <button
                  className="cursor-pointer text-yellow-500 hover:underline"
                  data-uia=""
                >
                  Learn more.
                </button>
                <div className={`my-2 text-sm `}>
                  The information collected by Google reCAPTCHA is subject to
                  the Google{" "}
                  <a
                    className="cursor-pointer text-yellow-500 hover:underline"
                    href="https://policies.google.com/privacy"
                    id="recaptcha-privacy-link"
                    data-uia="recaptcha-privacy-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    className="cursor-pointer text-yellow-500 hover:underline"
                    href="https://policies.google.com/terms"
                    id="recaptcha-tos-link"
                    data-uia="recaptcha-tos-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </a>
                  , and is used for providing, maintaining, and improving the
                  reCAPTCHA service and for general security purposes (it is not
                  used for personalized advertising by Google).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Auth;
