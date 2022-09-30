import React from 'react'

import styles from './Main.module.css'

const Main = () => {
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
        <select style={{width:'100%', overflow:'scroll'}}>
          <option value={0}>C++</option>
          <option value={1}>C# Dotnet kurslari</option>
          <option value={2}>Robototexnika</option>
          <option value={3}>Robokids</option>
          <option value={4}>Algoritmlash</option>
          <option value={5}>IELTS</option>
          <option value={6}>General English</option>
          <option value={7}>Kiberxavfsizlik</option>
          <option value={8}>videomakerlik</option>
          <option value={9}>Rus tili</option>
          <option value={10}>Arab tili</option>
          <option value={11}>Java</option>
        </select>
        <input type="submit" value='Davom etish' className={styles.btn} />
      </form>
    </div>
  )
}

export default Main
