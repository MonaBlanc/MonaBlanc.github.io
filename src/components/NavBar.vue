<template>
  <!-- Menu section -->
  <div id="menu">
    <div @click="menuOnClick()" id="menu-bar">
      <div class="bar" id="bar1"></div>
      <div class="bar" id="bar2"></div>
      <div class="bar" id="bar3"></div>
    </div>
    <div class="sidebar-nav" id="sidebar-nav">
      <div class="rs-sidenav rs-sidenav-subtle rs-sidenav-collapse-in" role="navigation">
        <div class="rs-sidenav-body">
          <div class="sidebar-links">
            <div class="fade-in-section is-visible" style="transition-delay: 100ms">
              <div>
                <a class="underline-hover-effect" href="#about">#about me</a>
              </div>
            </div>
            <div class="fade-in-section is-visible" style="transition-delay: 200ms">
              <div>
                <a class="underline-hover-effect" href="#skills">#skills</a>
              </div>
            </div>
            <div class="fade-in-section is-visible" style="transition-delay: 300ms">
              <div>
                <a class="underline-hover-effect" href="#portfolio">#portfolio</a>
              </div>
            </div>
            <div class="fade-in-section is-visible" style="transition-delay: 400ms">
              <div>
                <a class="underline-hover-effect" href="#experience">#experience</a>
              </div>
            </div>
            <div class="fade-in-section is-visible" style="transition-delay: 500ms">
              <div>
                <a class="underline-hover-effect" href="#education">#education</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar-logos" href="/">
        <a href="https://fr.linkedin.com/in/kimberley-jacquemot" target="_blank" underline-hover-effect>
          <i class="fab fa-linkedin" style="font-size: 30px; color: var(--bg-color); padding: 5px"></i>
        </a>
        <a href="https://github.com/MonaBlanc" target="_blank">
          <i class="fab fa-github" style="font-size: 30px; color: var(--bg-color); padding: 5px"></i>
        </a>
      </div>
    </div>
  </div>
  <div class="menu-bg" id="menu-bg"></div>
</template>

<script setup lang="ts">
// Function to toggle menu
const menuOnClick = (): void => {
  const menuBar = document.getElementById("menu-bar");
  const sidebarNav = document.getElementById("sidebar-nav");
  const menuBg = document.getElementById("menu-bg");

  if (menuBar && sidebarNav && menuBg) {
    menuBar.classList.toggle("change");
    sidebarNav.classList.toggle("change");
    menuBg.classList.toggle("change-bg");
  }
};
</script>

<style lang="scss" scoped>
/* L'ours barbu was here */

/* 🍔 */
#menu-bar {
  width: 45px;
  height: 40px;
  top: calc(50% - 40px);
  cursor: pointer;
  position: fixed;
  right: 0;
  padding-right: 15px;
  z-index: 2;
}

/* Bulle */

.menu-bg {
  z-index: 1;
  width: 0;
  height: 0;
  background: radial-gradient(circle, var(--third-color), var(--third-color));
  border-radius: 50%;
  transition: 0.3s ease;
  position: fixed;
  top: 50%;
  width: 520px;
  height: 460px;
  transform: translate(100%, -50%);
  right: 0;
  transform-origin: 50% 50%;
}

.change-bg {
  transform: translate(50%, -50%);
}

.bar {
  height: 5px;
  width: 100%;
  background-color: var(--third-color);
  display: block;
  border-radius: 5px;
  transition: 0.3s ease;
}

#bar1 {
  transform: translateY(-4px);
}

#bar3 {
  transform: translateY(4px);
}

#menu {
  position: fixed;
  top: calc(50% - 100px); /* 50% - moitié de la hauteur */
  transform: translateY(-50%);
  right: 0;
  z-index: 2;
}

.change {
  display: flex !important;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
}

.change .bar {
  background-color: var(--bg-color);
}

.change #bar1 {
  transform: translateY(4px) rotateZ(-45deg);
}

.change #bar2 {
  opacity: 0;
}

.change #bar3 {
  transform: translateY(-6px) rotateZ(45deg);
}

.sidebar-nav {
  right: 0;
  padding-right: 15px;

  background-color: transparent;
  transition: 0.3s ease;
  display: none;
}

.rs-sidenav-subtle {
  background-color: transparent !important;
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  text-align: right;
  letter-spacing: 0em;
  line-height: 1.6em;
  font-size: 24px;
  padding: 0.2em;
  font-weight: bold;
  color: var(--bg-color);
}

.sidebar a {
  text-decoration: none;
}

a:hover {
  color: var(--bg-color);
  text-decoration: none;
}

.sidebar a.underline-hover-effect {
  text-decoration: none;
  color: var(--bg-color);
}

.underline-hover-effect {
  display: inline-block;
  padding-bottom: 0.15rem;
  position: relative;
  color: var(--bg-color);
}

.underline-hover-effect::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: var(--bg-color);
  transition: width 0.25s ease-out;
}
.underline-hover-effect:hover::before {
  width: 100%;
}

.sidebar-logos {
  padding-top: 42px;
  width: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 8px;
}

.sidebar img {
  height: 18px;
}
</style>
