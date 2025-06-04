import { Karma, Inter, Lato, Montserrat, Sorts_Mill_Goudy, Red_Hat_Display, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local/"

export const CG = Cormorant_Garamond ({subsets: ["latin"], weight: [ "300", "400", "500", "600"]})
export const Display = Playfair_Display({subsets: ["latin"], weight: [ "400", "500", "600", "700"]});
export const Rhd = Red_Hat_Display({subsets: ["latin"], weight: ["300","400","500","600","700"] });
export const karma = Karma ({subsets: ["latin"], weight: ["300","400","500","600","700"] });
export const inter = Inter({ subsets: ["latin"] });
export const lato = Lato({ subsets: ["latin"], weight: ["300", "700"] });
export const monsterrat = Montserrat({subsets: ["latin"],weight: ["300", "700"],});
export const SMG = Sorts_Mill_Goudy({ subsets: ['latin'], weight: ["400","400"]});
