import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github';
 export const authOptions={
    providers:[
        GithubProvider({
            clientId:'f9f89532bab8e0dcd6cc',
            clientSecret:'ba73bf9dc19b2e1c3f9e25502ca115f2d6439352'
        })
    ]
 }
 export default NextAuth(authOptions);