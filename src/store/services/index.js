import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const musicAppApi = createApi({
    reducerPath: "musicAppApi",
    tagTypes: ['Tracks'],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://painassasin.online",  
        prepareHeaders: (headers, { getState }) => {
            const token = (getState()).auth.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }), 
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: ({ ...payload }) => ({
                url: '/user/signup/',
                method: 'POST',
                body: payload
              })
        }),
        login: builder.mutation({
            query: ({ ...payload }) => ({
                url: '/user/login/',
                method: 'POST',
                body: payload
              })
        }),
        getToken: builder.mutation({
            query: ({ ...payload }) => ({
                url: '/user/token/',
                method: 'POST',
                body: payload
              })
        }),
        refreshToken: builder.mutation({
            query: ({ ...payload }) => ({
                url: '/user/token/refresh/',
                method: 'POST',
                body: payload
              })
        }),
        getAllTracks:builder.query({
                query: () => ({
                  url: '/catalog/track/all/'
                }),
        }),
        getPlaylists:builder.query({
            query: () => "/catalog/selection/",
        }),
        getFavoriteTracks:builder.query({
            query: () => ({
                url: "/catalog/track/favorite/all/", 
                method: 'GET'
            }),
        }),
        addFavoriteTracks:builder.mutation({
            query: ( payload ) => ({
                url: `/catalog/track/${payload}/favorite/`,
                method: 'POST'
            })
        }),
        deleteFavoriteTracks:builder.mutation({
            query: ( payload ) => ({
                url: `/catalog/track/${payload}/favorite/`,
                method: 'DELETE'
        })
        }),
        getPlaylistById:builder.query({
            query: (id) => ({
                url: `/catalog/selection/${id}/`,
            }),
        }),
        getTrackById:builder.query({
            query: (id) => `/catalog/track/${id}`,
        }),
        invalidatesTags: ['Tracks']
    }),
});

export const  { useSignUpMutation, useGetTokenMutation, useGetAllTracksQuery, useGetPlaylistByIdQuery, useAddFavoriteTracksMutation, useDeleteFavoriteTracksMutation, useGetFavoriteTracksQuery, useGetTrackByIdQuery, useRefreshTokenMutation, useLoginMutation}  = musicAppApi;