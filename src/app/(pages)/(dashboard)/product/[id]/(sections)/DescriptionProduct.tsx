import BlankCard from '@/components/shared/BlankCard'
import { Typography } from '@mui/material'
import parse from 'html-react-parser';

const DescriptionProduct = () => {
    return (
        <>
            <BlankCard paddingX={3} paddingY={3}>
                <Typography variant='h3'>Deskripsi Produk</Typography>
                <div>
                    {
                        parse('<p>Hello, World!</p>')
                    }
                </div>
            </BlankCard>
        </>
    )
}

export default DescriptionProduct