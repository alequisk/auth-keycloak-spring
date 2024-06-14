"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";

export default function Home() {
  const session = useSession();

  return (
    <main className="w-full h-full">
      <Card className="max-w-xl m-auto mt-40">
        <CardHeader>
          <CardTitle>
            Fazer login
          </CardTitle>
          <CardDescription>
            Fazer login através do keycloak
          </CardDescription>
        </CardHeader>
        <CardContent>

          <Button onClick={() => signIn()}>Fazer login com keycloak</Button>
          <Button onClick={() => signOut()}>Logout</Button>
          <p>{JSON.stringify(session)}</p>
        </CardContent>
      </Card>
    </main>
  );
}
