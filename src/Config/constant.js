import React from 'react'
import { IndexRoutes, SubRoutes } from './IndexRoutes'

export const APPS = [
    {
        subdomain: 'www',
        app: IndexRoutes,
        main: true,
    },
    {
        subdomain: 'admin',
        app: SubRoutes,
        main: false,
    }
]