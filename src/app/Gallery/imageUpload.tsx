'use client'
import { Icon } from "@iconify/react/dist/iconify.js"
import { HeartIcon, } from "lucide-react"
import { CldImage } from "next-cloudinary"
import { Hearticon } from "../frontpage/icons/Hearticon"
import {setFavouriteImage} from "./action"
import { useTransition } from "react"

import { SearchResult } from "./page"
import Fullheart from "../frontpage/icons/Fullheart"
        

export default function ImageUpload(props:any & {Imagedata:SearchResult; path:string}){
  const [Transition, startTransition] = useTransition()
  const {Imagedata} = props
  const isFavourite = Imagedata.tags.includes('favourite')
  
    return(
        <div className="relative ">
        <CldImage
        {...props}/>
        { isFavourite ?
       
          ( <Fullheart
          onClick={() => {
            startTransition(() => {
            setFavouriteImage(Imagedata.public_id, true, props.path)

            })
          
          }}
          className="cursor-pointer    duration-200 absolute top-2 right-2"/>
    ) :
        (
          <HeartIcon 
          onClick={() => {
            startTransition(() => {
            setFavouriteImage(Imagedata.public_id, false, props.path)

            })
          
          }}
          className="cursor-pointer   hover:text-red-500 duration-200 absolute top-2 right-2"/>
        
        )}
          
       
          </div>
          
       

        
    )
      }