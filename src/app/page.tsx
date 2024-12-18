
import ClientWrapper from '@/components/ClientWrapper'

export default function Page() {
  return <ClientWrapper />
}

// import { Github, Linkedin, Twitter } from 'lucide-react'
// import Link from 'next/link'

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
//         <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
//           Ayverse
//         </h1>
//         <p className="mb-6 text-lg font-normal text-gray-300 lg:text-xl">
//           The one-stop metaverse. All in one.
//         </p>
//       </div>

//       <div className="relative flex place-items-center">
//         <div className="animate-pulse-slow absolute -z-10 h-56 w-56 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
//         <div className="animate-pulse-fast absolute -z-10 h-40 w-40 rounded-full bg-purple-500 opacity-20 blur-3xl"></div>
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
//           <h2 className="mb-3 text-2xl font-semibold">
//             Explore
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Discover new worlds and experiences in our vast metaverse.
//           </p>
//         </div>

//         <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
//           <h2 className="mb-3 text-2xl font-semibold">
//             Connect
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Meet and interact with people from all over the world.
//           </p>
//         </div>

//         <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
//           <h2 className="mb-3 text-2xl font-semibold">
//             Create
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Build your own virtual spaces and experiences.
//           </p>
//         </div>

//         <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
//           <h2 className="mb-3 text-2xl font-semibold">
//             Innovate
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Push the boundaries of what's possible in virtual reality.
//           </p>
//         </div>
//       </div>

//       <footer className="w-full text-center mt-8">
//         <p className="mb-4">
//           Made with 💖 by <Link href="https://x.com/aykansal" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
//               Aykansal
//             </Link>
//         </p>
//         <div className="flex justify-center space-x-4">
//           <Link href="https://github.com/aykansal" aria-label="GitHub">
//             <Github className="w-6 h-6 hover:text-blue-400 transition-colors" />
//           </Link>
//           <Link href="https://linkedin.com/in/aykansal" aria-label="LinkedIn">
//             <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
//           </Link>
//           <Link href="https://x.com/aykansal" aria-label="X (formerly Twitter)">
//             <Twitter className="w-6 h-6 hover:text-blue-400 transition-colors" />
//           </Link>
//         </div>
//       </footer>
//     </main>
//   )
// }