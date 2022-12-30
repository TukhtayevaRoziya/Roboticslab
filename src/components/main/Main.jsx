import React from 'react'

import styles from './Main.module.css'

const Main = () => {
  const data = [
    { id: 0, name: 'C++' },
    { id: 0, name: 'C++' },
    { id: 1, name: 'C# Dotnet kurslari' },
    { id: 2, name: 'Robototexnika' },
    { id: 3, name: 'Robokids' },
    { id: 4, name: 'Algoritmlash' },
    { id: 5, name: 'IELTS' },
    { id: 6, name: 'General English' },
    { id: 7, name: 'Kiberxavfsizlik' },
    { id: 8, name: 'videomakerlik' },
    { id: 9, name: 'Rus tili' },
    { id: 10, name: 'Arab tili' },
    { id: 11, name: 'Java' },
    { id: 12, name: 'Matematika' },
    { id: 13, name: 'Web dasturlash kursi' },
    { id: 14, name: 'SMM pro' },
    { id: 15, name: 'Python' },
    { id: 16, name: 'iOS kursi' },
    { id: 17, name: 'Android kursi' },
  ]

  const dataMap = data.map((d) => (
    <option key={d.id} value={d.id}>
      {d.name}
    </option>
  ))

  return (
    <div className={styles.body}>
      <h2>Kursga yozilish</h2>
      <h4>Xurmatli foydalanuvchi</h4>
      <h5>
        Saytimizga tashrifingiz uchun minnatdormiz, o'quv markazimiz haqida
        batafsil ma'lumot olish uchun iltimos ismingiz va telefon raqamingizni
        kiriting
      </h5>
      <form className={styles.form}>
        <span> Ism va familiyangiz</span>
        <input type={'text'} placeholder="Ismingizni kiriting" required />
        <span> Ism va familiyangiz</span>
        <input type={'text'} placeholder="Ismingizni kiriting" required />
        <span className={styles.select}>Kursni tanlang</span>
        <select style={{ width: '100%', overflow: 'scroll' }}>{dataMap}</select>
        <input type="submit" value="Davom etish" className={styles.btn} />
      </form>
    </div>
  )
}

export default Main
