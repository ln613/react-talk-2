import React, { Component } from 'react';
import 'reveal.js/lib/js/head.min';
import Reveal from 'reveal.js/js/reveal';
import hljs from 'highlight.js/lib/highlight';
import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/beige.css';
import 'highlight.js/styles/vs.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    Reveal.initialize({
      dependencies: [
        { src: 'highlight.js/lib/highlight', async: true, callback: function () { hljs.initHighlightingOnLoad(); } },
      ]
    });
  }
  
  render() {
    return (
      <div className="slides">

        <section>
          <h1>React/Redux Workshop 2</h1>
        </section>

        <section>
          <h3>Agenda</h3>
          <ul>
            <li>React Project Setup</li>
            <li>Redux Devtools</li>
            <li>Q&A</li>
            <ul>
                <li>How data flow through the app</li>
                <li>Authentication</li>
                <li>Caching</li>
                <li>Generic vs specific functions</li>
                <li>Add logging to button click</li>
            </ul>
          </ul>
        </section>

        <section>
          <h3>React Project Setup</h3>
          <ul>
            <li>create-react-app</li>
            <li>webpack, babel, jest</li>
            <li>.env</li>
          </ul>
        </section>

        <section>
          <h3>Redux Devtools</h3>
          <ul>
            <li>Time Travel</li>
            <li>Import/Export</li>
          </ul>
        </section>

        <section>
          <h3>How data flow through the app</h3>
          <ul>
            <li>Initialization</li>
            <ul>
              <li>Create store</li>
              <li>Render app to root div</li>
            </ul>
            <li>Program loop (data in, data out)</li>
            <ul>
                <li>Event (button/link click, input, lifecycle)</li>
                <li> -> actions</li>
                <li> -> reducers (new store)</li>
                <li> -> UI render (new components)</li>
            </ul>
          </ul>
        </section>

        <section>
          <h3>How data flow through the app</h3>
          <ul>
            <li>action creators - event data in, action out</li>
            <li>reducers - current state & action in, new state out</li>
            <li>components - state in, virtual dom out</li>
            <li>saga* - action in, action out</li>
          </ul>
        </section>

        <section>
          <h3>Caching</h3>
          <ul>
            <li>Response.Cache.SetMaxAge...</li>
          </ul>
        </section>

        <section>
          <h3>Authentication</h3>
          <ul>
            <li>JWT (stateless)</li>
            <li>Redirect</li>
          </ul>
        </section>

        <section>
          <h3>Function Composition</h3>
          <ul>
            <li>Ramda</li>            
            <li>Currying (Generic vs specific function)</li>
            <li>HOC (withStep)</li>
            <li>recompose</li>
            <ul>
                <li>withState</li>
                <li>withProps</li>
                <li>lifecycle</li>
            </ul>
          </ul>
        </section>

      </div>
    );
  }
}

export default App;
