import { Component } from "@angular/core";

@Component({
  selector: 'home',
  template: `
            <div class="container"><h1>Angular2 Demo</h1>
              <repo-viewer commitId="081755a9624629f17cd40dbecc01863528be445e" handle="https://github.com/kurapatijayaram/ng2-github-repo-view"></repo-viewer>
            </div>
            `
})
export class HomeComponent {
}
