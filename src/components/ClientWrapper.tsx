"use client"
import dynamic from 'next/dynamic'
const DynamicComponentWithNoSSR = dynamic(
    () => import('@/components/Home'),
    { ssr: false }
)
export default function ClientWrapper() {
    return <DynamicComponentWithNoSSR />
}