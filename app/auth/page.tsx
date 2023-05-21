"use client";

import Image from "next/image";
import Input from "../components/Input";
import { useCallback, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  // show/hide
  const [showHide, setshowHide] = useState(false);
  const handleLearnMoreClick = () => {
    setshowHide(true);
  };

  return (
    <main className="relative h-full w-full bg-[url('/images/hero.webp')] bg-center bg-fixed bg-cover text-2xl text-yellow-400">
      <section className="bg-blue-900 w-full h-full lg:bg-opacity-30 ">
        <div className="lg:px-20 py-2 px-10">
          {" "}
          <Image
            src="Blockbuster_logo.svg"
            alt="log"
            height={160}
            width={160}
          />
        </div>
        <div className="flex justify-center">
          {" "}
          <div className="bg-blue-900 bg-opacity-90 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md w-full">
            <h2 className="text-white text-3xl mb-8 font-semibold">
              {variant === "login" ? "Sign In" : "Sign up"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  id="name"
                  handleInputChange={(el) => setName(el.target.value)}
                  inputValue={name}
                />
              )}
              <Input
                label="Email"
                inputType="email"
                id="email"
                handleInputChange={(el) => setEmail(el.target.value)}
                inputValue={email}
              />
              <Input
                label="password"
                inputType="password"
                id="password"
                handleInputChange={(el) => setPassword(el.target.value)}
                inputValue={password}
              />
            </div>
            <button
              className="
          bg-yellow-600
            py-4
            text-white
            rounded-md 
            w-full
            mt-6
          hover:bg-yellow-500
          text-base
            "
            >
              {variant === "login" ? "Login" : "Sign up"}
            </button>

            {/* New User */}
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
                {!showHide && (
                  <button
                    className="cursor-pointer text-yellow-500 hover:underline"
                    data-uia=""
                    onClick={handleLearnMoreClick}
                  >
                    Learn more.
                  </button>
                )}
                {showHide && (
                  <div
                    className={`my-2 text-sm  ${
                      showHide ? "transition-all duration-500 text-x" : ""
                    }`}
                  >
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
                    reCAPTCHA service and for general security purposes (it is
                    not used for personalized advertising by Google).
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
