import styles from './Sidebar.module.css';

import { PencilLine } from 'phosphor-react';

import { Avatar } from './Avatar';

export const Sidebar = () => {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1665510393390-287ac26e315f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        />

        <div className={styles.profile}>
          <Avatar hasBorder src="https://github.com/RaiqueDev.png" />

          <strong>Raique Ramos</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  )
}
