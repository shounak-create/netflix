import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github'

const authoptions = {
    providers:[
        GithubProvider({
            clientId:'Iv1.17d631e401c63522',
            clientSecret:'a487f786ac5351a5fe29679b8dd89530e51a886d'
        })
    ],
    callbacks : {
        async session({session, token, user}){
            session.user.username = session?.user?.name.split(" ").join("").toLocaleLowerCase();

            session.user.uid = token.sub

            return session
        },
    },
    secret: "default_secret_key",
};

const handler = NextAuth(authoptions);

export {handler as GET, handler as POST};
