import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { Galleryicon } from './frontpage/icons/Galleryicon'
import { Foldericon } from './frontpage/icons/Foldericon'
import { Hearticon } from './frontpage/icons/Hearticon'
import { Router, useRouter } from 'next/router'
import RouterButton from './frontpage/Router'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PICTURE GALLERY',
  description: 'Generated by Babar Shahzad',
}

export function SideBar() {
  
  return (
    <div className="pb-12  w-1/5  border-r border-slate-800  ">
    <div className="space-y-4 py-4  ">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Manage
        </h2>
        <div className="space-y-1 ">
          <RouterButton/>
          <Button variant="ghost" className="w-full justify-start flex gap-2 rounded hover:bg-gray-900 hover:text-gray-100">
            <Link href={'/Album'} className='flex gap-2 justify-start items-center'>
            <div><Foldericon /></div>
            Album
            </Link>
          </Button>
          <Button  asChild variant="ghost" className="w-full justify-start flex gap-2 rounded hover:bg-gray-900 hover:text-gray-100">
            <Link href= '/Favourites' className='flex gap-2 justify-start items-center'>
           <div className=''><Hearticon /></div>
            Favourites
            </Link>
          </Button>
        
      </div>
     </div></div></div>
  )
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black text-white">
      
      <body className={inter.className}>
      
        <div className="border-b border-slate-800">
          
          <div className="flex h-16 items-center px-4 font-bold container mx-auto">
          <Link href='/'>
            PHOTO APP
            {/* <TeamSwitcher /> */}
            {/* <MainNav className="mx-6" /> */}
            </Link>
            <div className="ml-auto flex items-center space-x-4">
              {/* <Search /> */}
              {/* <UserNav /> */}
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className='flex '>
           <SideBar/>
            <div className='w-full px-4 py-2 pt-12'>
               {children}
            </div>
        </div>
        </body>
        
    </html>
  )
}
