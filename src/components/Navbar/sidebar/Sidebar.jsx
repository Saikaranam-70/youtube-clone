import React from 'react'
import './sidebar.css'
import educate from '/public/educate.jpg'
import gaming from '/public/gaming.jpg'
import naanwesana from '/public/naanwesana.jpg'
import thinkdeep from '/public/thinkdeep.jpg'
const Sidebar = ({sideBar,category,setCategory}) => {
  return (
    <div className={`Sidebar ${sideBar?"":"small-sidebar"}`}>
      <div className="Short-Cut">
        <div className={`Side-Links ${category ===0?"active":""}`} onClick={()=>setCategory(0)}>
        <i class="fa-solid fa-house"></i><p>Home</p>
        </div>
        <div className={`Side-Links ${category ===20?"active":""}`} onClick={()=>setCategory(20)}>
        <i class="fa-solid fa-gamepad"></i><p>Gaming</p>
        </div>
        <div className={`Side-Links ${category ===2?"active":""}`} onClick={()=>setCategory(2)}>
        <i class="fa-solid fa-car"></i><p>Automobiles</p>
        </div>
        <div className={`Side-Links ${category ===17?"active":""}`} onClick={()=>setCategory(17)}>
        <i class="fa-solid fa-volleyball"></i><p>Sports</p>
        </div>
        <div className={`Side-Links ${category ===24?"active":""}`} onClick={()=>setCategory(24)}>
        <i class="fa-solid fa-bolt"></i><p>Entertainment</p>
        </div>
        <div className={`Side-Links ${category ===28?"active":""}`} onClick={()=>setCategory(28)}>
        <i class="fa-solid fa-microchip"></i><p>Technology</p>
        </div>
        <div className={`Side-Links ${category ===10?"active":""}`} onClick={()=>setCategory(10)}>
        <i class="fa-solid fa-music"></i><p>Music</p>
        </div>
        <div className={`Side-Links ${category ===22?"active":""}`} onClick={()=>setCategory(22)}>
        <i class="fa-solid fa-blog"></i><p>Blogs</p>
        </div>
        <div className={`Side-Links ${category ===25?"active":""}`} onClick={()=>setCategory(25)}>
        <i class="fa-solid fa-newspaper"></i><p>News</p>
        </div>
        <hr />
      </div>
      <div className="Subscribed-List">
        <h3>Subscribed</h3>
        <div className="Side-Links">
          <img src={educate} alt="" /><p>Educate</p>
        </div>
        <div className="Side-Links">
          <img src={gaming} alt="" /><p>GamingWithSai</p>
        </div>
        <div className="Side-Links">
          <img src={naanwesana} alt="" /><p>Naa Anwesana</p>
        </div>
        <div className="Side-Links">
          <img src={thinkdeep} alt="" /><p>ThinkDeep</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
