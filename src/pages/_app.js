import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

import ToastContext from '@/lib/ToastContext';


export default function App({ Component, pageProps:{session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <ToastContext/>
    
    </SessionProvider>
  );
}
