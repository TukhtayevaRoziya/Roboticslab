import React, { useState } from 'react'
import { Modal } from 'antd'

import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import telegram from '../../assets/telegram.png'
import youtube from '../../assets/youtube.png'

import styles1 from './Footer.module.css'
import styles from '../header/Header.module.css'
import Yandex from './Yendex'

const Footer = () => {
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
    <footer className={styles1.body}>
      <div className={styles1.block_1}>
        <div className={styles.endHeader}>
          <img src={logo} alt="" /> Roboticslab.uz
        </div>
        <p>
          O'quv laboratoriyamizga barcha O'zbekiston yoshlari yozilishlari va
          qatnashishlari mumkin bo'lib, bunda eng yuqori darajadagi mutaxasislar
          jalb qilingan.
        </p>
        <button
          className={styles1.btn2 + ' ' + styles.btn2}
          onClick={showModal}
        >
          Kursga yozilish
        </button>

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
            batafsil ma'lumot olish uchun iltimos ismingiz va telefon
            raqamingizni kiriting
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
      <div className={styles1.block_2}>
        <h1>Biz bilan bog'lanish</h1>
        <h4>Telefon raqam:</h4>
        <div>
          <a href="tel://998909701070">+998 33 970 10 70</a>,
          <a href="tel://998909701070">+998 95 340 10 70</a>
        </div>

        <h4>Manzil:</h4>
        <h5>
          Toshkent sh. Yunusobod, Bodomzor masjidi ro'parasi 1-uy. 2-qavatli
          bino
        </h5>
        <h4>Ijtimoiy tarmoqlar:</h4>
        <a
          className={styles1.social}
          href="https://t.me/RoboticsLab"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="" /> Telegram
        </a>
        <a
          className={styles1.social}
          href="https://www.instagram.com/roboticslabuz/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="" /> Instagram
        </a>
        <a
          className={styles1.social}
          href="https://www.youtube.com/c/ROBOTVuz"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} alt="" /> Youtube
        </a>
      </div>
      <div className={styles1.block_3}>
        <h1>Biz xaritada</h1>
        <div className={styles1.map}>
          <Yandex />
        </div>
      </div>
    </footer>
  )
}

export default Footer
