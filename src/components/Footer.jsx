import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <ul className='footer__description'>
        <li>
          Адрес:<br></br>
          Московский проспект, 22
        </li>
        <li>
          График работы:<br></br>
          Пн-Вс с 11:00 до 21:00
        </li>
        <li>
          Телефон:<br></br>
          8 (812) 690-10-10
        </li>
        <li>
          Email:<br></br>
          yogaspb@gmail.com
        </li>
      </ul>
      <div className='footer__media'>
        <a>
          <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.7772 13.3791C24.71 13.2607 24.2943 12.311 22.2942 10.3589C20.2003 8.31472 20.4815 8.64665 23.0036 5.11213C24.5397 2.95954 25.1538 1.64498 24.9616 1.08301C24.7787 0.547324 23.649 0.688639 23.649 0.688639L19.8924 0.711644C19.8924 0.711644 19.6143 0.672207 19.4065 0.80202C19.2049 0.930189 19.0752 1.22596 19.0752 1.22596C19.0752 1.22596 18.4798 2.89217 17.686 4.3086C16.0125 7.29758 15.3421 7.45533 15.0686 7.26965C14.4327 6.83748 14.592 5.53114 14.592 4.60438C14.592 1.70742 15.0093 0.499671 13.7779 0.187464C13.3685 0.0839423 13.0685 0.014928 12.0231 0.00342559C10.6824 -0.0113632 9.54636 0.00835518 8.90413 0.338638C8.47597 0.558826 8.14626 1.05014 8.34784 1.07808C8.59629 1.11258 9.15883 1.23747 9.45729 1.6647C9.84326 2.21517 9.8292 3.45414 9.8292 3.45414C9.8292 3.45414 10.0511 6.86378 9.31197 7.28772C8.80412 7.57857 8.10876 6.98537 6.61646 4.27245C5.85234 2.88395 5.27417 1.34756 5.27417 1.34756C5.27417 1.34756 5.16323 1.06165 4.96478 0.908828C4.72413 0.723146 4.38661 0.663991 4.38661 0.663991L0.814471 0.686996C0.814471 0.686996 0.278494 0.703428 0.0816048 0.948265C-0.093408 1.16681 0.0675413 1.61705 0.0675413 1.61705C0.0675413 1.61705 2.86462 8.49711 6.03048 11.9659C8.93538 15.1455 12.2325 14.9368 12.2325 14.9368H13.7264C13.7264 14.9368 14.178 14.8842 14.4077 14.623C14.6202 14.383 14.6124 13.9328 14.6124 13.9328C14.6124 13.9328 14.5827 11.8246 15.514 11.514C16.4312 11.2084 17.6095 13.5516 18.858 14.4537C19.8018 15.1356 20.519 14.9861 20.519 14.9861L23.8584 14.9368C23.8584 14.9368 25.6054 14.8234 24.7772 13.3791Z" fill="white" />
          </svg>
        </a>
        <a>
          <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.7143 8.89167C27.343 8.75715 28.4478 8.01589 28.873 7.01011C28.2854 7.37142 26.4616 7.76534 25.4544 7.39019C25.405 7.15327 25.3499 6.92823 25.2958 6.72506C24.5283 3.9038 21.9005 1.63088 19.1471 1.90546C19.3699 1.81542 19.5958 1.73159 19.8211 1.65633C20.1242 1.54765 21.9023 1.25802 21.6223 0.629686C21.3863 0.077015 19.2138 1.04736 18.8048 1.17419C19.3447 0.970887 20.2378 0.621181 20.3334 0C19.5062 0.113599 18.694 0.505153 18.0665 1.0745C18.2931 0.830356 18.4649 0.532827 18.5014 0.212618C16.2949 1.62379 15.006 4.46882 13.9629 7.2286C13.1438 6.43395 12.4179 5.80818 11.7666 5.4607C9.93964 4.47989 7.75519 3.45656 4.3261 2.1822C4.22085 3.31798 4.88719 4.82818 6.80728 5.83247C6.39128 5.77672 5.63054 5.90112 5.02211 6.04698C5.26989 7.34813 6.07911 8.42013 8.26983 8.93851C7.26866 9.00466 6.75125 9.23274 6.28232 9.72432C6.73831 10.6293 7.851 11.6943 9.8526 11.4757C7.62722 12.4359 8.94521 14.2141 10.756 13.9489C7.66693 17.1431 2.79666 16.9084 0 14.2367C7.3019 24.1975 23.1745 20.1275 25.54 10.5334C27.3122 10.5485 28.354 9.91885 29 9.22464C27.9789 9.39811 26.499 9.21883 25.7143 8.89167Z" fill="white" />
          </svg>

        </a>
        <a>
          <svg width="10" height="21" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.16145 4.06608C2.16145 4.59517 2.16145 6.9567 2.16145 6.9567H0V10.4914H2.16145V20.9951H6.60152V10.4916H9.58101C9.58101 10.4916 9.86005 8.79681 9.99532 6.94367C9.60752 6.94367 6.61831 6.94367 6.61831 6.94367C6.61831 6.94367 6.61831 4.88732 6.61831 4.52688C6.61831 4.16566 7.10241 3.67978 7.58088 3.67978C8.05846 3.67978 9.06642 3.67978 10 3.67978C10 3.19853 10 1.53571 10 1.26263e-08C8.7537 1.26263e-08 7.33582 1.26263e-08 6.71082 1.26263e-08C2.05169 -0.000244053 2.16145 3.53793 2.16145 4.06608Z" fill="white" />
          </svg>

        </a>
      </div>
      <div className='footer__copyright'>
        <p>© 2018   Все права защищены</p>
        <p>Yogaspb.com</p>
      </div>
    </footer>
  );
}
