import React from 'react';
import MyGallery from './MyGallery';
import Navbar from './Navbar';
import Location from './Location';
import ContactForm from './ContactForm';
import PetList from './PetList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Container() {


  
  const images = [];


  return (
    <div className="container">

      <fieldset>
      <header className='Header'>
        <legend className='home-section'>AZIL ZA ŽIVOTINJE
        </legend>
      </header>
      </fieldset>

      <br/>
      <br/>

      <h2 className='Uvod'>Uvjerenje kako životinje imaju pravo da se prema njima odnosimo s poštovanjem, pravo na tjelesni integritet i pravo na slobodu kretanja.
      <br/>
      Kršenje ovih prava nije moralno opravdano, bez obzira na potencijalne benefite koje ljudi smatraju da imaju.
      <br/>
      Zagovornici prava životinja vjeruju da je pogrešno životinje tretirati kao potrošnu robu, kao 'sredstvo prema cilju', jednako kao što je iz istih razloga pogrešno tretirati na isti način i ljude.
      <br/>
      </h2>

      <br/>
      <br/>

      <MyGallery images={images} />

      <br />
      <br />

    <div className='Onama'>
      <strong>
        <p id='about-section'>O nama:</p>
      </strong>
<div>
  
      <p>
        <b>
       Azil za životinje predvodi g. Lovre Dellorco, sa svojim desetogodišnjim iskustvom rada u zološkom vrtu. Njemu se 2009. godine pridružio njegov dugogodišnji prijatelj Ivan Borzić. On nema nikakvog radnog iskustva već je veliki ljubitelj životinja, te pravi velike prekretnice u djelovanju trvrtke. Potom nas narodne novine proglase azilom broj jedan... 
        </b>
</p>

</div>
</div>

<br/>
<br/>

<img className='😀😀' src='https://dalmatinskiportal.hr/sadrzaj/fotografije/2022-11-16-20-53-73932479/393101263-495110247-970059923.JPG' alt='dva prijatelja' />

<br/>
<br/>

<strong>
<h2 id='list-section'>Popis životinja u azilu</h2>
</strong>

<PetList />

<br/>
<br/>

<strong>
<p id="donations-section">Donacije:</p>
</strong>

<br/>
<br/>

<strong>
<p id="notifications-section">Obavijesti:</p>
</strong>

<br/>
<br/>

<p className='Kraj'>
Rad s ciljem poboljšanja zdravlja i dobrobiti životinja koji je usmjeren djelovanju prema poboljšavanju uvjeta u kojima se životinje iskorištavaju za ljudski profit. Korištenje životinja za profit uključuje nekoliko, ako ne i sve, od sljedećeg: zarobljeništvo, socijalnu deprivaciju, sakaćenje, manipulaciju reprodukcije, nedostojne postupke i preranu smrt. Kad bi čovjek, poradi profita, isto činio nad drugim čovjekom, nitko ne bi prihvatio tvrdnju da je činitelj zabrinut za dobrobit osobe koja je ozlijeđena. Situacija nije ništa drukčija kad ljudi koriste i ubijaju životinje poradi profita, tvrdeći da su zabrinuti za njihovu dobrobit!
</p>


<br/>
<br/>

<strong>
<p id='contact-section'>
<div className='ContactLocation'>
  <ContactForm />

  

  <Location />
  </div>
  <br/>
  
KONTAKT:
</p>
</strong>
<br/>
<p>
Podrška - 091 3333 221
<br/>
Informacije - 091 0700 211
<br/>
azil.split@gmail.hr
<br/>
<br/>
</p>
<p>
Azil za životinje Split d.o.o
<br/>
<br/>
OIB: 12746433055
<br/>
Lokacija: Lovretska 13, 21000, Split
</p>

<div className='icons'>
  <FontAwesomeIcon icon={faInstagram} />
  <FontAwesomeIcon icon={faFacebook} />
  <FontAwesomeIcon icon={faTwitter} />
  <FontAwesomeIcon icon={faWhatsapp} />
</div>

<br/>

<Navbar />
 </div>
    )
  }

export default Container
