"use server"
import cloudinary from 'cloudinary'

import { revalidatePath } from "next/cache"

export async function setFavouriteImage
           (publicid:string,
            isFavourite:boolean,
            path:string)
             {
              if(isFavourite ){
                   await cloudinary.v2.uploader.remove_tag('favourite', [publicid])

              }
              else{
    
                    await cloudinary.v2.uploader.add_tag('favourite', [publicid])

              }

                    await new Promise((reslove) => { 
                    setTimeout(reslove),1000

                })
        revalidatePath(path)
}