import {Component, Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import * as d3 from "d3";
import {D3ngGroupContext} from "d3ng/d3ng-groups.component";

@Component({
  selector: 'app-root',
  template: `
    <d3ng-groups [context]="context">
      <d3ng-scatter-plot [data]="data"
                         x="sepal length" y="sepal width"
                         [dimensions]="dimensions">
      </d3ng-scatter-plot>  
    </d3ng-groups>

    <d3ng-groups [context]="context">
      <d3ng-scatter-plot [data]="data"
                         x="petal length" y="petal width"
                         [dimensions]="dimensions">
      </d3ng-scatter-plot>
    </d3ng-groups>
  `,
  styles: ['d3ng-scatter-plot { width: 100%; height: 300px; }']
})

@Injectable()
export class AppComponent {
  context = new D3ngGroupContext();
  data: any[] = null;
  dimensions = ['sepal length',	'sepal width', 'petal length', 'petal width'];

  constructor(http: Http) {
    http.get("http://mbostock.github.io/d3/talk/20111116/iris.csv")
      .map((res: Response) => res)
      .subscribe(res => {
        this.data = d3.csv.parse(res.text()).map(d => {
          // convert data, since d3 creates strings and not numbers
          const result = {};
          this.dimensions.forEach(dim => result[dim] = parseFloat(d[dim]));
          return result;
        });
      });
  }
}
