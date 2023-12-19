import React from 'react'

export default function Header() {
  return (
    <div className="heder">
    <div className="search-wrapper">
      <form action="" method="post" className="search">
        <input type="search" name="" placeholder="Поиск..." className="input" />
        <input type="submit" name="" value="" className="submit" />
      </form>
    </div>
    <div className="notice_and_sign_in">
      <div className="notice">
        <button>
            <img src="external/notice.svg" alt="уведомления"/>
        </button>
      </div>
      <div className="sign_in">
      <button>Войти</button>
      </div>
    </div>
</div>
  )
}
