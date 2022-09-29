import React, { useState } from 'react'
import { Modal } from 'antd'

import styles from './Header.module.css'

import t1 from '../../assets/telegram.png'
import i1 from '../../assets/instagram.png'
import y1 from '../../assets/youtube.png'
import logo from '../../assets/logo.png'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <div className={styles.headerShadow}>
    <div className={styles.wrapper}>
      <div className={styles.social_networks}>
        <span>Biz ijtimoiy tarmoqlarda</span>
        <div>
          <a href="https://t.me/RoboticsLab" target="_blank" rel="noreferrer">
            {' '}
            <img src={t1} alt="" />
          </a>
          <a
            href="https://www.instagram.com/roboticslabuz/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={i1} alt="" />
          </a>
          <a
            href="https://www.youtube.com/c/ROBOTVuz"
            target="_blank"
            rel="noreferrer"
          >
            <img src={y1} alt="" />
          </a>
        </div>
      </div>

      <div className={styles.contactUs}>
        <span>Biz bilan bog'lanish </span>
        <a className={styles.firstA} href="tel://998909701070"> +998 33 970 10 70, </a>
        <a href="tel://998953401070"> +998 95 340 10 70 </a>
        yoki
        <button className={styles.btn2} onClick={showModal}>Kursga yozilish</button>
      </div>
      <Modal
        title="Xurmatli foydalanuvchi"
        open={isModalOpen}
        onOk={handleOk}
        okText={'Davom etish'}
        onCancel={handleCancel}
        cancelText={'Bekor qilish'}
      >
        <p>
          Saytimizga tashrifingiz uchun minnatdormiz, o'quv markazimiz haqida
          batafsil ma'lumot olish uchun iltimos ismingiz va telefon raqamingizni
          kiriting
        </p>
        <form className={styles.form}>
          <span> Ism va familiyangiz</span>
          <input
            type={'text'}
            placeholder="Ismingizni kiriting"
            required="required"
          />
          <span> Ism va familiyangiz</span>
          <input
            type={'text'}
            placeholder="Ismingizni kiriting"
            required="required"
          />
          <span className={styles.select}>Kursni tanlang</span>
          <select>
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
        </form>
      </Modal>
    </div>
    <div className={styles.endHeader}><img src={logo} alt=''/> Roboticslab.uz</div>
    </div>
  )
}

export default Header
