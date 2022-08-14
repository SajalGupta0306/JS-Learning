class Dropdown extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      nav {
        background-color: lightslategrey;
      }
      
      nav ul li {
        list-style: none;
        line-height: 40px;
        height: 40px;
        width: 100%;
      }
      
      nav ul li a {
        text-decoration: none;
        color: white;
      }
      
      nav > ul {
        display: flex;
        justify-content: space-evenly;
        text-align: center;
      }
      
      nav ul li ul li {
        display: none;
      }
      
      nav ul li:hover ul li {
        display: block;
        background-color: rgba(49, 61, 61, 0.4);
        opacity: 1;
        width: 100%;
      }
      
      .sub-menu {
        display: none;
      }
      
      .menu-list:hover .sub-menu {
        display: block;
        background-color: rgba(49, 61, 61, 0.4);
        position: absolute;
        margin-left: 180px;
        width: 20%;
      }      
      </style>
      
      <nav id="nav">
      <ul id="navigation">
        <li><a href="#" class="first">Home</a></li>
        <li>
          <a href="#">Services &raquo;</a>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Logo Design</a></li>
            <li class="menu-list">
              <a href="#">Identity &raquo;</a>
              <ul class="sub-menu">
                <li><a href="#">Business Cards</a></li>
                <li><a href="#">Brochures</a></li>
                <li><a href="#">Envelopes</a></li>
                <li><a href="#">Flyers</a></li>
              </ul>
            </li>
            <li><a href="#">Wordpress</a></li>
          </ul>
        </li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    `;
  }
}

customElements.get("my-dropdown") ||
  customElements.define("my-dropdown", Dropdown);
