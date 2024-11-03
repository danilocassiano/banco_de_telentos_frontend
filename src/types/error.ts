"use client"

export interface IErrorResponse {
    status: 400 | 403 | 401 | 500 | 404,
    message: string
    errors?: Array<TErrorConstraint>
}

export type TErrorConstraint = {
    property: string,
    constraints: string[],
}