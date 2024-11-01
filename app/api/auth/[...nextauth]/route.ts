import authOptions from "@/app/auth/authOpttions";
import NextAuth, { NextAuthOptions } from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
