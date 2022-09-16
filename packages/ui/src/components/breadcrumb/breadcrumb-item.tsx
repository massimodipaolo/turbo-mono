import { getClassNames } from '@websolute/core';
import React, { ReactNode, useMemo } from 'react';
import Link, { Props as LinkBasicProps } from '../link/link';
import { pickChild } from '../popover/popover-collections';
import BreadcrumbSeparator from './breadcrumb-separator';

interface Props {
  href?: string
  nextLink?: boolean
  onClick?: (event: React.MouseEvent) => void
  className?: string,
  children?: ReactNode,
}

type NativeAttrs = Omit<React.AnchorHTMLAttributes<any>, keyof Props>;

type NativeLinkAttrs = Omit<NativeAttrs, keyof LinkBasicProps>;

export type BreadcrumbItemProps = Props & NativeLinkAttrs;

const BreadcrumbItem = React.forwardRef<HTMLAnchorElement, React.PropsWithChildren<BreadcrumbItemProps>>(({
  nextLink = false,
  className = '',
  href,
  onClick,
  children,
  ...props
}: BreadcrumbItemProps, ref: React.Ref<HTMLAnchorElement>) => {
  const isLink = useMemo(() => href !== undefined || nextLink, [href, nextLink]);
  const [withoutSepChildren] = pickChild(children, BreadcrumbSeparator);

  const clickHandler = (event: React.MouseEvent) => {
    onClick && onClick(event);
  };

  const classNames = getClassNames('breadcrumb-item', className);

  if (!isLink) {
    return (
      <span className={classNames} onClick={clickHandler}>
        {withoutSepChildren}
      </span>
    );
  }

  return (
    <Link className={classNames} href={href} onClick={clickHandler} ref={ref} {...props}>
      {withoutSepChildren}
    </Link>
  );
});

BreadcrumbItem.displayName = 'BreadcrumbItem';

export default BreadcrumbItem;
