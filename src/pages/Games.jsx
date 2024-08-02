import React from 'react'
import Card from '../components/Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Games() {

  const PcGames = [
    {
      name:"Valorant",
      poster:"https://i.pinimg.com/564x/5a/59/cb/5a59cbcd013100462fd70a73b67ce9cf.jpg",
      review:"Valorant is a tactical first-person shooter by Riot Games, offering intense 5v5 matches where players utilize unique agent abilities alongside precise gunplay.", 
    },
    {
      name:"CS:GO",
      poster:"https://i.pinimg.com/564x/2f/a8/e4/2fa8e4987f3c7b27847c1d4353d3ead4.jpg",
      review: "CS:GO, a competitive FPS game, features intense gameplay, strategic team battles, and skillful shooting mechanics, attracting millions of players worldwide.", 
    },
    {
      name:"Fortnite",
      poster:"https://i.pinimg.com/236x/50/65/54/50655437ff81ed9c54b5515a67d730f6.jpg",
      review:"It is a popular battle royale game where players compete to be the last one standing, building structures and gathering resources in a dynamic community with regular updates.", 
    },
    {
      name:"league of legends ",
      poster:"https://i.pinimg.com/236x/31/eb/20/31eb203bc49e4876cf20471837284a1b.jpg",
      review:"League of Legends is a popular multiplayer online battle arena game where teams of champions battle it out to destroy each other's nexus.", 
    },
    {
      name:"Dota 2",
      poster:"https://i.pinimg.com/564x/b0/3a/9a/b03a9ab25a3e9449a6bc4645f97ba213.jpg",
      review:"Dota 2: 5v5 MOBA where teams battle to destroy the enemy's ancient with unique heroes. Strategy, teamwork, and skill define this competitive juggernaut.", 
    },
    {
      name:"Call of Duty",
      poster:"https://i.pinimg.com/236x/71/f7/ed/71f7edde8705899702ec4d9f4660b0b3.jpg",
      review:"Intense FPS game with multiplayer battles and gripping campaigns across various historical and futuristic settings. Fast-paced action, strategic, and diverse modes keep players engaged.", 
    },
  ]

  const consoleGames = [
    {
      name:"Fifa 2023",
      poster:"https://i.pinimg.com/236x/35/04/98/3504983aa150daf92d780683913c1c68.jpg",
      review:"FIFA 2023 features improved graphics, enhanced gameplay mechanics, updated rosters, new game modes, and online multiplayer options, offering an immersive football gaming experience.", 
    },
    {
      name:"GTA V",
      poster:"https://i.pinimg.com/564x/e5/0b/fa/e50bfad128e3cafdba43ea7f0abb6e05.jpg",
      review: "GTA 5 is an open-world action-adventure game set in fictional Los Santos. Players complete missions, explore the city, and engage in various activities.", 
    },
    {
      name:"god of war",
      poster:"https://i.pinimg.com/564x/10/d8/88/10d8886dd0d15a6189ff91279ea287d5.jpg",
      review: "God of War is a popular action-adventure game series where players control Kratos, a powerful warrior, as he battles gods, monsters, and mythical creatures in a quest for vengeance and redemption.", 
    },
    {
      name:"last of us",
      poster:"https://i.pinimg.com/236x/06/3b/b8/063bb8a05a926b7df391968c1270eee1.jpg",
      review: "The Last of Us is a post-apocalyptic action-adventure game where players navigate through a dangerous world filled with infected humans and hostile survivors, focusing on the story of Joel and Ellie", 
    },
    {
      name:"Uncharted series",
      poster:"https://i.pinimg.com/236x/d7/9d/0f/d79d0f97b214b73e1f15f9f999a394fa.jpg",
      review: "The Uncharted series is an action-adventure game franchise developed by Naughty Dog. It follows treasure hunter Nathan Drake as he explores exotic locations, unravels historical mysteries, and battles enemies. ", 
    },
    {
      name:"Spider-men 2",
      poster:"https://i.pinimg.com/564x/08/cb/8e/08cb8e7bffddc1aead611c7f51dabefd.jpg",
      review: "Spider-Man 2 for PS5 is an action-adventure game featuring Peter Parker and Miles Morales, with improved graphics, gameplay, and a larger open-world setting.", 
    },
    
  ]


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const mobileSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };
  return (
      <>
        <div className=' overflow-hidden bg-black'>

          <div className=' w-full mt-16 mb-6 lg:mt-20'>
            <h1 className='text-center font-mono font-bold text-4xl tracking-tight' >
              <span className='bg-red-500 py-2 px-4 rounded-2xl cursor-pointer
                               text-white hover:bg-white hover:text-red-500
                               transition-all duration-700
                               '>
                PC GAMES
              </span>
            </h1>

          </div>
            {/* For desktop screen */}
            <div className='w-[50%] mx-auto mt-6 py-4 hidden md:block'>
             <Slider className='hidden md:block' {...settings}>
                {
                  PcGames.map((game) => (
                    <Card 
                    name={game.name}
                    description={game.review}
                    img={game.poster} />
                  ))
                }
              </Slider>
            </div>


            {/* For mobile screen this silder is used  */}
            <div className='w-[80%] mx-auto py-4 visible md:hidden'>
             <Slider className='visible md:hidden ' {...mobileSettings}>
                {
                  PcGames.map((game) => (
                    <Card 
                    name={game.name}
                    description={game.review}
                    img={game.poster} />
                  ))
                }
              </Slider>
            </div>

            

                  {/* Console games silder  */}
          <div className=' w-full mt-16 mb-6 lg:mt-24'>
                <h1 className='text-center font-mono font-bold text-4xl tracking-tight' >
                  <span className='bg-red-500 py-2 px-4 rounded-2xl cursor-pointer
                                  text-white hover:bg-white hover:text-red-500
                                  transition-all duration-700
                                  '>
                    Console GAMES
                  </span>
                </h1>

              </div>


                {/* For desktop screen */}
                <div className='w-[50%] mx-auto mt-6 py-4 hidden md:block mb-24'>
                <Slider className='hidden md:block' {...settings}>
                    {
                      consoleGames.map((game) => (
                        <Card 
                        name={game.name}
                        description={game.review}
                        img={game.poster} />
                      ))
                    }
                  </Slider>
                </div>
                {/* For mobile screen this silder is used  */}
                <div className='w-[80%] mx-auto py-4 visible md:hidden mb-24'>
                <Slider className='visible md:hidden ' {...mobileSettings}>
                    {
                      consoleGames.map((game) => (
                        <Card 
                        name={game.name}
                        description={game.review}
                        img={game.poster} />
                      ))
                    }
                  </Slider>
            </div>

         </div> 
      </>
  )
}

export default Games