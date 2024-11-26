import { Box } from '@mui/material';
import { IconChevronRight, IconChevronRightPipe, IconCircleChevronRight, IconSignRight } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react'
import ProductGalleryDialog from './DialogProductGallery';

const ProductCarousel = () => {
    return (
        <>
            <Box>
                <Box>
                    <Image
                        src={"https://api-mojosadean.rodiginesia.com/product/PRDCT_IMGS_aip6zip4_0_29_2024_.jpg"}
                        alt="Gambar Produk"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto', borderRadius: '15px' }} // optional
                    />
                </Box>

                <Box sx={{height:'10px'}}></Box>

                <Box display={'flex'} flexDirection={'row'} justifyContent={'start'} alignItems={'center'} gap={1} sx={{width:'100%', overflowX:'hidden'}}>
                    {
                        Array.from({ length: 6 }).map((_, index, array) => (
                            index === array.length - 1 ? <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>

                              <ProductGalleryDialog/>
                            </Box> :
                            <Image
                                src={"https://api-mojosadean.rodiginesia.com/product/PRDCT_IMGS_aip6zip4_0_29_2024_.jpg"}
                                alt="Gambar Produk"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '15%', height: 'auto', borderRadius: '10px' }} // optional
                            />
                        ))
                    }


                </Box>
            </Box>
        </>
    )
}

export default ProductCarousel