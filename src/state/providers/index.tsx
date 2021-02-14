import React, { PropsWithChildren } from 'react'
import { PostProvider } from '../post'
import { UserProvider } from '../user'

const ContextProviderComposer
    = ({ contextProviders, children }: { contextProviders: JSX.Element[], children: JSX.Element }) => {
        return contextProviders.reduceRight((children: JSX.Element, parent: JSX.Element) =>
            React.cloneElement(parent, { children }), children)
    }

const Provider = (props: PropsWithChildren<any>, ...rest: PropsWithChildren<any>) => (
    <ContextProviderComposer contextProviders={[
        <PostProvider key={0} children={rest} />,
        <UserProvider key={1} children={rest} />,
    ]}>
        {props.children}
    </ContextProviderComposer>
)

export default Provider
