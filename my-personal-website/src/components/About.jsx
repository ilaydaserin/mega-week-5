import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './About.css';
function About(){
    return(<>
    <div id="about">
    <div className="about-header"><h1>About Me</h1></div>
    <div className="line"></div>
    
    <div className="info">
        <img src="/img/about-bg.jpeg" alt="" />
        <div className='info-bio'>
            <h2>Peki kimdir bu İlayda?</h2>
            <p>2002 yılında Konya'da dünyaya geldim. Çocukluğumdan beri matematiğe ve bilime ilgi duyuyorum. Bilgisayarla ve yazılımla biraz geç tanıştım ama tanışınca hemen kaynaştık diyebilirim. Algoritmalar yaratmak ve bu algoritmalarla neler yapabileceğimi keşfetmek bana büyük bir haz vermişti. Yolculuğuma hazırlık senemde python ile başladım. Yazılımın temellerini onunla öğrendim. Daha sonra bölümümün gereği olan C ve C++ ile devam ettim. Fakat bunlar bana bir yerde yetmiyordu. Yazdığım kodlar sonucu oluşan güzellikleri çevrem ile de paylaşmak istedim. Bu yüzden web alanına yöneldim. Birkaç eğitim videosu sonunda HTML, CSS ve JavaScript öğrendim. Bunun yanında mobil programlama dersi alıp Java ile de birkaç mobil uygulama geliştirdim. Daha sonra Üretken akademinin başlatmış olduğu mega eğitim programına katıldım ve bütün şuan bilgilerimi harmanlayarak react öğreniyorum. Eğitim sonunda Frontend developer olmayı hedefliyorum. </p>
        </div>
    </div>
    
    </div>
    </>)
}
export default  About