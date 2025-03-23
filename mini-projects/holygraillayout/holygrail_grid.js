// holy grail layout grid
// holygrail

// HTML
<header class="header">Header</header>
<main class="container">
  <nav class="left-sidebar">Left Sidebar</nav>
  <article class="main-content">Main Content</article>
  <aside class="right-sidebar">Right Sidebar</aside>
</main>
<footer class="footer">Footer</footer>


// css

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
  background: black;
}

/* .parent {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
} */

.header,
.footer {
  grid-column: span 3;
  background: grey;
  padding: 30px;
}

.container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-column: span 3;
  gap: 10px;
}

.left-sidebar,
.right-sidebar {
  background: aqua;
  padding-top: 40%;
}

.main-content {
  background: blue;
}
