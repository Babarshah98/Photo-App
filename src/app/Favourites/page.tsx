import cloudinary from 'cloudinary'
import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { Icon } from '@iconify/react';
import UploadButton from '../Gallery/upload_button';
import ImageUpload from '../Gallery/imageUpload';



export type SearchResult={
    public_id:string
    tags:string[]
}

export default async function FavouritesPage() {
    const results= await cloudinary.v2.search
    .expression('resource_type:image AND tags=favourite')
    .sort_by('created_at','desc')
    .with_field('tags')
    .max_results(5)
    .execute () as {resources:SearchResult[]}
    

    
    
return (
    <section>
        <div className="flex justify-between">
            <h1 className="text-4xl font-bold ">Favourites</h1>
           
        </div>

        <div className='columns-4 gap-4 mx-auto p-5 space-y-4'>
        {results.resources.map((items , i) => {
            return (
                <div key={i} >
        <ImageUpload className='rounded-sm'
        key={items.public_id}
        path='/Favourites'
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