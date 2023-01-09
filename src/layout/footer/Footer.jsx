import React from 'react'
import s from './footerStyle.module.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={s.footer}>
        <div className={s.footer__box + " container"}>
            <div className={s.footer__logo}>
                <Link to="">
                    <img src="/images/logo.png" alt="pic" />
                </Link>
            </div>
            <div className={s.footer__link}>
                Powered by <a href="https://github.com/kewaaaaa">kewaaaaa</a> & <a href="https://www.albison.uz/">Albison Group</a>
            </div>
        </div>
    </div>
  )
}

export default Footer