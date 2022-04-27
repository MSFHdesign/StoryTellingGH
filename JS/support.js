/* Så er der variabler */
var password; 
var pass1="meget_hemmeligt"; /* Det er koden */

password=prompt('Hva\' koden?','Den er meget hemmeligt'); /* Det er userinput til at skrive koden  */
if (password==pass1) {  /* Hvis man er værdi til at forsætte */
alert('Koden er ...korrekt! Du er værdig til at forsætte'); 
document.getElementById('wrap').innerHTML = `


<h1>Supportside</h1> 
<nav id="navbar"></nav> <!-- Navbar-->
<div class="flexBox"> <!-- Flexbox kontroltårn, genbruges flere gange -->
<div id="SoMeLogo"> <!-- SoMe logo m. links -->
    <a href="https://www.facebook.com/akademiaarhus/"><img src="supportimg/FBlogo.png" alt="Facebook meget flotte logo" class="SoMelogo"> </a>
    
    <a href="https://www.instagram.com/erhvervsakademiaarhus/"><img src="supportimg/IGlogo.png" alt="Instagraaaam her er duuuu" class="SoMelogo"> </a>
    <a href="tiktok.com/EAAA"><img src="supportimg/TTlogo.png" alt="Hva helehulen er tiktok? Åbenbart noget ed unge bruger" class="SoMelogo"></a>
</div>
<!-- Sweetspot billede-->
<div id="sweetSpot"> <img src="" alt=""></div>
</div>
    <!-- content kalender med hvor og hvornår -->
<div id="contentCalender">

</div>
<!-- UCG -->
    <fieldset id="UCG">
        <legend>UCG</legend>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil, ad distinctio fugiat repudiandae cumque, a dignissimos aliquam odio ipsa assumenda, fuga quidem accusamus aspernatur maxime officiis omnis? Commodi, velit!
      </fieldset>
    
<!-- SEO keywords-->
<fieldset id="keyWords">
    <legend>Keywords</legend>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt reiciendis natus molestiae culpa? Molestias alias molestiae odit, aliquam consequatur excepturi. Tempora minus nulla magnam molestiae illo tempore minima natus placeat.
</fieldset>

<div class="flexBox"> <!-- ./flex -->
    <!-- Tone of voice -->
    <img src="" alt="">
    <!-- Design manual-->
    <img src="" alt="">
</div>



<!--Facebook Opslag-->
<fieldset id="Facebook">
    <legend>Facebook post</legend>
    <div class="flexBox"> <!-- ./flex -->
    <img src="supportimg/FB-less.png" alt="Facebook post, der visere det første man ser når der scrolles" id="FB1" class="FBpic">
    <img src="supportimg/FB-mere.png" alt="når der trykkes på mere så kan den fulde tekst læses">
    </div>
    </fieldset>

<!--Instagram opslag -->

<fieldset id="Instagram">
    <legend>Instagram post</legend>
    <div class="flexBox"> <!-- ./flex -->
    <img src="supportimg/insta1.png" alt="De fem gode råd" id="IG1" class="IGpic">
    <img src="supportimg/insta3.png" alt="Instagram post nummer 3" id="IG3" class="IGpic">  
    <img src="supportimg/insta2.png" alt="Instagram post nummer 2" id="IG2" class="IGpic"> 
    </div>
    </fieldset>


<!--TikTok opslag-->

    <fieldset id="tikTok">
        <legend>Tiktok post</legend>
        <div class="flexBox"> <!-- ./flex -->
        <img src="" alt="">
        <img src="" alt="">
        </div>
    </fieldset>


<!-- Den fermøse Footer -->
    <footer class="footer"></footer>

`

}
/* ELLERS så ryger man sku bare direkte tilbage */
else { window.location="https://storytelling.msfh.dk/"; 
} 