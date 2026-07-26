import backgroundvideo4 from '../assets/Video Project 8.mp4';
import { useNavigate } from "react-router-dom";
import image1 from '../assets/umaanorth__2025-08-16T085224.000Z.jpg';
import image2 from '../assets/Lana_Rhoades_2-2017_(cropped).jpg';
import image3 from '../assets/Holly Day PAWG.jpg';
import image4 from '../assets/images (2).jpg';
import image5 from '../assets/images.jpg';
import image6 from '../assets/somen_cg-savita-bhabi-somen-cg-01-c.jpg';
import image7 from '../assets/imagess.jpg';
import image8 from '../assets/solo incognita (1).jpg';

function Content(){
  const cards=[
      {"title":"Commatoze North",
      "details":"Porn-Star",
      "image":image1,
      "video":"https://xhamster46.desi/videos/busty-18-y-o-girl-seduced-her-teacher-during-a-lesson-xhDUNzi"},
      {"title":"Lana Rhoades",
      "details":"Porn-Star",
      "image":image2,
      "video":"https://xhamster46.desi/videos/vixen-lana-rhoades-has-sex-with-her-boss-7477925"},
      {"title":"Holly Day",
      "details":"Porn-Star",
      "image":image3,
      "video":"https://xhamster46.desi/videos/zero-tolerance-films-influencer-holly-days-vacation-mix-up-turns-into-hot-collab-sex-xhldrwA"},
      {"title":"Keila Bassi",
      "details":"Porn-Star",
      "image":image4,
      "video":"https://xhamster46.desi/videos/i-thought-my-partner-was-gay-but-he-the-delivery-girl-when-i-go-to-get-the-cash-xhqMRtG"},
      {"title":"Alyx-Star",
      "details":"Porn-Star",
      "image":image5,
      "video":"https://xhamster46.desi/videos/big-tit-alyx-star-squeezes-massive-bbc-inside-her-pussy-xhMhvYP"},
      {"title":"Savita Bhabhi",
      "details":"Animated Porn",
      "image":image6,
      "video":"https://cartoonporn.pro/vids/22607/bollywood-rests-anime-sex-with-busty-indian-milf-savita-bhabhi/"},
      {"title":"Amilia Onyx",
      "details":"Porn-Star",
      "image":image7,
      "video":"https://xhamster46.desi/videos/shoplyfter-busty-thief-gets-punished-by-the-guard-11279590"},
      {"title":"Solo Incognita",
      "details":"Porn-Star",
      "image":image8,
      "video":"https://xhamster46.desi/videos/hot-sex-with-my-slutty-girlfriend-i-filled-the-naughty-girl-with-cum-xhMbTiG"}
    ];
    const navigate = useNavigate();
  function signout(){
    localStorage.removeItem("user");
    navigate("/");}
    function display(card,index){
      return(<div className="card" key={index}>
      <img src={card.image} />
      <h2>{card.title}</h2>
      <p>{card.details}</p>
      <button onClick={function (){ view(card.video);}}>Watch</button>
      </div> );
    }
    function view(videolink){
      window.open(videolink,"blank");
    }
  return(
    <div className="image px-4 md:px-8">
      <button className="logout1-button" onClick={signout} type="button">Sign Out</button>
      <video className="bg-video" autoPlay muted loop playsInline>
            <source src={backgroundvideo4} type="video/mp4" />
            </video>
    {cards.map(display)}
    </div>
  );
}export default Content;