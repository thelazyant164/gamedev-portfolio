import ProjectData from "@/data/ProjectData";

export default [
  new ProjectData(
    "project-1",
    "Hive Havoc: Ants on Wheels",
    "img/projects/cutscene-2.gif",
    `
    <div class="paragraph">
     <strong>Hive Havoc: Ants on Wheels</strong> is an assymetrical-role co-op, 
     combining third-person driver with rail-shooter. It experiments with dynamic camera shift
     to deliver an enhanced cinematic experience, placing emphasis on roles during gameplay.
     <br/>It's available for Windows on Itch.io.
    </div>
    <div class="paragraph center">
        <a href="https://thelazyant164.itch.io/hive-havoc-ants-on-wheels" target="_blank">
        <img src="img/projects/itch-io-logo.png" alt="Itch.io badge" /></a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Affinity-driven input mapping, with local multiplayer support</li>
        <li>Dynamic splitscreen</li>
        <li>Fluid physics simulation</li>
        <li>Dynamic environment: destructibles and explosives for extra mayhem!</li>
        </ul>
    </div>

    <div class="notice">
        Source code is available on <a href="https://github.com/thelazyant164/HiveHavoc-AntOnWheels" target="_blank">GitHub</a>.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/cutscene-1.gif" alt="cutscene 1" />
        <img class="pc-screenshot" src="img/projects/cutscene-2.gif" alt="cutscene 2" />
        <img class="pc-screenshot" src="img/projects/project-1-3.png" alt="screenshot 3" />
        <img class="pc-screenshot" src="img/projects/project-1-4.png" alt="screenshot 4" />
    </div>
    `,
    "#e89221",
  ),
  new ProjectData(
    "project-2",
    "oHMysTArs",
    "img/projects/gameplay.gif",
    `
    <div class="paragraph">
        <strong>oHMYsTArs</strong> is a single-player 2D game designed for those who crave the challenge of memorization,
        taking inspiration from the phone lock pattern.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://youtube.com/embed/DnVRlMDpD4g" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <a href="https://thelazyant164.itch.io/ohmystars" target="_blank">
        <img src="img/projects/itch-io-logo.png" alt="Itch.io badge" /></a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Scriptable object-driven content data pipeline</li>
        <li>Full user flow: level selection, post-game assessment, collectibles</li>
        <li>Interactive step-by-step tutorial</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        Source code is available on <a href="https://github.com/thelazyant164/oHMysTArs" target="_blank">GitHub</a>.
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/project-2-1.png" alt="screenshot 1" />
    <img class="pc-screenshot" src="img/projects/project-2-2.png" alt="screenshot 2" />
    <img class="pc-screenshot" src="img/projects/project-2-3.png" alt="screenshot 3" />
    <img class="pc-screenshot" src="img/projects/project-2-4.png" alt="screenshot 4" />
    </div>
    `,
    "#05131e",
    false,
    true
  ),
];
