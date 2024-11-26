// Format as Indonesian Rupiah:

export const formatRupiah = (price: number) => price.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR'
})

