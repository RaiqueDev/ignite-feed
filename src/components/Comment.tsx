import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
 content: string;
 onDeleteComment: (comment: string) => void;   
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  }

  const handleLikeComment = () => {
    setLikeCount(likeCount + 1);
  }

  return (
    <>
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/RaiqueDev.png" />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header >
              <div className={styles.authorAndTime}>
                <strong>Raique Ramos</strong>

                <time title="13 de Outubro ás 20:35h" dateTime="2022-10-13 08:13:30">
                  Cerca de 1h atrás
                </time>
              </div>

              <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={20} />
              </button>
            </header>

            <p>{content}</p>
          </div>

          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp size={20} />

              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}