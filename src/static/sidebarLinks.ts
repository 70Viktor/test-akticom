import { routerPaths } from '../router'

interface ISidebarLink {
	label: string
	href: string
}
export const sidebarLinks: ISidebarLink[] = [
	{ label: 'Home', href: routerPaths.main },
	{ label: 'About', href: routerPaths.main },
	{ label: 'Works', href: routerPaths.main },
	{ label: 'Blog', href: routerPaths.main },
	{ label: 'Gallery', href: routerPaths.main },
	{ label: 'Services', href: routerPaths.main },
	{ label: 'Contacts', href: routerPaths.main },
]
