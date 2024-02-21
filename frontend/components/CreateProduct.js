import { useMutation } from '@apollo/client'
import useForm from '../hooks/useForm'
import Form from './styles/Form'
import { CREATE_PRODUCT_MUTATION } from '../lib/queries/products'
import DisplayError from './ErrorMessage'

// This is the form to create a new product
export default function CreateProduct() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    image: '',
    name: '',
    price: '',
    description: '',
  })

  const [createProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
    }
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await createProduct()
    if (response?.data) {
      clearForm()
    }
  }

  return (
    <div>
      <DisplayError error={error} />

      <Form onSubmit={handleSubmit}>
        <fieldset aria-busy={loading} disabled={loading}>
          <label htmlFor="image">
            Image
            <input
              type="file"
              id="image"
              name="image"
              placeholder="Upload an image"
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              required
              value={inputs.price}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              required
              value={inputs.description}
              onChange={handleChange}
            />
          </label>
          <button type="submit">+ Add Product</button>
          <button type="button" onClick={clearForm}>
            Clear Form
          </button>
          <button type="button" onClick={resetForm}>
            Reset Form
          </button>
        </fieldset>
      </Form>
    </div>
  )
}
