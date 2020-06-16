import React from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
        <div className="startup-projects-main">
        <div class="user-projects">
         <div class="contents">
        <h3> Lemmigs 3 : Dragon Witcher </h3>
          <p>A project made with C++ and OpenGL for the subject Videogames in FIB-UPC.
             On this project, we created a 2d game in a group of 2 people based on the famous game Lemmings. We used two inspirations for the lore and the abilities of the lemmings: dragon ball and The witcher.
             We created three levels and eight skills for the lemmings, an interface (UI) with a clock, a double-speed button and a functional menu. The lemmings have two different skins.
          </p>
          <ul>
            <li> All gameplay logic</li>
            <li> Pixel art of the dragon ball skins</li>
          </ul>
         <div class="images-right" onClick={() => openProjectInNewWindow("https://github.com/Dartemiss/CloudLemmings")}>
          <img src={require("../../assets/images/lemmings.png")} alt="Girl in a jacket" width="600" height="370"></img>
         </div>
      </div>
    </div>


    <div class="user-projects">
         <div class="contents">
        <h3> Fallout GO </h3>
          <p>A project made with Unity for the subject Videogames in FIB-UPC.
On this project, we created a 3d game in a group of 2 people based on the Square Enix game Lara Croft GO. We used Bethesda’s, Fallout lore as inspiration for this game. We created all the models, VFX, animations and scripts from scratch. The game has three levels designed differently being: level 1 an introduction to the mechanics, level 2 plays with height and verticality and level three is a mix of all mechanics with multiple puzzles.
On this game, we developed three different enemies, teleports, obstacles, collectables between different levels, the main menu, and some easter eggs.
We played with lighting implementing a lantern for the player doe to the dark of some levels.

          </p>
          <ul>
            <li> Combat and navigation programming</li>
            <li> Build and design the levels</li>
            <li> Collectables</li>
          </ul>
         <div class="images-right" onClick={() => openProjectInNewWindow("https://github.com/Dartemiss/Vj-3D-FalloutGO")}>
          <img src={require("../../assets/images/falloutgo.gif")} alt="Girl in a jacket" width="600" height="370"></img>
         </div>
      </div>
    </div>

    <div class="user-projects">
         <div class="contents">
        <h3> Shattered Pixel Dungeon: Coop </h3>
          <p>For my thesis, I made a bot for Pixel Dungeon, for doing so I had to modify the game in order to add an ally into the game to help the player.
The game is made in Java.
The buddy has the same abilities as the main character like recollecting items, attacking, orthogonal movement or advancing to next floors.
That was the first part of the thesis, the main part was to develop an IA using Deep Reinforcement Learning techniques using only the pixels from the game without external data. The results were pretty good considering the difficulty and complexity of a roguelike game and the poor computational power that I had. But in the end the IA managed to defeat the first boss using the bests technique Double Deep Q-Learning.


          </p>
          <ul>
            <li> Implementing multiplayer on Pixel Dungeon</li>
            <li> Trainning a DDQN AI</li>
          </ul>
         <div class="images-right" onClick={() => openProjectInNewWindow("https://github.com/Dartemiss/Coop-Shattered-Pixel-Dungeon-gtx")}>
          <img src={require("../../assets/images/pixeldungeon_coop.png")} alt="Girl in a jacket" width="370" height="600"></img>
         </div>
      </div>
    </div>

    <div class="user-projects">
         <div class="contents">
        <h3> Dragon Engine </h3>
          <p>On my master’s degree, I am developing my own engine Unity-like and we will develop our own brawler game from scratch using that engine. 
The engine is done from scratch using some libraries like SDL, glew (OpenGL), assimp, imgui or devil.


          </p>
          <ul>
            <li> Space partitioning (AABBTree, QuadTree)</li>
            <li> Frustum Culling</li>
            <li> Library integration</li>
          </ul>
         <div class="images-right" onClick={() => openProjectInNewWindow("https://github.com/Dartemiss/DragonEngine")}>
          <img src={require("../../assets/images/DragonEngineGif.gif")} alt="Girl in a jacket" width="600" height="370"></img>
         </div>
      </div>
    </div>

    <div class="user-projects">
         <div class="contents">
        <h3> LittleOrionEngine</h3>
          <p>Worked developing and improving an own engine Unity-like with my collegues where I contributed to:
          </p>
          <ul>
            <li> Undo/Redo system using command pattern</li>
            <li> Implementing Recast library for pathfinding and AI</li>
            <li> Implemented GameInputs system and parsing inputs using SDL.</li>
            <li> Improved the linking on GameplaySystems scripting</li>
            <li> Resource managment: Scene as resource and BuildOptions</li>
          </ul>
         <div class="images-right" onClick={() => openProjectInNewWindow("https://github.com/OnionGalaxy/LittleOrionEngine")}>
          <img src={require("../../assets/images/litleorionengine.gif")} alt="Girl in a jacket" width="600" height="370"></img>
         </div>
      </div>
    </div>

    <div class="user-projects">
         <div class="contents">
        <h3> Twinlight Souls</h3>
          <p> Beat em up game produced for master degree using LitleOrionEngine where I contributed to:
          </p>
          <ul>
            <li> Combos system and animation integration</li>
            <li> Teleport attack mechanic</li>
            <li> VFX integration on gameplay</li>
            <li> Killable surfaces</li>
          </ul>
         <div class="images-right" onClick={() => openProjectInNewWindow("https://github.com/OnionGalaxy/TwinlightSouls")}>
          <img src={require("../../assets/images/twinlightsouls.gif")} alt="Girl in a jacket" width="600" height="370"></img>
         </div>
      </div>
    </div>

    <div class="user-projects">
         <div class="contents">
        <h3> Fix it Stewie </h3>
          <p> 3D arcade game where you have to fix Stewie's parents house after a crazy party night. It's implemented in C# and Unity. It was developed for the Global Game Jam 2020 over a weekend. where I contributed to:
          </p>
          <ul>
            <li> Core game loop</li>
            <li> Main cleaning mechanic</li>
            <li> Environment behaviour</li>
            <li> Ingame UI</li>
          </ul>
         <div class="images-right" onClick={() => openProjectInNewWindow("https://github.com/JorxSS/FixIt-Stewie")}>
          <img src={require("../../assets/images/fixitstewie.gif")} alt="Girl in a jacket" width="600" height="370"></img>
         </div>
      </div>
    </div>

          <div className="starup-project-image"></div>
        </div>
      </div>
    </div>
    </Fade>
  );
}
