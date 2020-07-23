import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, href, secondary, ...props }) => {

  const buttonClass = secondary ? styles.secondary : styles.button;
  // tworzenie stałej buttonClass pozwoliło mi stworzyć alternatywny wygląd buttona
  return (
    <>
      {
        href ? (
          <a
            href={href}
            target="_blank"
            className={buttonClass}
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ) : (
            <button className={buttonClass} {...props}>
              {children}
            </button>
          )
      }
    </>
  )
};

export default Button;