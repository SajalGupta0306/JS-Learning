import "./styles.css";

class AutoSearch extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  get url() {
    return this.getAttribute("url");
  }

  static get observedAttributes() {
    return ["url"];
  }

  attributeChangedCallback(obj, oldVal, newVal) {
    if (obj === "url") {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
    const input = this.shadow.getElementById("q");
    input.addEventListener("keyup", this.showResults.bind(this));
  }

  showResults() {
    const input = this.shadow.getElementById("q");
    const res = this.shadow.getElementById("result");
    res.innerHTML = "";
    const val = input.value.trim();
    let list = "";
    if (val === "") {
      return;
    }
    fetch(this.url)
      .then((resp) => resp.json())
      .then((data) => {
        const terms = data.filter((term) => {
          return term.name.toLowerCase().includes(val.toLowerCase())
            ? term
            : "";
        });
        if (terms.length !== 0) {
          for (let i = 0; i < terms.length; i++) {
            list += "<li>" + terms[i].name + "</li>";
          }
          res.innerHTML = "<ul>" + list + "</ul>";
        }
      });
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        #result ul {
          list-style: none;
        }
        
        #result ul li {
          width: 200px;
          height: 50px;
          border: 1px solid lightseagreen;
          padding: 5px;
        }
        
        #result ul li:hover {
          background: #eee;
        }
        
        #main {
          display: flex;
          align-items: center;
          margin: 50px;
          flex-direction: column;
        }
        
        input {
          width: 200px;
          height: 25px;
        }
      </style>
      
      <div id="main"> 
        <input type="text" name="q" id="q" placeholder="Enter search term..." />
        <div id="result">
        </div>
      </div>
    `;
  }
}

customElements.get("my-auto-search") ||
  customElements.define("my-auto-search", AutoSearch);
