import { useRouter } from 'next/router';
import type { HTMLAttributeAnchorTarget } from 'react';
import React from 'react';
 /* eslint-disable react/display-name */
export interface MainLinkProps {
    href?: string;
    target?: HTMLAttributeAnchorTarget | undefined;
    className?: string;
    children: React.ReactNode;
}

const MainLink: React.FC<MainLinkProps> = React.forwardRef(
    (
        { href, target, className, children }: MainLinkProps,
        ref: React.Ref<HTMLAnchorElement> | undefined,
    ) => {
        const router = useRouter();

        const handleClick = React.useCallback(
            async (e: React.SyntheticEvent) => {
                if (href) {
                    e.preventDefault();
                    return await router.push(href);
                }
            },
            [router, href],
        );

        return (
            <a
                ref={ref}
                className={className}
                target={target}
                href={href || '/'}
                onClick={handleClick}
            >
                {children}
            </a>
        );
    },
);

MainLinK.displayName = 'MyComponent';

export default MainLink;