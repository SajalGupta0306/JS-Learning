// holy grail layout flex
//holygrail

// html
<header class="header">Header</header>
<main class="container">
  <nav class="left-sidebar">Left Sidebar</nav>
  <article class="main-content">Main Content</article>
  <aside class="right-sidebar">Right Sidebar</aside>
</main>
<footer class="footer">Footer</footer>


// css
* {
  margin: 2px;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 24px;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.header,
.footer {
  padding: 20px 0 20px 0;
  background: lightblue;
}

.container {
  display: flex;
  flex: 1;
}

.left-sidebar,
.right-sidebar {
  background: grey;
  flex: 1 1 5rem;
  padding-top: 2rem;
}

.main-content {
  flex: 3 3;
  background: lightcoral;
  padding-top: 2rem;
}

@media all and (max-width: 540px) {
  .container {
    flex-direction: column;
  }
}



