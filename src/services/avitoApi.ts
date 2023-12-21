import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAvito } from "../models/IAvito";

export const avitoAPI = createApi({
    reducerPath: 'avitoAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.AVITO_URL
    }),
    tagTypes: ['Avito'],
    endpoints: (builder) => ({
        getRealties: builder.query<IAvito[], any>({
            query: () => ({
                url: 'realty/'
            }),
            providesTags: ['Avito'],
            transformResponse: (response: { realty: IAvito[]; }) => {
                return response.realty
            }
        })
    })
})