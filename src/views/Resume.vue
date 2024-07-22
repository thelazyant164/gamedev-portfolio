<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm an aspiring developer currently based in Melbourne, Australia. <br />
      I am currently in my third year of Bachelor of Computer Science/Games &
      Interactivity at Swinburne University of Technology.
      <br />
      <br />
      I've been working part-time at
      <a href="https://codiland.com/">Codiland</a> since 2022, where I
      prototyped proprietary game ideas in Unity. While most of my experience
      has been with Unity and C#, I am open to other tech stacks and consider
      myself a quick learner.
      <br />
      <br />
      My biggest strength lies in my production skillsets, as I have a knack for
      managing projects and ensuring progress can be made adhering to a given
      timeline. With most projects, I often find myself in leadership positions,
      coordinating among peers to facilitate an efficient working environment
      and smooth out communications across the various disciplines involved in a
      game production.
      <br />
      <br />
      Besides development, I enjoy video gaming and singing.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Thien An Ly CV.pdf" target="_blank"
          ><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF
        </a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img
        class="image"
        src="img/avatar.jpg"
        alt="Photo of Aly"
        width="250"
        height="250"
      />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Unity Developer <span class="company-name">· Codiland</span></h3>
      <h4>November 2022 - Present</h4>

      <div>
        Design and development of proprietary game ideas:<br />
        - A turn-based strategy roguelike<br />
        - An AR-integrated deck-builder<br />
        - A networked social deduction
      </div>

      <div class="tech-stack">
        Unity 2021, C#
      </div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Programmer</h3>
        <SkillRate name="Unity prototyping" :rate="5" />
        <SkillRate name="C# programming" :rate="4" />
        <SkillRate name="Software architecture" :rate="4" />
        <SkillRate name="3D Graphics pipeline" :rate="3" />
        <SkillRate name="Network multiplayer" :rate="3" />
      </div>

      <div class="skill-set">
        <h3>Producer</h3>
        <SkillRate name="Project management" :rate="5" />
        <SkillRate name="Organization" :rate="5" />
        <SkillRate name="Scheduling" :rate="5" />
        <SkillRate name="Playtest coordination" :rate="4" />
        <SkillRate name="Budgeting" :rate="3" />
      </div>

      <div class="skill-set">
        <h3>Soft skills</h3>
        <SkillRate name="Leadership" :rate="5" />
        <SkillRate name="Problem solving" :rate="5" />
        <SkillRate name="Communication" :rate="4" />
        <SkillRate name="Teamwork" :rate="4" />
        <SkillRate name="Creativity" :rate="3" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Swinburne University of Technology - 2022</h3>
      <h4>Bachelor of Computer Science/Bachelor of Games & Interactivity</h4>
      <div>Major in Software Development</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Fluent (IELTS 8.0, August 2020)</div>

      <h3>Vietnamese</h3>
      <div>Native - first language</div>

      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Video games</h3>
        <div>
          I'm usually into longer narrative-driven journeys (biggest RDR fan
          ever). RPGs and strategy titles are straight up my alley. Most
          recently I'm going through an XCOM phase...<br />
          Co-op experiences are my favourite kind of game. I love exploring
          them, in combination with prototyping some experimental concepts.
        </div>

        <h3>I 🧡 Singing</h3>
        <div>
          Despite being a self-trained baritone with a darker tessitura, my
          money notes are all falsetto in the 4th octave...
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.company-name {
  opacity: 0.5;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float: left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}
.image {
  border-radius: 50%;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px;
  }
  .image {
    border-radius: 50%;
  }
}
</style>
