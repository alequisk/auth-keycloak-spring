import NextAuth from "next-auth"
import Keycloak from "next-auth/providers/keycloak"

const handler = NextAuth({
  providers: [
    Keycloak({
      clientId: "alequisk_client",
      clientSecret: "9F2SG7a5TFrVHY4KN4VksPuAaG8Jndtp",
      issuer: "http://localhost:8080/realms/DevRealm"  
    })
  ]
})

export { handler as GET, handler as POST }
