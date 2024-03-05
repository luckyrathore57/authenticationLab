"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "model" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  if (mode == "model") {
    return <div>TODO:Mode is model</div>;
  }
  const onClick = () => {
    router.push("/login");
  };

  return (
    <span onClick={onClick} className=" cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
