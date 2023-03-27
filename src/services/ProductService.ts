import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IProduct } from "../models/IProduct"

export const productAPI = createApi({
	reducerPath: 'productAPI',
	baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:7000'}),
	endpoints: (build) => ({
		fetchAllProducts: build.query<IProduct[], number>({
			query: (limit:number = 10) => ({
				url: '/products',
				params: {
					_limit: limit
				}

			})
		})
	})
})