"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { FC } from "react";
import { AuthHandlerWrapper } from "./auth-handler-wrapper";

interface NextAuthorProvidersProps {
  children: React.ReactNode;
}

export const NextAuthorProviders: FC<NextAuthorProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
      <AuthHandlerWrapper>
        {children}
      </AuthHandlerWrapper>
    </SessionProvider>
  );
}