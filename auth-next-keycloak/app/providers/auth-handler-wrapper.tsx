import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';
import { FC } from "react";

interface AuthHandlerWrapperProps {
  children: React.ReactNode;
}

export const AuthHandlerWrapper: FC<AuthHandlerWrapperProps> = ({ children }) => {
  const session = useSession();

  if (session.status === "loading") {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <p>Logando</p>
      </div>
    )
  }

  if (session.status === "unauthenticated") {
    redirect("/api/auth/signin");
  }

  return children;
}