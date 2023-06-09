import ProductCell from 'src/components/Product/ProductCell'

type ProductPageProps = {
  id: number
}

const ProductPage = ({ id }: ProductPageProps) => {
  return <ProductCell id={id} />
}

export default ProductPage
