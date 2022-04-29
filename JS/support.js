/* Så er der variabler */
var password; 
var pass1="meget_hemmeligt"; /* Det er koden */

password=prompt('Hva\' koden?','meget "understreg" hemmeligt'); /* Det er userinput til at skrive koden  */
if (password==pass1) {  /* Hvis man er værdig til at forsætte */
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

<img src="supportimg/sweet_spot1.svg" alt="that sweet sweet spot" id="SweetSpot"></div>
</div>
    <!-- content kalender med hvor og hvornår -->
<div id="contentCalender">
<img src="supportimg/content_kalender_some.png" id="SoMeCalender" alt="kalenderen med content af hvem har ansvaret for hvad">
</div>
<!-- UCG -->
    <fieldset id="UCG">
        <legend>UCG</legend>
        <p> Vi bruger vores Facebook post for at generer UGC, hvor læsere kan sende billede af deres hverdag og ”eventyr” fra studietiden, disse billeder kan bruges til fremtidige post på fx Instagram. </p>
      </fieldset>
    
<!-- SEO keywords-->
<fieldset id="keyWords">
    <legend>Keywords</legend>
    For at finde keywords til vores SEO, startede vi med at tage et kig på Google Trends. Men da vi har et forholdsvis nyt emne, i form af studerende som forældre, kom der ikke så meget frem. 
    Derfor gik vi over til en brainstorm, via et mindmap, hvor vi skrev alle de ord ned som kunne være relevante, samt de ting som vi kunne finde via Google Trends.
    Det vi fandt frem til at være et væsentligt emne, er økonomi, som også er noget andre studerende ville kunne være interesseret i at få information om.
    Derfor har vi i nogle af postsene lavet en form for tips og råd-serie, hvor økonomien kommer i fokus, f.eks. med et #su hashtag. 
    <img src="supportimg/mindmap.JPG" alt="SEO keyords" id="SEOmap">
</fieldset>

<div class="flexBox"> <!-- ./flex -->
    <!-- Tone of voice -->
    <img src="supportimg/toneofvoice.png" alt="Tone er lagt" id="TOV">
    <!-- Design manual-->
    <a href="supportimg/SOME-designguide.pdf" download>
  <img src="supportimg/SOME-designguide.png" alt="downloadable designguide til SOME reglerne!" width="20%" height="auto">
</a>
  </div>



<!--Facebook Opslag-->
<fieldset id="Facebook">
    <legend>Facebook post</legend>
    <div class="flexBox"> <!-- ./flex -->
    <img src="supportimg/FB-less.png" alt="Facebook post, der visere det første man ser når der scrolles" id="FB1" class="FBpic">
    <img src="supportimg/FB-mere.png" alt="når der trykkes på mere så kan den fulde tekst læses" class="FBpic">
    <img src="supportimg/FB2-less.png" alt="Nej endnu et post til facebook" class="FBpic">
    <img src="supportimg/FB2-mere.png" alt="Når der trykkes på læs mere så bumtibumbum mere tekst" class="FBpic">
	<img src="supportimg/FB3-less.png" alt="det er magi, ikke så meget tekst" class="FBpic">
    <img src="supportimg/FB3-mere.png" alt="nu kom der massere af tekst :O" class="FBpic">
    <img src="supportimg/FB-videoserie.png" alt="Henriks poooost til faaaacebooook" class="FBpic">
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
        <div id="player6"></div>
        <div id="player7"></div>
        </div>
    </fieldset>


<!-- Den fermøse Footer -->
    <footer class="footer"></footer>

`

}
/* ELLERS så ryger man sku bare direkte tilbage */
else { window.location="https://storytelling.msfh.dk/"; 
} 