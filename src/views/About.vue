<template>
  <div style="margin-bottom: 80px;">
    <h1>Xin chào!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Aly</strong>, a game developer enthusiast with 2 years of
        professional experience in Unity development.<br />
        I'm passionate about what I make (mostly gameplay prototyping, with some
        design work on the side) and love to geek out on well-designed
        architecture.
      </div>

      <div style="margin-top: 20px;">
        I've worked on a number of
        <router-link to="/past-projects">games</router-link> over the years,
        some of which are in
        <router-link to="/current-projects">active development</router-link>,
        which are coming to PAX 2024!
      </div>

      <div style="margin-top: 40px;">
        I'm <strong>currently looking for a job</strong> as a game developer.
        You can reach me at
        <a href="mailto:lythienan164@gmail.com">lythienan164@gmail.com</a>
        or <router-link to="/contact">through here</router-link>.
      </div>
    </div>

    <div class="photo">
      <img
        class="image"
        src="img/avatar.jpg"
        alt="Avatar of Aly"
        width="250"
        height="250"
      />
    </div>

    <div style="clear:both"></div>
  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
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
    padding: 10px;
    padding-left: 80px;
  }

  .image {
    border-radius: 50%;
  }
}
</style>
