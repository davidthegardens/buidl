// import React from 'react';
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

// const FerrisWheelPage = () => {
//   return (
//     <div className={`min-h-screen flex flex-col items-center justify-center bg-blue-100 p-10 ${inter.className}`}>
//       <h1 className="text-5xl font-bold text-center mb-6">The Majestic Ferris Wheels</h1>
//       <p className="text-lg text-center mb-4">
//         Ferris wheels, named after George Washington Gale Ferris Jr., are a universal symbol of fun and amusement. 
//         They offer breathtaking views from the top, making them a must-visit attraction in amusement parks and fairs.
//       </p>
//       <div className="flex flex-wrap justify-center gap-4">
//         <div className="max-w-sm bg-white rounded-lg shadow-md">
//           <img className="rounded-t-lg" src="/images/londoneye.JPG" alt="London Eye" height="500" width="500"/>
//           <div className="p-5">
//             <h5 className="text-xl font-semibold mb-2">London Eye, London</h5>
//             <p className="text-base">
//               Standing at 135 meters, the London Eye is one of the world's tallest Ferris wheels, offering panoramic views of the British capital.
//             </p>
//           </div>
//         </div>
//         <div className="max-w-sm bg-white rounded-lg shadow-md">
//           <img className="rounded-t-lg" src="/images/singapore.jpg" alt="Singapore Flyer" height="500" width="500"/>
//           <div className="p-5">
//             <h5 className="text-xl font-semibold mb-2">Singapore Flyer, Singapore</h5>
//             <p className="text-base">
//               The Singapore Flyer stands at 165 meters and is Asia's largest giant observation wheel, providing a glimpse of Malaysia and Indonesia on clear days.
//             </p>
//           </div>
//         </div>
//         <div className="max-w-sm bg-white rounded-lg shadow-md">
//           <img className="rounded-t-lg" src="/images/highroller.jpeg" alt="High Roller" height="500" width="500"/>
//           <div className="p-5">
//             <h5 className="text-xl font-semibold mb-2">High Roller, Las Vegas</h5>
//             <p className="text-base">
//               The High Roller in Las Vegas towers at 167.6 meters, making it the tallest Ferris wheel in the world as of its opening in 2014.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FerrisWheelPage;
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        you wot
        </div>
    </main>
  );
}