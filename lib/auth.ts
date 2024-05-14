import GitHub from 'next-auth/providers/github'
import NextAuth from 'next-auth'

export const { handlers, auth } = NextAuth({ providers: [GitHub] })
