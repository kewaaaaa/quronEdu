import React, { useState } from 'react'
import axios from 'axios'

const QuranPage = () => {

    const [surah, setSurah] = useState({})

    axios.get('http://api.alquran.cloud/v1/quran/ar.alafasy').then((res) => {
        const data = res.data.data.surahs
        // console.log(res);
        // console.log(data);
        // data.map((prod) => console.log(prod.name))
        setSurah({ ...data })
    })

    // console.log(surah.data);

  return (
    <div>
        <ul>
       {surah.data.map((prod) => console.log(prod.name))}
        </ul>
    </div>
  )
}

export default QuranPage