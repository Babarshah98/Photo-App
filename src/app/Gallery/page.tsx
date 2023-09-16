import cloudinary from 'cloudinary'
import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { Icon } from '@iconify/react';
import UploadButton from "./upload_button";
import ImageUpload from './imageUpload';



export type SearchResult={
    public_id:string
    tags:string[]
}

export default async function GalleryPage() {
    const results= await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at','desc')
    .with_field('tags')
    .max_results(5)
    .execute () as {resources:SearchResult[]}
    

    
    
return (
    <section>
        <div className="flex justify-between">
            <h1 className="text-4xl font-bold ">Gallery</h1>
           <UploadButton />
        </div>

        <div className='columns-4 gap-4 mx-auto p-5 space-y-4'>
        {results.resources.map((items , i) => {
            return (
                <div key={i} >
        <ImageUpload className='rounded-sm'
        key={items.public_id}
        path='/Gallery'
        src={items.public_id}
        publicid={items.public_id}
        Imagedata={items}
        height={400}
        width={400}
        alt='publicId'
        />
        </div>
            )

})}
        </div>
    </section>
)
}