import { Montserrat, Raleway } from 'next/font/google'

// Configure Montserrat
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  // You can add weights and styles as needed
  weight: ['300', '400', '500', '600', '700'],
})

// Configure Raleway
export const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['300', '400', '500', '600', '700'],
})