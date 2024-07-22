import ProjectData from "@/data/ProjectData";

export default [
  new ProjectData(
    "project-3",
    "Rift & Sync",
    "img/projects/riftable-toss.gif",
    `
    <div class="paragraph">
      <strong>Rift & Sync</strong> is an experimental 2-player top-down puzzle co-op where a Voronoi splitscreen is leveraged
      as a main mechanic. While the screen divider adjusts depending on player position, objects can be passed across the divider,
      making for interesting gameplay and puzzle design.
      <br/><strong>Rift & Sync</strong> is coming to PAX Australia 2024!
    </div>

    <div class="paragraph">
      What to be excited for :
      <ul>
      <li>Puzzles aplenty!</li>
      <li>Dynamic, physics-based environment</li>
      <li>Hardware agnostic control scheme</li>
      <li>Interactable objects, with the novel splitscreen mechanic</li>
      </ul>
    </div>

    <div class="paragraph center">
      <img class="pc-screenshot" src="img/projects/riftable-toss.gif" alt="tossing a riftable object" />
      <img class="pc-screenshot" src="img/projects/ghost.gif" alt="ghosting a riftable object" />
      <img class="pc-screenshot" src="img/projects/tether.gif" alt="a tethered riftable object" /> 
      <img class="pc-screenshot" src="img/projects/tether-laser.gif" alt="tether and riftable laser" /> 
    </div>
    `,
    "#df2e64"
  ),
  new ProjectData(
    "project-4",
    "Afterlight",
    "img/projects/2d-3d.gif",
    `
    <div class="paragraph">
      <strong>Afterlight</strong> is a 2-player cooperative puzzle solving, combining classic 2D platformer
      with shadow manipulation on the 3D side.
      <br/>On this game, I work mainly as the lead programmer, optimizing some intensive operations and facilitating project management.
      <br/><strong>Afterlight</strong> is also coming to PAX Australia 2024!
    </div>

    <div class="paragraph">
      What's the big idea :
      <ul>
      <li>Shadow mesh for 2D physics handling</li>
      <li>Hardware agnostic control scheme</li>
      <li>Puzzle components and custom engine tooling</li>
      </ul>
    </div>

    <div class="paragraph center">
      <img class="pc-screenshot" src="img/projects/3d-manip.gif" alt="3D manipulation" />
      <img class="pc-screenshot" src="img/projects/2d-platform.gif" alt="2D platformer" /> 
    </div>`,
    "#1ca1e2"
  ),
];
