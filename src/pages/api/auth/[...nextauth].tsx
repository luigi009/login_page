import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const emailRegex = new RegExp(
          "^[a-zA-Z0-9_.+-]+@(hotmail|gmail|yahoo|outlook|live)\\.com$"
        );
        const user = { email: email, name: email.split("@")[0] };

        if (!emailRegex.test(email) || password.length < 8) {
          throw new Error("Invalid Credentials");
        }

        return {
          id: "1234",
          email: user.email,
          name: user.name,
          image: "/svg/user.svg",
        };
      },
    }),
  ],
  pages: {
    signIn: "/",
    error: "/",
    signOut: "/",
  },
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
  },
};
export default NextAuth(authOptions);
