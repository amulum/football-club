import React from 'react'
import '../../styles/header.css'

/** Return Responsive Header Component
 * 
 * @param {*} props no props required for this component
 * but we can set it dynamic menu or base on some data later if needed
 */
const Header = (props) => {
  return (
    <div class="header">
    <h2 class="logo">Football Club</h2>
    <input type="checkbox" id="chk"/>
    <label for="chk" class="show-menu-btn">
      <i class="fas fa-ellipsis-h"></i>
    </label>

    <ul class="menu">
      <a href="/">Home</a>
      <a href="/competition/2001">Trending League</a>
      <a href="/club/73">Trending Club</a>
      <label for="chk" class="hide-menu-btn">
        <i class="fas fa-times"></i>
      </label>
    </ul>
  </div>
  )
}

export default Header