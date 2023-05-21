"use client";

import Image from "next/image";
import Input from "../components/Input";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="relative h-full w-full bg-[url('/images/hero.webp')] bg-center bg-fixed bg-cover text-2xl text-yellow-400">
      <section className="bg-blue-500 w-full h-full lg:bg-opacity-30">
        <div className="px-12 py-5">
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
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
            <div className="flex flex-col gap-4">
              {" "}
              <Input
                label="Username"
                id="name"
                handleInputChange={(el) => setName(el.target.value)}
                inputValue={name}
              />
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
          </div>
        </div>
      </section>
    </main>
  );
}