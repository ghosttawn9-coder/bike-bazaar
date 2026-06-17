import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { ActivityDataPoint, AdminLoginInput, AdminLoginResponse, AdminProfile, BikeRequest, CategoryCount, CreateProductInput, CreateRequestInput, DashboardStats, ErrorResponse, GetActivityDataParams, GetProductsParams, GetRequestsParams, HealthStatus, Product, ProductListResponse, SuccessResponse, UpdateAdminProfileInput, UpdateProductInput, UpdateRequestStatusInput } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List all products
 */
export declare const getGetProductsUrl: (params?: GetProductsParams) => string;
export declare const getProducts: (params?: GetProductsParams, options?: RequestInit) => Promise<ProductListResponse>;
export declare const getGetProductsQueryKey: (params?: GetProductsParams) => readonly ["/api/products", ...GetProductsParams[]];
export declare const getGetProductsQueryOptions: <TData = Awaited<ReturnType<typeof getProducts>>, TError = ErrorType<unknown>>(params?: GetProductsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetProductsQueryResult = NonNullable<Awaited<ReturnType<typeof getProducts>>>;
export type GetProductsQueryError = ErrorType<unknown>;
/**
 * @summary List all products
 */
export declare function useGetProducts<TData = Awaited<ReturnType<typeof getProducts>>, TError = ErrorType<unknown>>(params?: GetProductsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a new product (admin only)
 */
export declare const getCreateProductUrl: () => string;
export declare const createProduct: (createProductInput: CreateProductInput, options?: RequestInit) => Promise<Product>;
export declare const getCreateProductMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createProduct>>, TError, {
        data: BodyType<CreateProductInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createProduct>>, TError, {
    data: BodyType<CreateProductInput>;
}, TContext>;
export type CreateProductMutationResult = NonNullable<Awaited<ReturnType<typeof createProduct>>>;
export type CreateProductMutationBody = BodyType<CreateProductInput>;
export type CreateProductMutationError = ErrorType<unknown>;
/**
 * @summary Create a new product (admin only)
 */
export declare const useCreateProduct: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createProduct>>, TError, {
        data: BodyType<CreateProductInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createProduct>>, TError, {
    data: BodyType<CreateProductInput>;
}, TContext>;
/**
 * @summary Get featured products
 */
export declare const getGetFeaturedProductsUrl: () => string;
export declare const getFeaturedProducts: (options?: RequestInit) => Promise<Product[]>;
export declare const getGetFeaturedProductsQueryKey: () => readonly ["/api/products/featured"];
export declare const getGetFeaturedProductsQueryOptions: <TData = Awaited<ReturnType<typeof getFeaturedProducts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFeaturedProducts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getFeaturedProducts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetFeaturedProductsQueryResult = NonNullable<Awaited<ReturnType<typeof getFeaturedProducts>>>;
export type GetFeaturedProductsQueryError = ErrorType<unknown>;
/**
 * @summary Get featured products
 */
export declare function useGetFeaturedProducts<TData = Awaited<ReturnType<typeof getFeaturedProducts>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getFeaturedProducts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get all unique categories with counts
 */
export declare const getGetCategoriesUrl: () => string;
export declare const getCategories: (options?: RequestInit) => Promise<CategoryCount[]>;
export declare const getGetCategoriesQueryKey: () => readonly ["/api/products/categories"];
export declare const getGetCategoriesQueryOptions: <TData = Awaited<ReturnType<typeof getCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCategoriesQueryResult = NonNullable<Awaited<ReturnType<typeof getCategories>>>;
export type GetCategoriesQueryError = ErrorType<unknown>;
/**
 * @summary Get all unique categories with counts
 */
export declare function useGetCategories<TData = Awaited<ReturnType<typeof getCategories>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCategories>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get all unique brands
 */
export declare const getGetBrandsUrl: () => string;
export declare const getBrands: (options?: RequestInit) => Promise<string[]>;
export declare const getGetBrandsQueryKey: () => readonly ["/api/products/brands"];
export declare const getGetBrandsQueryOptions: <TData = Awaited<ReturnType<typeof getBrands>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBrands>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getBrands>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetBrandsQueryResult = NonNullable<Awaited<ReturnType<typeof getBrands>>>;
export type GetBrandsQueryError = ErrorType<unknown>;
/**
 * @summary Get all unique brands
 */
export declare function useGetBrands<TData = Awaited<ReturnType<typeof getBrands>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getBrands>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get a single product
 */
export declare const getGetProductUrl: (id: number) => string;
export declare const getProduct: (id: number, options?: RequestInit) => Promise<Product>;
export declare const getGetProductQueryKey: (id: number) => readonly [`/api/products/${number}`];
export declare const getGetProductQueryOptions: <TData = Awaited<ReturnType<typeof getProduct>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetProductQueryResult = NonNullable<Awaited<ReturnType<typeof getProduct>>>;
export type GetProductQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get a single product
 */
export declare function useGetProduct<TData = Awaited<ReturnType<typeof getProduct>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getProduct>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update a product (admin only)
 */
export declare const getUpdateProductUrl: (id: number) => string;
export declare const updateProduct: (id: number, updateProductInput: UpdateProductInput, options?: RequestInit) => Promise<Product>;
export declare const getUpdateProductMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateProduct>>, TError, {
        id: number;
        data: BodyType<UpdateProductInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateProduct>>, TError, {
    id: number;
    data: BodyType<UpdateProductInput>;
}, TContext>;
export type UpdateProductMutationResult = NonNullable<Awaited<ReturnType<typeof updateProduct>>>;
export type UpdateProductMutationBody = BodyType<UpdateProductInput>;
export type UpdateProductMutationError = ErrorType<unknown>;
/**
 * @summary Update a product (admin only)
 */
export declare const useUpdateProduct: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateProduct>>, TError, {
        id: number;
        data: BodyType<UpdateProductInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateProduct>>, TError, {
    id: number;
    data: BodyType<UpdateProductInput>;
}, TContext>;
/**
 * @summary Delete a product (admin only)
 */
export declare const getDeleteProductUrl: (id: number) => string;
export declare const deleteProduct: (id: number, options?: RequestInit) => Promise<SuccessResponse>;
export declare const getDeleteProductMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteProduct>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteProduct>>, TError, {
    id: number;
}, TContext>;
export type DeleteProductMutationResult = NonNullable<Awaited<ReturnType<typeof deleteProduct>>>;
export type DeleteProductMutationError = ErrorType<unknown>;
/**
 * @summary Delete a product (admin only)
 */
export declare const useDeleteProduct: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteProduct>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteProduct>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Get related products for a given product
 */
export declare const getGetRelatedProductsUrl: (id: number) => string;
export declare const getRelatedProducts: (id: number, options?: RequestInit) => Promise<Product[]>;
export declare const getGetRelatedProductsQueryKey: (id: number) => readonly [`/api/products/${number}/related`];
export declare const getGetRelatedProductsQueryOptions: <TData = Awaited<ReturnType<typeof getRelatedProducts>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRelatedProducts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getRelatedProducts>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetRelatedProductsQueryResult = NonNullable<Awaited<ReturnType<typeof getRelatedProducts>>>;
export type GetRelatedProductsQueryError = ErrorType<unknown>;
/**
 * @summary Get related products for a given product
 */
export declare function useGetRelatedProducts<TData = Awaited<ReturnType<typeof getRelatedProducts>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRelatedProducts>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List all user interest requests (admin only)
 */
export declare const getGetRequestsUrl: (params?: GetRequestsParams) => string;
export declare const getRequests: (params?: GetRequestsParams, options?: RequestInit) => Promise<BikeRequest[]>;
export declare const getGetRequestsQueryKey: (params?: GetRequestsParams) => readonly ["/api/requests", ...GetRequestsParams[]];
export declare const getGetRequestsQueryOptions: <TData = Awaited<ReturnType<typeof getRequests>>, TError = ErrorType<unknown>>(params?: GetRequestsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRequests>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getRequests>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetRequestsQueryResult = NonNullable<Awaited<ReturnType<typeof getRequests>>>;
export type GetRequestsQueryError = ErrorType<unknown>;
/**
 * @summary List all user interest requests (admin only)
 */
export declare function useGetRequests<TData = Awaited<ReturnType<typeof getRequests>>, TError = ErrorType<unknown>>(params?: GetRequestsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRequests>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Submit a bike interest request
 */
export declare const getCreateRequestUrl: () => string;
export declare const createRequest: (createRequestInput: CreateRequestInput, options?: RequestInit) => Promise<BikeRequest>;
export declare const getCreateRequestMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createRequest>>, TError, {
        data: BodyType<CreateRequestInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createRequest>>, TError, {
    data: BodyType<CreateRequestInput>;
}, TContext>;
export type CreateRequestMutationResult = NonNullable<Awaited<ReturnType<typeof createRequest>>>;
export type CreateRequestMutationBody = BodyType<CreateRequestInput>;
export type CreateRequestMutationError = ErrorType<unknown>;
/**
 * @summary Submit a bike interest request
 */
export declare const useCreateRequest: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createRequest>>, TError, {
        data: BodyType<CreateRequestInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createRequest>>, TError, {
    data: BodyType<CreateRequestInput>;
}, TContext>;
/**
 * @summary Get a single request (admin only)
 */
export declare const getGetRequestUrl: (id: number) => string;
export declare const getRequest: (id: number, options?: RequestInit) => Promise<BikeRequest>;
export declare const getGetRequestQueryKey: (id: number) => readonly [`/api/requests/${number}`];
export declare const getGetRequestQueryOptions: <TData = Awaited<ReturnType<typeof getRequest>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRequest>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getRequest>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetRequestQueryResult = NonNullable<Awaited<ReturnType<typeof getRequest>>>;
export type GetRequestQueryError = ErrorType<unknown>;
/**
 * @summary Get a single request (admin only)
 */
export declare function useGetRequest<TData = Awaited<ReturnType<typeof getRequest>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRequest>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update request status (admin only)
 */
export declare const getUpdateRequestStatusUrl: (id: number) => string;
export declare const updateRequestStatus: (id: number, updateRequestStatusInput: UpdateRequestStatusInput, options?: RequestInit) => Promise<BikeRequest>;
export declare const getUpdateRequestStatusMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateRequestStatus>>, TError, {
        id: number;
        data: BodyType<UpdateRequestStatusInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateRequestStatus>>, TError, {
    id: number;
    data: BodyType<UpdateRequestStatusInput>;
}, TContext>;
export type UpdateRequestStatusMutationResult = NonNullable<Awaited<ReturnType<typeof updateRequestStatus>>>;
export type UpdateRequestStatusMutationBody = BodyType<UpdateRequestStatusInput>;
export type UpdateRequestStatusMutationError = ErrorType<unknown>;
/**
 * @summary Update request status (admin only)
 */
export declare const useUpdateRequestStatus: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateRequestStatus>>, TError, {
        id: number;
        data: BodyType<UpdateRequestStatusInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateRequestStatus>>, TError, {
    id: number;
    data: BodyType<UpdateRequestStatusInput>;
}, TContext>;
/**
 * @summary Delete a request (admin only)
 */
export declare const getDeleteRequestUrl: (id: number) => string;
export declare const deleteRequest: (id: number, options?: RequestInit) => Promise<SuccessResponse>;
export declare const getDeleteRequestMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteRequest>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteRequest>>, TError, {
    id: number;
}, TContext>;
export type DeleteRequestMutationResult = NonNullable<Awaited<ReturnType<typeof deleteRequest>>>;
export type DeleteRequestMutationError = ErrorType<unknown>;
/**
 * @summary Delete a request (admin only)
 */
export declare const useDeleteRequest: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteRequest>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteRequest>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Get admin profile
 */
export declare const getGetAdminProfileUrl: () => string;
export declare const getAdminProfile: (options?: RequestInit) => Promise<AdminProfile>;
export declare const getGetAdminProfileQueryKey: () => readonly ["/api/admin/profile"];
export declare const getGetAdminProfileQueryOptions: <TData = Awaited<ReturnType<typeof getAdminProfile>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminProfile>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminProfile>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminProfileQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminProfile>>>;
export type GetAdminProfileQueryError = ErrorType<unknown>;
/**
 * @summary Get admin profile
 */
export declare function useGetAdminProfile<TData = Awaited<ReturnType<typeof getAdminProfile>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminProfile>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update admin profile
 */
export declare const getUpdateAdminProfileUrl: () => string;
export declare const updateAdminProfile: (updateAdminProfileInput: UpdateAdminProfileInput, options?: RequestInit) => Promise<AdminProfile>;
export declare const getUpdateAdminProfileMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminProfile>>, TError, {
        data: BodyType<UpdateAdminProfileInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateAdminProfile>>, TError, {
    data: BodyType<UpdateAdminProfileInput>;
}, TContext>;
export type UpdateAdminProfileMutationResult = NonNullable<Awaited<ReturnType<typeof updateAdminProfile>>>;
export type UpdateAdminProfileMutationBody = BodyType<UpdateAdminProfileInput>;
export type UpdateAdminProfileMutationError = ErrorType<unknown>;
/**
 * @summary Update admin profile
 */
export declare const useUpdateAdminProfile: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateAdminProfile>>, TError, {
        data: BodyType<UpdateAdminProfileInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateAdminProfile>>, TError, {
    data: BodyType<UpdateAdminProfileInput>;
}, TContext>;
/**
 * @summary Admin login
 */
export declare const getAdminLoginUrl: () => string;
export declare const adminLogin: (adminLoginInput: AdminLoginInput, options?: RequestInit) => Promise<AdminLoginResponse>;
export declare const getAdminLoginMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogin>>, TError, {
        data: BodyType<AdminLoginInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminLogin>>, TError, {
    data: BodyType<AdminLoginInput>;
}, TContext>;
export type AdminLoginMutationResult = NonNullable<Awaited<ReturnType<typeof adminLogin>>>;
export type AdminLoginMutationBody = BodyType<AdminLoginInput>;
export type AdminLoginMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Admin login
 */
export declare const useAdminLogin: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogin>>, TError, {
        data: BodyType<AdminLoginInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminLogin>>, TError, {
    data: BodyType<AdminLoginInput>;
}, TContext>;
/**
 * @summary Admin logout
 */
export declare const getAdminLogoutUrl: () => string;
export declare const adminLogout: (options?: RequestInit) => Promise<SuccessResponse>;
export declare const getAdminLogoutMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof adminLogout>>, TError, void, TContext>;
export type AdminLogoutMutationResult = NonNullable<Awaited<ReturnType<typeof adminLogout>>>;
export type AdminLogoutMutationError = ErrorType<unknown>;
/**
 * @summary Admin logout
 */
export declare const useAdminLogout: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof adminLogout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof adminLogout>>, TError, void, TContext>;
/**
 * @summary Get current authenticated admin
 */
export declare const getGetAdminMeUrl: () => string;
export declare const getAdminMe: (options?: RequestInit) => Promise<AdminProfile>;
export declare const getGetAdminMeQueryKey: () => readonly ["/api/admin/me"];
export declare const getGetAdminMeQueryOptions: <TData = Awaited<ReturnType<typeof getAdminMe>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getAdminMe>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetAdminMeQueryResult = NonNullable<Awaited<ReturnType<typeof getAdminMe>>>;
export type GetAdminMeQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get current authenticated admin
 */
export declare function useGetAdminMe<TData = Awaited<ReturnType<typeof getAdminMe>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getAdminMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get dashboard overview stats
 */
export declare const getGetDashboardStatsUrl: () => string;
export declare const getDashboardStats: (options?: RequestInit) => Promise<DashboardStats>;
export declare const getGetDashboardStatsQueryKey: () => readonly ["/api/stats/dashboard"];
export declare const getGetDashboardStatsQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardStats>>>;
export type GetDashboardStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get dashboard overview stats
 */
export declare function useGetDashboardStats<TData = Awaited<ReturnType<typeof getDashboardStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get daily activity data for charts
 */
export declare const getGetActivityDataUrl: (params?: GetActivityDataParams) => string;
export declare const getActivityData: (params?: GetActivityDataParams, options?: RequestInit) => Promise<ActivityDataPoint[]>;
export declare const getGetActivityDataQueryKey: (params?: GetActivityDataParams) => readonly ["/api/stats/activity", ...GetActivityDataParams[]];
export declare const getGetActivityDataQueryOptions: <TData = Awaited<ReturnType<typeof getActivityData>>, TError = ErrorType<unknown>>(params?: GetActivityDataParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getActivityData>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getActivityData>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetActivityDataQueryResult = NonNullable<Awaited<ReturnType<typeof getActivityData>>>;
export type GetActivityDataQueryError = ErrorType<unknown>;
/**
 * @summary Get daily activity data for charts
 */
export declare function useGetActivityData<TData = Awaited<ReturnType<typeof getActivityData>>, TError = ErrorType<unknown>>(params?: GetActivityDataParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getActivityData>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map