import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function ImageGallery({itemDetail}) {
  return (
    <div className="px-1 mx-7 mt-3 lg:my-7 h-fitlg:h-112 flex items-center justify-center">

          <Carousel className="size-fit flex items-center">
          <CarouselContent>
            {itemDetail?.images.length > 0 ? itemDetail.images.map((image, index) => (
              <CarouselItem key={index} className="size-full">
                <img src={image.imageUrl} 
                  className="py-1 object-contain rounded-2xl md:py-5" />
              </CarouselItem>
            )):
            <CarouselItem className='h-[500px] bg-slate-200 animate-pulse'></CarouselItem>
          }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          </Carousel>
    </div>
  )
}

export default ImageGallery