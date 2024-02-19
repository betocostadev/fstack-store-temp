import { useQuery } from '@apollo/client'
import { ALL_PRODUCTS_QUERY } from '../lib/queries/products'

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY)
  console.log(data, error, loading)
  return (
    <div>
      <h1>Products</h1>
    </div>
  )
}
