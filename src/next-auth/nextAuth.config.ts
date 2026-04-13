import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"


export const nextAuthConfig: NextAuthOptions={
    providers: [
        Credentials({
            name:'Fresh Cart Login',
            credentials:{
                email:{label:'email',type:'email',placeholder:'email'},
                password:{label:'password',type:'password',placeholder:'password'},
            },
            authorize: async function (credentials) {
                const res= await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin',{
                    method:'POST',
                    body:JSON.stringify(credentials),
                    headers: {
                        "Content-Type": "application/json",
                      },
                })
                const result = await res.json()
                console.log('result',result);
                if(res.ok){
                    const {name,email} = result.user
                    
                    return{
                        name,
                        email,
                        id:"",
                        tokenCredentials:result.token
                    }
                }
                return null
                }
            
        })
    ],
    callbacks:{
        jwt(params) {
            if(params.user){
                params.token.routeToken=params.user.tokenCredentials
                params.token.id=params.user.id
            }
            console.log("show params jwt",params);
            return params.token
        },
        session(params) {
            if (params.session.user) {
                params.session.user.id=params.token.id
            }
            console.log("show params session",params);
            
            return params.session
        },
    },
    jwt:{maxAge:60*60*24*3},
    pages: {
        signIn: '/login',
      },
    
    
}