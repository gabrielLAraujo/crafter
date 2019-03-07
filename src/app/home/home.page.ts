import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cerveja } from "src/models/cerveja";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  public cervejas: Cerveja[];

  constructor(private _http: HttpClient) {
    this._http
      .get<Cerveja[]>("http://localhost:3000/cervejas")
      .subscribe(cervejas => {
        this.cervejas = cervejas;
        console.log(cervejas);
      });
  }
}
