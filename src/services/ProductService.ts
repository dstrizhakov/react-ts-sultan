import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IProduct } from "../models/IProduct"

export const productAPI = createApi({
	reducerPath: 'productAPI',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:7000'}),
	tagTypes:['Product'],
	endpoints: (build) => ({
		fetchAllProducts: build.query<IProduct[], number>({
			query: (limit:number = 10) => ({
				url: '/products',
				params: {
					_limit: limit,
				}
			}),
			providesTags: result => ['Product']
		}),
		createProduct: build.mutation<IProduct, IProduct>({
			query: (product) => ({
				url: '/products',
				method: 'POST',
				body: product
			}), 
			invalidatesTags: ['Product']
		}),
		updateProduct: build.mutation<IProduct, IProduct>({
			query: (product) => ({
				url: `/products/${product.id}`,
				method: 'PUT',
				body: product
			}), 
			invalidatesTags: ['Product']
		}),
		deleteProduct: build.mutation<IProduct, IProduct>({
			query: (product) => ({
				url: `/products/${product.id}`,
				method: 'DELETE',
			}), 
			invalidatesTags: ['Product']
		})
	})
})