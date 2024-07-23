import {  Roboto, Poppins } from 'next/font/google'
 
export const poppins = Poppins({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['400', '500', '700'],
    display: 'swap',
  });
 

  export const roboto = Roboto({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['400', '500', '700'],
    display: 'swap',
  });