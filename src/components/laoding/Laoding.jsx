import React from 'react'
import s from './laodingStyle.module.scss'

function Laoding() {
  return (
    <div className={s.body}>
    <div className={s.container}>
<div className={s.moon}>
<div className={s.light}></div>
<div className={s.texture}></div>
<div className={s.sphere}></div>
</div>
<div className={s.moon}>
<div className={s.light}></div>
<div className={s.texture}></div>
<div className={s.sphere}></div>
</div>
<div className={s.moon}>
<div className={s.light}></div>
<div className={s.texture}></div>
<div className={s.sphere}></div>
</div>
</div>
</div>
  )
}

export default Laoding