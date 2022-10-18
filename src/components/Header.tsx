import styles from './Header.module.css';

import IgniteLogo from '../assets/IgniteLogo.svg';

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <img src={IgniteLogo} alt="Logo Ignite Feed" />
          <strong>Ignite Feed</strong>
        </div>
      </header>
    </>
  );
}