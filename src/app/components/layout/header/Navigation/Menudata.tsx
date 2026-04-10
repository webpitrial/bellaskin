import { servicesData } from '@/lib/data/services'; 

export const headerData: any[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' }, 
    { 
        label: 'Services', 
        href: '/services', // Ensure this points to the main page
        children: servicesData.map(service => ({
            title: service.title,
            desc: service.menuDescription,
            href: `/services/${service.slug}`
        }))
    },
    { label: 'Contact', href: '/contact' },
];