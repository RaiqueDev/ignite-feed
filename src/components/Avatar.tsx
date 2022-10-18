import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

export const Avatar = ({ hasBorder = true, ...props }: AvatarProps) => {
  return (
    <>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        {...props}
        />
    </>
  );
}