import React from 'react';
import HobbySection from './HobbySection';
import './Hobby.css';
import NavBar from './NavBar';
import DDR from '../assets/images/ddr.jpg';
import Arceus from '../assets/images/Arceus.png';
import LeagueOfLegends from '../assets/images/leagueOfLegends.jpeg';
import PathOfExile from '../assets/images/Path_of_Exile_logo.png';
import MonsterHunter from '../assets/images/monster_hunter_rise.png';
import Bouldering from '../assets/videos/bouldering.mp4';

function MyHobbiesPage() {
    const dancingGamesItems = [
        {
        id: 'dancerush',
        title: 'Dancerush Stardom',
        content: (
            <>
                <p> 
                    A game where you can freely shuffle and be really cool in the eyes of onlookers at an arcade. I started playing
                    since February 2022 - 2 months since I first came to Sydney, Australia to study. At first, I was playing another
                    dancing game, which is Dance Dance Revolution, but I switched to practicing this since this game looks much cooler
                    and offers much more flexibility. I also made a lot of new friends thanks to the game! Below is a video showcasing
                    how the game looks like by friends I know at Sydney!
                </p>
                <iframe title='dancerush' width="400" height="250" src="https://www.youtube.com/embed/Cp0Om_zqayU" allowFullScreen></iframe>
            </>
        ),
        },
        {
        id: 'ddr',
        title: 'Dance Dance Revolution',
        content: (
            <>
                <p>
                    The forsaken child, which I have abandoned in favor of Dancerush Stardom. It features a dancing pad with four buttons
                    and you have to follow symbols on a screen that (most of the time) rhyme with a chosen song.
                </p>
                <img src={DDR} width="400" alt="Dance Dance Revolution"/>
            </>
        ),
        },
    ];

    const videoGamesItems = [
        {
        id: 'pokemon',
        title: 'Pokémon',
        content: (
            <>
                <p>
                    I got into Pokémon quite early by playing Ruby/Sapphire/Emerald on my cousins' Gameboy. I genuinely enjoy the different designs of all the monsters in the game and the different mechanics each game
                    showcases. Since then, I have been following the franchise by reading comics, watching tournaments, and playing games. My favourite game to date is still Platinum, mainly I because I really like the
                    legendary/mythical pokemons in Generation 4.<br />
                    <br />
                    To the right is my favourite pokemon - the god of all pokemons, Arceus.
                </p>
                <img src={Arceus} width="400" alt="Pokemon"/>
            </>
        ),
        },
        {
        id: 'league-of-legends',
        title: 'League of Legends',
        content: (
            <>
                <p>
                    Honestly, the main reason I play League of Legends (LoL) was because many of my Vietnamese friends play it, so I play it as a form of socialization. I usually only watch streams of different
                    LoL tournaments on Twitch.      
                </p>
                <img src={LeagueOfLegends} width="400" alt="LeagueOfLegends"/>
            </>
        ),
        },
        {
        id: 'path-of-exile',
        title: 'Path of Exile',
        content: (
            <>
                <p>
                    A game that I have played since grade 9 with two other games. The game is an ARPG that centers around creating character builds and grinding for loot. The game revolves around 3-monnth leagues that allow me to grind my heart out for a while if I am free and then drop the game completely for other stuff.
                </p>
                <img src={PathOfExile} width="400" alt="PathOfExile"/>
            </>
        ),
        },
        {
            id: 'monster-hunter',
            title: 'Monster Hunter',
            content: (
                <>
                    <p>
                        Yet again another RPG, but this one revolves around hunting big monster, get their body parts, craft weapons and armor from them, and then hunt bigger monsters. I started the series with Monster Hunter 4 Ultimate and then play Monster Hunter World as well as Monster Hunter Rise. Honestly, it is one of the game series that I enjoy the most and will always play the latest version of it.
                    </p>
                    <img src={MonsterHunter} width="400" alt="PathOfExile"/>
                </>
            ),
        },
    ];

    const boulderingItems = [
        {
        id: 'bouldering',
        title: 'Bouldering',
        content: (
            <>
                <p>
                    A sport that I have been doing since 2022. I started bouldering following the encouragement from a friend. I am not that good at it to be perfectly honest, but I am still trying to improve myself.
                </p>
                <video title='bouldering' width="400" height="250" src={Bouldering} controls allowFullScreen></video>
            </>
        ),
        },
    ]


  return (
    <>
        <NavBar />
        <div id="my-hobbies">
            <HobbySection id="Dancing Games" title="Dancing Games" items={dancingGamesItems} />
            <HobbySection id="Video Games" title="Video Games" items={videoGamesItems} />
            <HobbySection id="Bouldering" title="Bouldering" items={boulderingItems} />
        </div>
    </>
  );
}

export default MyHobbiesPage;
