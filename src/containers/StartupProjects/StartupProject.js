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
             We created three levels and eight skills for the lemmings, an interface (UI) with a clock, a double-speed button and a functional menu. The lemmings have two different skins. <br/> <br/>
             My contribution:
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
<br/><br/>
My contribution:
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
That was the first part of the thesis, the main part was to develop an IA using Deep Reinforcement Learning techniques using only the pixels from the game without external data. 
The results were pretty good considering the difficulty and complexity of a roguelike game and the poor computational power that I had. But in the end the IA managed to defeat the first boss using the bests technique, Double Deep Q-Learning.


          </p>
          <ul>
            <li> Implementing multiplayer on Pixel Dungeon</li>
            <li> Training a DDQN AI</li>
          </ul>
         <div class="images-right" onClick={() => openProjectInNewWindow("https://github.com/Dartemiss/Coop-Shattered-Pixel-Dungeon-gtx")}>
          <img src={require("../../assets/images/pixeldungeon_coop.png")} alt="Girl in a jacket" width="370" height="600"></img>
         </div>
      </div>
    </div>

    <div class="user-projects">
         <div class="contents">
        <h3> Dragon Engine </h3>
          <p>On my master’s degree, I am developing my own engine Unity-like. 
The engine is done from scratch using some libraries like SDL, glew (OpenGL), assimp, imgui or devil.
<br/><br/>
Some features:

          </p>
          <ul>
            <li> Space partitioning (AABBTree, QuadTree)</li>
            <li> Frustum Culling</li>
            <li> Scenes serialization</li>
            <li> Mouse Picking</li>
          </ul>
         <div class="images-right" onClick={() => openProjectInNewWindow("https://github.com/Dartemiss/DragonEngine")}>
          <img src={require("../../assets/images/DragonEngineGif.gif")} alt="Girl in a jacket" width="600" height="370"></img>
         </div>
      </div>
    </div>

    <div class="user-projects">
         <div class="contents">
        <h3> LittleOrionEngine</h3>

        <div class="images-right" onClick={() => openProjectInNewWindow("https://github.com/OnionGalaxy/LittleOrionEngine")}>
            <img src={require("../../assets/images/litleorionengine.gif")} alt="Girl in a jacket" width="1000" height="538"></img>
          </div>

          <p>Worked developing and improving an engine Unity-like with my master's degree colleagues. <br/>
             We were doing a simulation of a videogame studio, creating our game engine and developing a game with it. This engine has been on a parallel development while we developed the game,
              it has been done in 9 months.
               <br/><br/>

            My contribution:
          </p>
          <ul>
            <li> Undo/Redo system using the command pattern.</li>
            <br/>
            <div class="images-right">
              <img src={require("../../assets/images/undo_redo.gif")} alt="Girl in a jacket" width="1000" height="452"></img>
            </div>
            <br/>
            <li> Implementing Recast library for pathfinding and AI.</li>
            <br/>
            <div class="images-right">
              <img src={require("../../assets/images/recast.gif")} alt="Girl in a jacket" width="1000" height="563"></img>
            </div>
            <br/>
            <li> Resource management: Scene as resource, BuildOptions, <br/> 
            asyncronous loading of textures using two thread-safe queues,
             one for loading data to memory and another to load data to graphic card.</li>
             <br/>
             <div class="images-right">
              <img src={require("../../assets/images/asyncronous1.gif")} alt="Girl in a jacket" width="600" height="370"></img>
              <img src={require("../../assets/images/transparent.png")} alt="Girl in a jacket" width="20" height="370"></img>
              <img src={require("../../assets/images/asyncronous2.gif")} alt="Girl in a jacket" width="600" height="370"></img>
            </div>
            <br/>

            <li> Animation State machines variables, transitions and conditions based on Unity.</li>
            <br/>
            <div class="images-right">
              <img src={require("../../assets/images/state_machine_variables.gif")} alt="Girl in a jacket" width="1000" height="538"></img>
            </div>
            <br/>
          </ul>
      </div>
    </div>

    <div class="user-projects">
         <div class="contents">
        <h3> Twinlight Souls</h3>

          <div class="images-right" onClick={() => openProjectInNewWindow("https://github.com/OnionGalaxy/TwinlightSouls")}>
            <img src={require("../../assets/images/souls.gif")} alt="Girl in a jacket" width="1000" height="526"></img>
          </div>
          <p> Beat'em up game produced for master's degree using own engine LitleOrionEngine. 
              Game developed by 21 students, 14 programmers and 7 artists, simulating a videogame studio.
              On this game, you fight as an habitant of Niberry fighting against darkness and making the corrupted forest pure again. Fast-paced combat, killing hordes of enemies and an epic boss fight.
              Local Multiplayer and Singleplayer modes available.
              <br/>
              <br/>
              Where I contributed to:
          </p>
          <ul>
            <li> Combat system. </li>
            <br/>
            <div class="images-right">
              <img src={require("../../assets/images/combatsystem.gif")} alt="Girl in a jacket" width="1000" height="494"></img>
            </div>
            <br/>

            <li> LightShield core mechanic.</li>

            <br/>
            <div class="images-right">
              <img src={require("../../assets/images/lightrebounds.gif")} alt="Girl in a jacket" width="1000" height="462"></img>
            </div>
            <br/>
            
            <li> Camera shake, using perlin noise.</li>

            <br/>
            <div class="images-right">
              <img src={require("../../assets/images/camerashake.gif")} alt="Girl in a jacket" width="1000" height="504"></img>
            </div>
            <br/>

            <li> Boss fight (AI, four phases, two different attacks each phase, all sounds and VFX implementation).</li>
            <br/>
            <div class="images-right">
              <img src={require("../../assets/images/phase4.gif")} alt="Girl in a jacket" width="1000" height="504"></img>
              <br/>
              <img src={require("../../assets/images/guidedcrystals.gif")} alt="Girl in a jacket" width="1000" height="577"></img>

            </div>
            <br/>
          </ul>
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
          <img src={require("../../assets/images/fixitstewie.gif")} alt="Girl in a jacket" width="1000" height="630"></img>
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
