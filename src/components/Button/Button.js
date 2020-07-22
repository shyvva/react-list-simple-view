import React from 'react';
import styles from './Button.module.scss'

//props.children pobiera elementy wewnątrz 
//selektora do komponentu, dzięki temu można je wykorzystać
// wykorzystuje go w Form.js podając komponent Button


// Jeśli do naszego buttona został dodany props href wtedy mamy zwrócić link, a jeśli podany
// nie zostanie href to musi nam wyjśc button
// {href ? a : button }


const Button = ({ children, href }) => (
  <>
    {
      href ? (
        <a
          href={href}
          target="_blank"
          className={styles.button}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
          <button className={styles.button}>
            {children}
          </button>
        )

    }
  </>
);

export default Button