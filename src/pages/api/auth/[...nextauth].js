import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";



export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials, req) {

       
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };

    

        const res = await fetch(
          "https://dev-api.letusrecon.com/v1/auth/user/login",
          {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
        );

        const user = res.json();

        if (!res.ok) {
          throw new Error(user.message);
        }

        if (res.ok && user) {
          return user
        } 
      },
    }),
  ],

  session: {
    jwt: true,
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user
      return session;
    },
  },

  pages: {
    signIn: "/Login",
  },
});
