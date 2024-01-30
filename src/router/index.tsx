import React from 'react'
import MainPage from '../pages/MainPage/MainPage'
import ClientPage from '../pages/ClientPage/ClientPage'

export enum routerPaths {
	main = '/test-akticom',
	client = '/test-akticom/client/:id',
}

export interface IRoute {
	path: routerPaths
	element: React.ReactNode
}

export const routes: IRoute[] = [
	{ path: routerPaths.main, element: <MainPage /> },
	{ path: routerPaths.client, element: <ClientPage /> },
]
