
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const api=createApi({
    baseUrl:fetchBaseQuery({baseUrl:process.env.REACT_APP_BASE_URL})
})